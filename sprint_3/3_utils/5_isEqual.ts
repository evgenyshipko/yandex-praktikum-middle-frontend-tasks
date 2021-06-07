type PlainObject<T = unknown> = {
    [k in string]: T;
};

function isArray(value: unknown): value is [] {
    return Array.isArray(value);
}

function isObject(value: unknown): value is PlainObject {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}


function isEqual(lhs: object, rhs: object): boolean {
    if(!isObject(a) || !isObject(b)){
        return false
    }

    if( Object.keys(lhs).length !==  Object.keys(rhs).length){
        return false
    }


    // @ts-ignore
    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key];

        if (typeof value === 'function' && typeof rightValue === 'function'){
            if(value.toString() === rightValue.toString()){
                continue
            }
            return false
        }else if ((isArray(value) && isArray(rightValue)) || (isObject(value) && isObject(rightValue))){
            if (isEqual(value, rightValue)) {
                continue;
            }
            return false;
        }else {
            // @ts-ignore
            if (Number.isNaN(value) && Number.isNaN(rightValue)){
                        continue
                    }
        }

        if (value !== rightValue) {
            return false;
        }
    }
    return true
}


export default isEqual

const a = {a: 1, b: {c: 76}, d: () => 'privet'};
const b = {a: 1, b: {c: 76}, d: () => 'privet'};

console.log(isEqual(a, b)); // true
