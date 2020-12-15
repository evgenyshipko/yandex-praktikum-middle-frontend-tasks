const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
};

function queryStringify(data) {
    let index = 0
    return Object.keys(data).reduce((acc, key) => {
        acc = acc + `${key}=${data[key]}`
        if(index !== Object.keys(data).length - 1){
            acc = acc + '&'
        }
        index++
        return acc
    },'?')
}


class HTTPTransport {
    get = (url, options = {}) => {
        if (options.data) {
            url = url + queryStringify(options.data)
            console.log('url',url)
        }
        return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };

    put = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    post = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    delete = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    request = (url, options = { method: METHODS.GET }, timeout = 5000) => {
        const {method, data} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.timeout = timeout

            if(options.headers){
                Object.keys(options.headers).forEach((header) => {
                    xhr.setRequestHeader(header, options.headers[header])
                })
            }

            xhr.open(method, url);

            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}

const data = {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
console.log(queryStringify(data))
console.log(new HTTPTransport().get('https://www.google.com', {data: data}))
