// euclid(6006, 3738735, 51051) --> 3003
// euclid(7) --> 7
// euclid(-421, 0.9923501, 3.1401525235324, -228.148832269) --> -1

/**
 * counts greatest common divisor for n numbers
 * by calling 'euclidForTwo' in cycle for all input params
 * @param {array} ...args contains numbers to check
 * @returns {number} solution or '-1' in case of invalid data
 */
const euclid = (...args: number[]): number => {
    if(args.length === 1){
        return args[0]
    }

    let isValid = true
    args.forEach((arg) => {
        if(arg < 0 || !Number.isInteger(arg) || typeof arg !== 'number'){
            isValid = false
        }
    })
    if(!isValid){
        return -1
    }

    let nodArr = []
    for (let i = 0; i < args.length; i++){
        for(let j = 0; j < args.length; j++){
            if(i !== j){
                nodArr.push(euclidForTwo(args[i],args[j]))
            }
        }
    }
    const uniqueNodArr: number[] = nodArr.filter((v, i, a) => a.indexOf(v) === i)
    if(uniqueNodArr.length === 1){
        return uniqueNodArr[0]
    }else{
        return euclid(...uniqueNodArr)
    }
}
export default euclid

function euclidForTwo(a: number, b: number){
    while (a != 0 && b != 0){
        if (a > b){
            a = a % b
        }
        else{
            b = b % a
        }
    }
    return a + b
}

console.log(euclid(6006, 3738735, 51051)) //3003
console.log(euclid(7)) //7
console.log(euclid(-421, 0.9923501, 3.1401525235324, -228.148832269)) // -1
console.log(euclid(0, 0))
console.log(euclid(8, 6, 24))

//console.log(euclidForTwo(0,0))
