console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0])) // '0-5,8-9,11'
console.log(compress([1, 4, 3, 2])) // '1-4'
console.log(compress([1, 4])) // '1,4'
compress([])
console.log(compress([5]))


function compress(list) {
    if(list.length === 0){
        return 'undefined'
    }
    if(list.length === 1){
        return `${list[0]}`
    }

    let start
    let end
    let range = ''
    list.sort((a, b) => a - b).forEach((elem) => {
        if(Math.round(elem - end) > 1){
            range += getRange(start, end) + ','
        }
        if((!start && start !== 0) || Math.round(elem - end) > 1){
            start = elem
        }
        end = elem
    })
    range += getRange(start, end)
    return range
}

function getRange(start, end){
    return start === end ? `${start}` : `${start}-${end}`
}
