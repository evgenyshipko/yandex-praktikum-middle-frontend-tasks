function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        const insertionIndex = findInsertionIndex(arr, i)
        console.log('i',i,'insertionIndex',insertionIndex,'arr',arr)
        shiftElements(arr, insertionIndex, i)
    }
    return arr;
}

function findInsertionIndex(arr, i) {
    for (let j = i - 1; j >= 0 ; j--) {
        if (arr[j] < arr[i]) {
            return j + 1;
        }
    }
    return 0;
}

function shiftElements(arr, insertionIndex, i) {
    const value = arr[i];
    for (let j = i - 1; j >= insertionIndex; j--) {
        arr[j + 1] = arr[j]
    }
    arr[insertionIndex] = value;
}


const arr = [8, 7, 1, 3, 5]
console.log(insertionSort(arr))
