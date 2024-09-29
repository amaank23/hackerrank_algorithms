// brute force
var moveZeroesBruteForce = function (nums) {
  const temp = [];
  nums.forEach((num) => {
    if (num !== 0) {
      temp.push(num);
    }
  });
  for (let i = 0; i < nums.length; i++) {
    if (temp[i]) {
      nums[i] = temp[i];
    } else {
      nums[i] = 0;
    }
  }
};
// optimal approach
var moveZeroesOptimal = function (nums) {
  let j = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      j = i;
      break;
    }
  }
  for (let i = j + 1; i < nums.length; i++) {
    if (j < 0) break;
    if (nums[i] !== 0) {
      nums[i] = nums[i] ^ nums[j];
      nums[j] = nums[i] ^ nums[j];
      nums[i] = nums[i] ^ nums[j];
      j++;
    }
  }
};
