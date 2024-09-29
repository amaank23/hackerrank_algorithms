function matrixMul(matrix1, matrix2) {
  let resultantMatrix = [];

  // Number of rows in matrix1
  const rows1 = matrix1.length;

  // Number of columns in matrix1 (also the number of rows in matrix2)
  const cols1 = matrix1[0].length;

  // Number of columns in matrix2
  const cols2 = matrix2[0].length;

  // Check if multiplication is possible
  if (cols1 !== matrix2.length) {
    console.error(
      "Matrix multiplication is not possible with the given dimensions."
    );
    return;
  }

  // Initialize the resultant matrix with zeros
  for (let i = 0; i < rows1; i++) {
    resultantMatrix[i] = [];
    for (let j = 0; j < cols2; j++) {
      resultantMatrix[i][j] = 0;
    }
  }

  // Perform matrix multiplication
  for (let i = 0; i < rows1; i++) {
    for (let j = 0; j < cols2; j++) {
      for (let k = 0; k < cols1; k++) {
        resultantMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  // Print the resultant matrix
  console.log("The resulting matrix after multiplication is:");
  for (let i = 0; i < rows1; i++) {
    console.log(resultantMatrix[i]);
  }
}

// Example matrices
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

matrixMul(matrix1, matrix2);
