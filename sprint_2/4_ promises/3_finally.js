Promise.prototype.finally = function (fn) {

    const funcHandler = (fn, result) => {
        try{
            const funcRes = fn()
            if(result){
                return Promise.resolve(result)
            }else{
                return Promise.resolve(funcRes)
            }
        }catch(e){
            return Promise.reject(e)
        }
    }

    return this.then((res) => {
        return funcHandler(fn, res)
    }).catch((e) => {
        return funcHandler(fn)
    })

}

const resolvedPromise = Promise.resolve()
    .finally(() => console.log('cleanup'))

const rejectedPromise = Promise.reject('Error')
    .finally(() => console.log('cleanup'));

const promise = Promise.reject('Error')
    .finally(() => { throw 'foo'; })
    .catch(e => console.log(e)) // => 'foo'

// resolve
const resolvedPromise1 = Promise.resolve(50)
    .finally(() => Promise.resolve(42))
    .then(result => console.log(result));  // => Response 50

const rejectedPromise1 = Promise.reject('Error')
    .finally(() => Promise.reject('foo'))
    .catch(e => console.log(e));           // => 'foo'
