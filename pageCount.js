function pageCount(n, p) {
  // Write your code here
  const pageArr = Array(n)
    .fill(n)
    .map((page, i) => {
      return i + 1;
    });

  const newPageArr = [];
  let tempArr = [];
  for (let i = 1; i <= pageArr.length; i++) {
    if (i === 1) {
      newPageArr.push([i]);
      continue;
    }
    tempArr.push(i);
    if (tempArr.length === 2) {
      newPageArr.push(tempArr);
      tempArr = [];
    }
    if (i === pageArr.length && tempArr.length === 1) {
      newPageArr.push(tempArr);
    }
  }
  const indexOfP = newPageArr
    .map((page, i) => {
      if (page.includes(p)) {
        return "FOUND";
      }
      return page;
    })
    .indexOf("FOUND");
  const indexOfPReverse = newPageArr
    .reverse()
    .map((page, i) => {
      if (page.includes(p)) {
        return "FOUND";
      }
      return page;
    })
    .indexOf("FOUND");

  if (indexOfP < indexOfPReverse) {
    return indexOfP;
  } else if (indexOfPReverse < indexOfP) {
    return indexOfPReverse;
  }

  return indexOfP;
}
