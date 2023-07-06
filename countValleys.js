function countingValleys(steps, path) {
  // Write your code here
  let count = 0;
  let noOfTimesDownHill = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      count += 1;
    } else if (path[i] === "D") {
      if (count === 0) {
        count -= 1;
        noOfTimesDownHill += 1;
      } else {
        count -= 1;
      }
    }
  }
  return noOfTimesDownHill;
}

console.log(countingValleys(8, "UDDDUDUU"));
