function bonAppetit(bill, k, b) {
  // Write your code here
  const val =
    bill.filter((b, i) => i !== k).reduce((total, curr) => total + curr) / 2;
  if (val === b) {
    return "Bon Appetit";
  } else {
    return b - val;
  }
}
