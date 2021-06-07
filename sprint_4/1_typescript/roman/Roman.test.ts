import { assert } from 'chai'
import { describe, it } from 'mocha'
import {
    convertArabicToRoman,
    convertRomanToArabic,
    isArabicNumber,
    isRomanNumber,
    isValidRoman,
    numberConverter
} from "./Roman";

describe('isArabicNumber', function () {
    it('number', function () {
        assert.equal(isArabicNumber(10), true)
        assert.equal(isArabicNumber(4589745), true)
    });
    it('str like number', function () {
        assert.equal(isArabicNumber('54'), true)
        assert.equal(isArabicNumber('10853987'), true)
    });
    it('text string', function () {
        assert.equal(isArabicNumber('fsdfssfd'), false)
    });
    it('boolean', function () {
        assert.equal(isArabicNumber(true), false)
    });
})

describe('isRomanNumber', function () {
    it('some text', function () {
        assert.equal(isRomanNumber('fdsg'), false)
    });
    it('arabic number', function () {
        assert.equal(isRomanNumber('fdsgm'), false)
    });
    it('roman number', function () {
        assert.equal(isRomanNumber('xxxml'), true)
    });
})

describe('convertArabicToRoman', function () {
    it('10', function () {
        assert.equal(convertArabicToRoman(10), 'X')
    });
    it('1', function () {
        assert.equal(convertArabicToRoman(1), 'I')
    });
    it('3999', function () {
        assert.equal(convertArabicToRoman(3999), 'MMMCMXCIX')
    });
})

describe('convertRomanToArabic', function () {
    it('Lower case x', function () {
        assert.equal(convertRomanToArabic('x'), 10)
    });
    it('Upper case X', function () {
        assert.equal(convertRomanToArabic('X'), 10)
    });
    it('IX', function () {
        assert.equal(convertRomanToArabic('IX'), 9)
    });
    it('V', function () {
        assert.equal(convertRomanToArabic('V'), 5)
    });
    it('IV', function () {
        assert.equal(convertRomanToArabic('IV'), 4)
    });
    it('VI', function () {
        assert.equal(convertRomanToArabic('VI'), 6)
    });
    it('MMMCMXCIX', function () {
        assert.equal(convertRomanToArabic('MMMCMXCIX'), 3999)
    });
})

describe('isValidRoman', function () {
    it('should true', function () {
        assert.equal(isValidRoman('xxx'), true)
    });
    it('should false', function () {
        assert.equal(isValidRoman('xxxx'), false)
    });
})


describe('numberConverter', function () {
    it('1904 as number', function () {
        assert.equal(numberConverter(1904), 'MCMIV')
    });
    it('1904 as string', function () {
        assert.equal(numberConverter('1904'), 'MCMIV')
    });
    it('MCMXC', function () {
        assert.equal(numberConverter('MCMXC'), 1990)
    });
    it('UNKNOWN_SYMBOLS', function () {
        assert.throws(() => numberConverter('19a04'), Error, 'Unknown input symbols')
    });
    it('UNKNOWN_SYMBOLS', function () {
        assert.throws(() => numberConverter(NaN), Error, 'Unknown input symbols')
    });
    it('UNKNOWN_SYMBOLS', function () {
        assert.throws(() => numberConverter(',.'), Error, 'Unknown input symbols')
    });
    it('RANGE_ERROR', function () {
        assert.throws(() => numberConverter(0), Error, 'Input value must be [1; 3999]')
    });
    it('xxxx', function () {
        assert.equal(Number.isNaN(numberConverter('xxxx')), true)
    });
})
