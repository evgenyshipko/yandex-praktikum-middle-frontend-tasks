function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve(42), 1000)
    })
}

const memoized = memoize(getData, 1000);

memoized()
    .then(data1 => console.log('data1',data1)) // получаем долго
    .then(memoized)
    .then(data2 => console.log('data2',data2)) // получаем быстро, из кеша
    .then(memoized)
    .then(data3 => console.log('data3',data3)) // получаем быстро, из кеша
    .then(() => {
        setTimeout(() => {
            return memoized().then(data4 => console.log(data4)); // получаем долго, считается заново
        }, 5000);
    });

function generateKey(args) {
    const res = args.map(arg => {
        if(typeof(arg) === 'undefined'){
            return ""
        }else{
            return `${typeof(arg)}<${String(arg)}>`
        }
    }).join(',');
    return res
}

function memoize(fn, timeout) {
    const cache = {};

    return function (...args) {
        const key = generateKey(args);
        let result = cache[key];
        if (typeof result === 'undefined' || new Date().getTime() > result.expire) {
            console.log('Execute fn')
            return Promise.resolve(fn(...args)).then(value => {
                cache[key] = { value, expire: new Date().getTime() + timeout };
                return value;
            });
        }else{
            console.log('From cache')
            return Promise.resolve(result.value);
        }
    };
}
