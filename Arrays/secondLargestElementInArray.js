function secondLargestElementInArray(arr) {
  let largest = arr[0];
  let secondLargest = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  console.log(secondLargest);
}

secondLargestElementInArray([1, 2, 8, 7, 7, 5, 6, 11, 10]);
