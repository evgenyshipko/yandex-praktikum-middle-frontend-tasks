
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

function take(list: number[], num: number = 1): number[] {
    if(!Array.isArray(list) || typeof num !== 'number'){
        throw new ValidationError('bad value')
    }
    return list.slice(0, num)
}

console.log(take([1, 2, 3])); // => [1]
console.log(take([1, 2, 3], 2)); // => [1, 2]
console.log(take([1, 2, 3], 5)); // => [1, 2, 3]
console.log(take([1, 2, 3], 0)); // => []
