function rotateLeft(n, arr) {
  for (let j = 0; j < n % arr.length; j++) {
    console.log(j + 1);
    const firstEl = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = firstEl;
  }
  console.log(arr);
}
rotateLeft(8, [1, 2, 3, 4, 5]);
