function isEmpty(value) {
    if(['',null,undefined].includes(value)){
        console.log('is primitive exception')
        return true
    }else if(Array.isArray(value)){
        console.log('is Array')
        return value.length === 0
    }else if(['boolean','number','Number'].includes(typeof value)){
        console.log('is boolean,number, Number')
        return true
    }else if((value instanceof Map || value instanceof Set)){
        console.log('is Map or Set')
        return value.size === 0
    }else if(value instanceof Object){
        console.log('is Object')
        return Object.keys(value).length === 0
    }
    return false
}

console.log('null',isEmpty(null)); // => true
console.log('true',isEmpty(true)); // => true
console.log('1',isEmpty(1)); // => true
console.log('[1, 2, 3]',isEmpty([1, 2, 3])); // => false
console.log('{ а: 1 }',isEmpty({ 'a': 1 })); // => false
console.log('\'123\'',isEmpty('123')); // => false
console.log('123',isEmpty(123)); // => true
console.log('\'\'',isEmpty('')); // => true
console.log('0',isEmpty(0)); // => true
