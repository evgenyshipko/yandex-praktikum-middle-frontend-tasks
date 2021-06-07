
function rle(str) {
    if(str === ''){
        return str
    }
    if(!isMatches(str)){
        throw new Error('Validation Error!')
    }
    let result = ''
    let previous = ''
    let counter = 0
    str.split('').forEach((elem) => {
        if(previous !== elem && counter > 0){
            result += previous
            if(counter > 1){
                result += counter
            }
            counter = 0
        }
        previous = elem
        counter++
    })
    result += previous
    if(counter > 1){
        result += counter
    }
    return result
}

function isMatches(str){
    const matchingResult = new RegExp('[A-Z]+').exec(str)
    console.log('matchingResult',matchingResult)
    return matchingResult && matchingResult[0].length === str.length
}

console.log(rle('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'))
console.log(rle(''))
