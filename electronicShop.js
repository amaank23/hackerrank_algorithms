const keyboards = [40, 50, 60];
const drives = [5, 8, 12];
const b = 60;
function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let sumArr = [];
  const allKeyboardItemsInBudget = keyboards.filter((k) => k < b);
  const allDrivesItemsInBudget = drives.filter((d) => d < b);
  for (let i = 0; i < allKeyboardItemsInBudget.length; i++) {
    for (let j = 0; j < allDrivesItemsInBudget.length; j++) {
      sumArr.push(allKeyboardItemsInBudget[i] + allDrivesItemsInBudget[j]);
    }
  }
  const allSumsUnderBudget = sumArr.filter((sum) => sum <= b);
  return allSumsUnderBudget.sort((a, b) => b - a)[0] || -1;
}

console.log(getMoneySpent(keyboards, drives, b));
