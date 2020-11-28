// palindrome('racecar') === true
// palindrome('table') === false

const palindrome = (str) => {
    str = str.toLowerCase()
    let result = true
    for (let i = 0; i < str.length-1; i++){
        if(str[0+i] !== str[str.length-1-i]){
            result = false
        }
    }
    return result
};

console.log(palindrome('racecar'))
console.log(palindrome('Anna'))
console.log(palindrome('table'))
