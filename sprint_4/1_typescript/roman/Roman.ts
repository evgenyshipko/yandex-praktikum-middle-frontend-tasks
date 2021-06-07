/**
 * @description error codes
 * @type {string}
 */
const TYPE_ERROR = 'Unsupported input value type';
const RANGE_ERROR = 'Input value must be [1; 3999]';
const UNKNOWN_SYMBOLS = 'Unknown input symbols';

/**
 * @description validate input values and determinate needed convert solution
 * @param {string|number} number
 * @returns {string|number}
 */
export const numberConverter = (number: StrOrNum):StrOrNum => {
    if (typeof number !== 'string' && typeof number !== 'number'){
        throw new Error(TYPE_ERROR)
    } else if(isArabicNumber(number)){
        if (typeof number === 'string'){
            number = Number.parseInt(number)
        }
        if (number > 0 && number < 4000){
            return convertArabicToRoman(number as number)
        }
        throw new Error(RANGE_ERROR)
    }else if(isRomanNumber(number)){
        if (isValidRoman(number as string)){
            return convertRomanToArabic(number as string)
        }
        return NaN
    }else if (typeof number === 'string' || Number.isNaN(number)){
        throw new Error(UNKNOWN_SYMBOLS)
    }
};

type StrOrNum = number | string

export const isArabicNumber = (number: StrOrNum) => {
    return (typeof number === 'number' && !Number.isNaN(number)) || (typeof number === 'string' && new RegExp('^\\d+$').test(number))
}

export const isRomanNumber = (number: StrOrNum) => {
    return typeof number === 'string' && new RegExp('^[IVXLCDM]+$','i').test(number)
}

export const isValidRoman = (number: string) => {
    let counter = 0
    let previousChar = ""
    let result = true
    for (let character of number.split("")){
        if (character === previousChar){
            counter++
        }else{
            counter = 0
        }
        if (counter > 2){
            result = false
        }
        previousChar = character
    }
    return result
}

const roman: Record<string, number> = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

export function convertArabicToRoman(num: number) {
    var str = ''
    for (var i of Object.keys(roman)) {
        var q = Math.floor(num / roman[i])
        num -= q * roman[i]
        str += i.repeat(q)
    }
    return str
}

export function convertRomanToArabic(num: string) {
    let result = 0,
        current, previous = 0;
    for (const char of num.toUpperCase().split("").reverse()) {
        current = roman[char];
        if (current >= previous) {
            result += current;
        } else {
            result -= current;
        }
        previous = current;
    }
    return result;
}



// export default roman

// console.log(roman(1904)) // MCMIV
// console.log(roman('MCMXC')) // 1990
// console.log(roman('2017')) // MMXVII
//
// console.log(roman('19a04')) // UNKNOWN_SYMBOLS
// // console.log(roman(true)) // TYPE_ERROR
// console.log(roman(0)) // RANGE_ERROR
// console.log(roman('xxxxx')) // NaN
