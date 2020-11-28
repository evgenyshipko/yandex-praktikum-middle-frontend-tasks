

type NestedArray<T = unknown> = T | NestedArray<T>[];

function flatten<T>(array: NestedArray<T>[]): T[] {
    // code here
    const res: T[] = []
    array.forEach((elem) => {
        if(Array.isArray(elem)){
            Array.prototype.push.apply(res, flatten(elem))
        }else{
            res.push(elem)
        }
    })
    return res
}

const res = flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }]);
console.log(res)
// возвращает
//      [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]

