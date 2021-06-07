function cloneDeep<T extends object = object>(obj: T) {
    let result
    if(Array.isArray(obj)){
        result = []
        obj.forEach((item) => {
            result.push(cloneDeep(item))
        })
    }else if(isObject(obj)){
        result = {}
        Object.keys(obj).forEach((key) => {
            result[key] = cloneDeep(obj[key])
        })
    }else{
        result = obj
    }
    return result
}


function isObject(item: unknown): boolean{
    return item && !Array.isArray(item) && (item instanceof Object)
}

export default cloneDeep

const objects = [{ 'a': 1 }, { 'b': 2 }];
const deep = cloneDeep(objects);

console.log(deep)

console.log(deep[0] === objects[0]); // => false

