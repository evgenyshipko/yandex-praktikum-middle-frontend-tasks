function fetchWithRetry(url, options) {
    let count = options.retries
    while(count !== 0){
        new HTTPTransport().get(url, options)
            .then((res) => {
                return Promise.resolve(res)
            })
            .catch((err) => {

            })
        count--
    }
    throw new Error('количество попыток закончилось')
}
