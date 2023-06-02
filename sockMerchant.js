function sockMerchant(n, ar) {
  // Write your code here
  const pairsObj = {};
  for (let i = 0; i < n; i++) {
    if (pairsObj.hasOwnProperty(ar[i])) {
      pairsObj[ar[i]].push(ar[i]);
      continue;
    }
    pairsObj[ar[i]] = [ar[i]];
  }

  let count = 0;
  for (const key in pairsObj) {
    if (pairsObj[key].length >= 2) {
      if (pairsObj[key].length % 2 === 0) {
        count += pairsObj[key].length / 2;
      } else {
        count += Math.floor(pairsObj[key].length / 2);
      }
    }
  }
  return count;
}
