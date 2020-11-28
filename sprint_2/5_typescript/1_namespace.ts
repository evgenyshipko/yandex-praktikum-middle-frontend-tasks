
function namespace(str: String){
    const strArr: string[] = str.split('.')
    let resObj = {}
    strArr.reverse().forEach((key) => {
        resObj = {[key]: resObj}
    })
    return resObj
}

console.log('aaa')
console.log(namespace('a.b.c.d.e')) // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"
