console.log(classNames("foo", "bar")); // => 'foo bar'
console.log(classNames("foo", { bar: true })); // => 'foo bar'
console.log(classNames({ "foo-bar": true })); // => 'foo-bar'
console.log(classNames({ "foo-bar": false })); // => ''
console.log(classNames({ foo: true }, { bar: true })); // => 'foo bar'
console.log(classNames({ foo: true, bar: true })); // => 'foo bar'
console.log(
    classNames("foo", { bar: true, duck: false }, "baz", { quux: true })
); // => 'foo bar baz quux'
console.log(classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")); // => 'bar 1'
console.log(classNames('bar', [1, null, 'baz'], {baz: true}, '3')); // => 'bar 1 baz baz 3'
console.log(classNames('bar', [1, null, 'baz', ['foo', 'test']], {baz: true}, '3')); // => 'bar 1 baz foo test baz 3'

function classNames(...args: unknown[]) {
    let result = ''
    args.forEach((arg, i) => {
        if((typeof arg === 'string') || isNumber(arg)){
            result += arg
        }else if(isObject(arg)){
            const keyArr = Object.keys(arg).filter((key) => {
                return arg[key]
            })
            result += classNames(...keyArr)
        }else if(isArray(arg)){
            result += classNames(...arg)
        }

        if(i < args.length - 1 && arg){
            result += " "
        }
    })
    return result.trim('')
}

type PlainObject<T = unknown> = {
    [k in string]: T;
};

function isNumber(value: unknown): value is number{
    return typeof value === 'number' && !Number.isNaN(value) && value !== 0
}

function isObject(value: unknown): value is PlainObject {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value: unknown): value is [] {
    return Array.isArray(value);
}
