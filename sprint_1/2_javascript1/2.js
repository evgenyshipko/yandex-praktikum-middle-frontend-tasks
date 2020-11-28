
const getOne = canGetCount(2);

console.log(getOne())  // yes
console.log(getOne())  // yes
console.log(getOne())  // no

function canGetCount(num){
    let counter = 0
    return () => {
        counter++
        return counter <= num ? 'yes' : 'no'
    }
}
