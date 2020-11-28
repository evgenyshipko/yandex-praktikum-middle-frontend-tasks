const list = [1, 3, 4, 5, 7, 10];

function binarySearch(list, element) {

    let start = 0
    let end = list.length

    while (start < end){
        let middle = Math.floor((end+start)/2)
        console.log('start', start, 'end', end, 'middle', middle)
        if (list[middle] === element){
            return middle
        }
        if(element < list[middle]){
            end = middle
        }else{
            start = middle + 1
        }
    }
    return -1
}

console.log(binarySearch(list, 7))
