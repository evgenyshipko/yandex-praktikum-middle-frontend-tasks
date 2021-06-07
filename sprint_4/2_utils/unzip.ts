
console.log(unzip([1, 2, 3], [4], [5, 6])); // => [[1, 4, 5], [2, undefined, 6], [3, undefined, undefined]]
console.log(unzip([1, 2, 3])); // => [[1], [2], [3]]
console.log(unzip([1], [1, 2, 3], [4, 6, 7, 8, 9])); // => [[1, 1, 4], [undefined, 2, 6], [undefined, 3, 7], [undefined, undefined, 8], [undefined, undefined, 9]]
/*unzip({})*/ // => Error: [object Object] is not array


function unzip(...args: unknown[]) {
    let maxLength = 0
    args.forEach((arg) => {
        if(!Array.isArray(arg)){
            throw new Error(`${arg} is not array`)
        }
        if(arg.length > maxLength){
            maxLength = arg.length
        }
    })
    const result = []
    args.forEach((arg) => {
        for (let i = 0; i < maxLength; i++){
            if(!result[i]){
                result.push([])
            }
            result[i].push(arg[i])
        }
    })
    return result
}
