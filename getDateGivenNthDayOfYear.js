function getDateGivenNthDayOfYear(year, day) {
  // Write your code here
  let daysCount = 0;
  let currentDay = 1;
  let currentMonth = 1;
  for (let i = 1; i < 13; i++) {
    let x;
    if (year % 4 === 0) {
      x = i === 2 ? 29 : i === 7 || i === 8 ? 31 : i % 2 === 0 ? 30 : 31;
    } else {
      x = i === 2 ? 28 : i === 7 || i === 8 ? 31 : i % 2 === 0 ? 30 : 31;
    }

    for (let j = 1; j < x + 1; j++) {
      daysCount += 1;
      currentMonth = i;
      currentDay = j;
      if (daysCount === day) {
        return `${currentDay}-${currentMonth}-${year}`;
      }
    }
  }
}
