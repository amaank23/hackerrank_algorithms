function arrayManipulation(n, queries) {
  // Write your code here
  const arr = Array(n).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const [start, end, value] = queries[i];
    for (let j = start; j <= end; j++) {
      arr[j - 1] += value;
    }
  }
  return Math.max(...arr);
}

function arrayManipulation(n, queries) {
  const arr = Array(n).fill(0);

  for (let i = 0; i < queries.length; i++) {
    const [start, end, value] = queries[i];
    arr[start - 1] += value;
    if (end < n) arr[end] -= value;
  }

  let maxVal = 0;
  let currSum = 0;
  for (let i = 0; i < n; i++) {
    currSum += arr[i];
    maxVal = Math.max(maxVal, currSum);
  }

  return arr;
}
