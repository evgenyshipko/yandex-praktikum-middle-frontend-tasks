function bubbleSort(arr) {
    let count = 0

    let isSorted = false
    while (!isSorted) {
        let swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]){
                swap(arr, i, i + 1)
                swapped = true
            }
        }
        console.log(count++, arr)
        isSorted = !swapped
    }
    return arr;
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

const arr = [3, 2, 5, 6, 1]
console.log(bubbleSort(arr))
