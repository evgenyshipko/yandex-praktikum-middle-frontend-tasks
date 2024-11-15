function quickSort(arr, start = 0, end = arr.length - 1) {
    if(end > start){
        const index = partition(arr, start, end)
        quickSort(arr, index + 1, end);
        quickSort(arr, start, index - 1);
    }
    return arr;
}

function partition(arr, start = 0, end = arr.length - 1) {
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] <= pivotValue) {
            swap(arr, i ,pivotIndex)
            pivotIndex++
        }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
