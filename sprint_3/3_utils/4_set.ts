type Indexed<T = unknown> = {
    [key in string]: T;
};


function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    if(!(typeof path === 'string')){
        throw new Error('path must be string')
    }
    if(!(object instanceof Object)){
        return object
    }
    const newObj = path.split('.').reduceRight((acc, key) => {
        value = acc ? acc : value
        return {[key]: value}
    }, undefined)
    return merge(object, newObj)
}

function merge(lhs: Indexed, rhs: Indexed): Indexed {
    const leftKeys = Object.keys(lhs)
    const rightKeys = Object.keys(rhs)

    leftKeys.forEach((leftKey) => {
        const leftData = lhs[leftKey]
        if(rightKeys.includes(leftKey)){
            const rightData = rhs[leftKey]
            if(leftData instanceof Object && rightData instanceof Object){
                lhs[leftKey] = merge(leftData, rightData)
            }else{
                lhs[leftKey] = rightData
            }
        }
    })

    rightKeys.forEach((rightKey) => {
        const commonKeys = Object.keys(lhs)
        if(!commonKeys.includes(rightKey)){
            lhs[rightKey] = rhs[rightKey]
        }
    })

    return lhs
}

export default set

console.log(set({ foo: 5 }, 'bar.baz', 10)); // { foo: 5, bar: { baz: 10 } }
console.log(set(3, 'foo.bar', 'baz')); // 3
