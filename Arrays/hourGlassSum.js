function hourglassSum(arr) {
  const sumArr = [];
  // Write your code here
  for (let i = 0; i < arr.length; i++) {
    if (i === 4) {
      break;
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0 || j === arr[i].length - 1) {
        continue;
      }
      sumArr.push(
        arr[i][j - 1] +
          arr[i][j] +
          arr[i][j + 1] +
          arr[i + 1][j] +
          arr[i + 2][j - 1] +
          arr[i + 2][j] +
          arr[i + 2][j + 1]
      );
    }
  }
  return Math.max(...sumArr);
}
