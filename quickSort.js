function quickSort(arr, low, high){
   if(low < high){
    const partitionIndex = partition(arr, low, high)
  
    quickSort(arr, low, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, high)
   }
}

function partition(arr, low, high){
    const pivot = arr[low]
    let i = low
    let j = high
    while(i < j){
        while(arr[i] <= pivot && i < high){
            i++
        }
        while(arr[j] > pivot && j > low){
            j--
        }
        if(i < j){
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    const temp = arr[j]
    arr[j] = arr[low]
    arr[low] = temp
    return j
}
const arr = [4, 1, 3, 5, 3, 2, 9, 10, 1, 2, 9]
quickSort(arr, 0, arr.length - 1)
console.log(arr);