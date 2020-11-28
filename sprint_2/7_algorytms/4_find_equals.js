const a = [ 1, 2, 4, 7, 11, 19 ];
const b = [ 2, 7, 19, 28, 31 ];

function findEqualElements(arr1, arr2) {
    const res = []
    arr1.forEach((element) => {
        if(arr2.includes(element)){
            res.push(element)
        }
    })
    return res
}

// Примеры
console.log(findEqualElements([1, 2, 3], [2])) // => [2]
console.log(findEqualElements([2], [1, 2, 3])) // => [2]
console.log(findEqualElements([1, 2, 2, 3], [2, 2, 2, 2])) // => [2, 2]
