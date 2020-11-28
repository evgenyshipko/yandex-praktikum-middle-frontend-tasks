function zip() {
    // code
    let resultObj = {}
    for (let i = 0; i < arguments.length; i++) {
        resultObj = {...arguments[i],...resultObj}
    }
    return resultObj
}


const a = {'key': 1}
const b = {'pap': 2}
const c = {'pap': 5}

console.log(zip(a,b,c))
