function matchingStrings(stringList, queries) {
  // Write your code here
  return queries.map((query) => {
    let count = 0;
    for (let i = 0; i < stringList.length; i++) {
      if (stringList[i] === query) {
        count += 1;
      }
    }
    return count;
  });
}
