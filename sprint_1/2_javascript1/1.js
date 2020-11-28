// аналог lodash.invert
// { a: 1 } => { 1: 'a' }

function invert(obj) {
    let res = {}
    Object.keys(obj).forEach((key) => {
        const value = obj[key]
        res[value] = key
    })
    return res
}

console.log(invert( { a: 1 }))
