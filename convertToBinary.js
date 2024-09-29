function convertToBinary(num) {
  let binary = "";
  while (num !== 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary;
}

function convertToDecimal(binary) {
  const strLen = binary.length;
  let p2 = 1;
  num = 0;
  for (let i = strLen - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      num += p2;
    }
    p2 *= 2;
  }
  return num;
}

function swapWithout3rdVariable() {
  let a = 2;
  let b = 3;

  a = a ^ b;
  b = a ^ b;
  c = a ^ b;
}

function checkIfIthElementIsSetUsingLeftShift(num, ith) {
  return (num & (1 << ith)) !== 0;
}

console.log(convertToDecimal("1011"));
