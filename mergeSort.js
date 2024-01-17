function mergeSort(arr, low, high) {
  if (low >= high) return;
  const mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, high, mid);
}

function merge(arr, low, high, mid) {
  const temp = [];
  let left = low;
  let right = mid + 1;
  let i = 0;
  while (left <= mid && right <= high) {
    if (arr[left] < arr[right]) {
      temp[i] = arr[left];
      left++;
    } else {
      temp[i] = arr[right];
      right++;
    }
    i++;
  }

  while (left <= mid) {
    temp[i] = arr[left];
    left++;
    i++;
  }

  while (right <= high) {
    temp[i] = arr[right];
    right++;
    i++;
  }
  i = 0;
  let j = low;
  while (i < temp.length && j <= high) {
    arr[j] = temp[i];
    i++;
    j++;
  }
}
const arr = [4, 1, 3, 5, 3, 2, 9, 10, 1, 2, 9];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
