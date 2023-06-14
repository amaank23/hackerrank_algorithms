function rotateLeft(d, arr) {
  // Write your code here
  const newArr = [...arr];
  for (let i = 0; i < d; i++) {
    const elementToMove = newArr.shift();
    newArr.push(elementToMove);
  }
  return newArr;
}
