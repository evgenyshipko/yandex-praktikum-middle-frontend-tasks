const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const promises = [
    delay(65).then(() => 10),
    delay(100).then(() => { throw 'my error'; })
];


function allSettled(promises) {

    const promiseHandler = (promise) => {
        return promise
            .then((value) => ({status: 'resolved', value}))
            .catch((reason) => ({status: 'rejected', reason}))
    }

    return Promise.all(promises.map(promiseHandler));
}

allSettled(promises).then((res) => {
    console.log(res)
})
