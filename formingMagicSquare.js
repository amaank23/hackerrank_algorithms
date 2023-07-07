function formingMagicSquare(s) {
  // Write your code here
  const matrix = [...s];
  const magicSum = 15;
  const indexesAffected = [];
  const cost = [];

  const rowSumOne = matrix[0][0] + matrix[0][1] + matrix[0][2];
  const colSumOne = matrix[0][0] + matrix[1][0] + matrix[2][0];
  const diagonalSumOne = matrix[0][0] + matrix[1][1] + matrix[2][2];

  const rowSumOneDiff = magicSum - (matrix[0][1] + matrix[0][2]);
  const colSumOneDiff = magicSum - (matrix[1][0] + matrix[2][0]);
  const diagonalSumOneDiff = magicSum - (matrix[1][1] + matrix[2][2]);

  if (rowSumOne !== magicSum) {
    console.log(rowSumOne);
  }

  if (colSumOne !== magicSum) {
  }

  if (diagonalSumOne !== magicSum) {
  }

  // if (rowSumOne !== 0 && colSumOne !== 0 && diagonalSumOne !== 0) {
  //   cost.push(matrix[0][0] - rowSumOne);
  //   matrix[0][0] = rowSumOne;
  //   indexesAffected.push([0, 0]);
  // }

  // if (matrix[1][1] !== 5) {
  //   cost.push(matrix[1][1] - 5);
  //   matrix[1][1] = 5;
  //   indexesAffected.push([1, 1]);
  // }
  // const colSumTwo = magicSum - (matrix[0][1] + matrix[1][1]);
  // if (matrix[2][1] !== colSumTwo) {
  //   cost.push(matrix[2][1] - colSumTwo);
  //   matrix[2][1] = colSumTwo;
  //   indexesAffected.push([2, 1]);
  // }

  // const colSumThree = magicSum - (matrix[0][2] + matrix[2][2]);

  // if (matrix[1][2] !== colSumThree) {
  //   cost.push(matrix[1][2] - colSumThree);
  //   matrix[1][2] = colSumThree;
  //   indexesAffected.push([1, 2]);
  // }
  // console.table(matrix);
  // return Math.abs(cost.reduce((prev, curr) => prev + curr));
}

// formingMagicSquare([
//   [5, 3, 4],
//   [1, 5, 8],
//   [6, 4, 2],
// ]);
formingMagicSquare([
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
]);
