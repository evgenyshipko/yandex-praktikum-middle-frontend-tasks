/**
 const expected =
 '   *   \n' +
 '  ***  \n' +
 ' ***** \n' +
 '*******\n' +
 '   |   \n';
 assert.strictEqual(tree(5), expected);
 assert.strictEqual(tree('5'), expected);
 */

type Nullable<T> = T | null;

const TYPE_ERROR = 'Something wrong with type of input param';

const tree = (lvl: number | string): Nullable<string> => {
    lvl = getValidNumber(lvl)
    if(lvl < 3){
        return null
    }
    let result = ""
    const xLength = 2*(lvl - 1) - 1
    const center = Math.floor(xLength/2)
    for (let y = 0; y < lvl; y++){
        for (let x = 0; x < xLength; x++){
            if(x >= center - y && x <= center + y && y !== lvl - 1){
                result += '*'
            }else if(x >= center && x <= center && y === lvl - 1){
                result += '|'
            }else{
                result += ' '
            }
        }
        result += '\n'
    }
    return result
};

//

const isNumber = (number: number | string) => {
    return (typeof number === 'number' && !Number.isNaN(number)) || (typeof number === 'string' && new RegExp('^\\d+$').test(number))
}

function getValidNumber(num: number | string){
    if(!isNumber(num)){
        throw new TypeError(TYPE_ERROR)
    }
    if(typeof num === 'string'){
        num = Number.parseInt(num)
    }
    return num
}

export default tree

console.log(tree(23))
