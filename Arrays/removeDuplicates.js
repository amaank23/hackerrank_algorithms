function removeDuplicates(arr) {
  let tracked = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === tracked) {
      arr.splice(i, 1);
      i = i - 1;
    } else {
      tracked = arr[i];
    }
  }
  console.log(arr);
}
removeDuplicates([1, 1, 2, 2, 2, 3, 3, 4]);
