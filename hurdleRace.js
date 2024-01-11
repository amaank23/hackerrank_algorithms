function squares(a, b) {
  // Write your code here
  let count = 0;
  let lastNumber = Math.floor(Math.sqrt(a));
  for (let i = a; i <= b; i++) {
    for (let j = lastNumber; j <= Math.floor(Math.sqrt(b)); j++) {
      if (j * j === i) {
        count += 1;
        lastNumber = j;
        break;
      }
    }
  }

  return count;
}
function squares1(a, b) {
  let count = 0;
  let start = Math.ceil(Math.sqrt(a));
  let end = Math.floor(Math.sqrt(b));

  count = end - start + 1;

  return Math.max(count, 0);
}

function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here
  const dueDay = d2;
  const dueMonth = m2;
  const dueYear = y2;

  const returnedDay = d1;
  const returnedMonth = m1;
  const returnedYear = y1;

  let fine = 0;

  if (
    returnedDay <= dueDay &&
    returnedMonth === dueMonth &&
    returnedYear === dueYear
  ) {
    fine = 0;
  } else if (
    returnedDay > dueDay &&
    returnedMonth === dueMonth &&
    returnedYear === dueYear
  ) {
    const noOfDaysLate = returnedDay - dueDay;
    fine = 15 * noOfDaysLate;
  } else if (returnedMonth > dueMonth && returnedYear === dueYear) {
    const noOfMonthsLate = returnedMonth - dueMonth;
    fine = 500 * noOfMonthsLate;
  } else if (returnedYear > dueYear) {
    fine = 10000;
  }

  return fine;
}

// function nonDivisibleSubset(k, s) {
//     // Write your code here
//     const numbers = JSON.parse(JSON.stringify(s));
//     const subSetsOfNumbers = []
//     const alreadyComputedSubsets = []

//     function checkIfAlreadyComputed(set, array){
//         for(let i = 0; i < array.length; i++){
//             if((array[i].includes(set[0]) && array[i].includes(set[1])) || (array[i].includes(set[1]) && array[i].includes(set[0]))){
//                 return true
//             }
//         }
//     }
//     for(let i = 0; i < numbers.length; i++){
//         for(let j =0; j < numbers.length; j++){
//             if(j === i){
//                 continue;
//             }
//             const set = [numbers[i], numbers[j]]
//             if(checkIfAlreadyComputed(set, alreadyComputedSubsets)){
//                 continue;
//             }
//             const sum = set[0] + set[1]
//             if(sum % k !== 0){
//                 subSetsOfNumbers.push(set)
//             }
//             alreadyComputedSubsets.push(set)
//         }
//     }
//     const resultantArr = []
//     const flatArr = [...subSetsOfNumbers.flat()]

//     for(let i = 0; i < flatArr.length; i++){
//         if(resultantArr.includes(flatArr[i])){
//             continue
//         }
//         resultantArr.push(flatArr[i])
//     }
//     return resultantArr

// }

function nonDivisibleSubset(s, k) {
  // Initialize an array to keep track of the maximum subset size for each remainder from 0 to k-1
  const remainders = Array(s).fill(0);

  // Count the remainders in the input array
  for (let i = 0; i < k.length; i++) {
    remainders[k[i] % s]++;
  }
  // Initialize the result to include at most one number that is evenly divisible by s (if it exists)
  let result = Math.min(remainders[0], 1);

  // Iterate through the remainders and add the larger of the corresponding remainders to the result
  for (let i = 1; i <= s / 2; i++) {
    if (i !== s - i) {
      result += Math.max(remainders[i], remainders[s - i]);
    }
  }

  // If s is even, add one more to the result (since the remainders array will have an extra 0)
  if (s % 2 === 0) {
    result++;
  }

  return result;
}

// console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));
// console.log(nonDivisibleSubset(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]));
// console.log(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]));

function repeatedString(s, n) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      count++;
    }
  }
  const fullRepetitions = Math.floor(n / s.length);
  const remainingCharacters = n % s.length;
  count = count * fullRepetitions;
  for (let i = 0; i < remainingCharacters; i++) {
    if (s[i] === "a") {
      count++;
    }
  }
  return count;
}

// console.log(repeatedString("abcac", 12));
// console.log(repeatedString("a", 1000000000000));
// console.log(repeatedString("gfcaaaecbg", 547602));
// console.log(repeatedString("aba", 10));
// console.log(repeatedString("aab", 882787));

function cutTheSticks(arr) {
    let copiedArr = [...arr]
    const lengthsOfCutsSticks = []
  while (copiedArr.length !== 0) {
    const minimumValue = Math.min(...copiedArr)
    for(let i = 0; i < copiedArr.length; i++){
        copiedArr[i] = copiedArr[i] - minimumValue
    }
    lengthsOfCutsSticks.push(copiedArr.length)
    copiedArr = copiedArr.filter(item => item > 0)
  }
  return lengthsOfCutsSticks
}

// console.log(cutTheSticks([1, 13, 3, 8, 14, 9, 4, 4]));


function jumpingOnClouds(c) {
    // Write your code here
    const countArr = []
    let i = 0

    if(c[0] === 0){
        countArr.push(0)
    }
    while(i <= c.length - 2){
        if(c[i] === 1){
            i++
            continue
        }
        if(c[i + 2] === 0){
            countArr.push(i + 2)
            i = i + 2
        } else if(c[i + 1] === 0){
            countArr.push(i + 1)
            i = i + 1
        }
    }
    return countArr.length - 1

}
// console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));
// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
// console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));

function equalizeArray(arr) {
    // Write your code here
    const uniqueValuesObj = {}
    for(let i = 0; i < arr.length; i++){
        if(uniqueValuesObj.hasOwnProperty(arr[i])){
            continue
        }
        uniqueValuesObj[arr[i]] = 0
    }
    
    for(let i = 0; i < arr.length; i++){
        uniqueValuesObj[arr[i]] += 1
    }
    let count = 0
    let maximum = `0-0`
    for(let key in uniqueValuesObj){
        if(uniqueValuesObj[key] > maximum.split("-")[1]){
            maximum = `${key}-${uniqueValuesObj[key]}`
        }
    }
    for(let key in uniqueValuesObj){
        if(key != maximum.split("-")[0]){
            count+=uniqueValuesObj[key]
        }
    }
    return count
}

// console.log(equalizeArray([1, 2, 2, 3]));
// console.log(equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]));


function queensAttack(n, k, r_q, c_q, obs) {
    // Write your code here
    const noOfRowsAndColumns = n;
    const noOfObtacalesOnBoard = k || 0
    const rowNoOfQueenPosition = r_q
    const columnNoOfQueenPosition = c_q
    const obstacles = []
    if(obs){
      obstacles.push(...obs)
    }

    const board = []

    for(let i = 0; i < noOfRowsAndColumns; i++){
      const temp = []
      for(let j = 0; j < noOfRowsAndColumns; j++){
        if(i+1 === rowNoOfQueenPosition && j+1 === columnNoOfQueenPosition){
          temp.push('q')
        } else {
          temp.push('f')
        }
        
      }
      board.push(temp)
    }

    if(noOfObtacalesOnBoard !== 0){
      for(let i = 0; i < obstacles.length; i++){
        board[obstacles[i][0] - 1][obstacles[i][1] - 1] = "o"
      }
    }
    
    let count = 0

    // CHECKING HORIZONTAL COUNT
    for(let i = columnNoOfQueenPosition - 1; i < board.length; i++){
      if(board[rowNoOfQueenPosition - 1][i] === 'q'){
        continue
      } else if(board[rowNoOfQueenPosition - 1][i] === 'o'){
        break
      }
      count+=1
    }
    for(let i = columnNoOfQueenPosition - 1; i >= 0; i--){
      if(board[rowNoOfQueenPosition - 1][i] === 'q'){
        continue
      } else if(board[rowNoOfQueenPosition - 1][i] === 'o'){
        break
      }
      count+=1
    }

    // CHECKING VERTICAL COUNT
    for(let i = rowNoOfQueenPosition - 1; i < board.length; i++){
      if(board[i][columnNoOfQueenPosition - 1] === 'q'){
        continue
      } else if(board[i][columnNoOfQueenPosition - 1] === 'o'){
        break
      }
      count++
    }

    for(let i = rowNoOfQueenPosition - 1; i >= 0; i--){
      if(board[i][columnNoOfQueenPosition - 1] === 'q'){
        continue
      } else if(board[i][columnNoOfQueenPosition - 1] === 'o'){
        break
      }
      count++
    }

    // CHECKING DIAGONALLY LEFT
    for(let i = 0; i < board.length; i++){
      if((rowNoOfQueenPosition - i - 1) < 0 || (columnNoOfQueenPosition) - i - 1 < 0){
        break
      }
      if((rowNoOfQueenPosition - i - 1) > board.length - 1 || (columnNoOfQueenPosition) - i - 1 > board.length - 1){
        break
      }
      if(board[rowNoOfQueenPosition - i - 1][columnNoOfQueenPosition - i - 1] === 'q'){
        continue
      } else if(board[rowNoOfQueenPosition - i - 1][columnNoOfQueenPosition - i - 1] === 'o'){
        break
      }
      count++
    }

    for(let i = 0; i < board.length; i++){
      if((rowNoOfQueenPosition + i) < 0 || (columnNoOfQueenPosition + i) < 0){
        break
      }
      if((rowNoOfQueenPosition + i) > board.length - 1 || (columnNoOfQueenPosition + i) > board.length - 1){
        break
      }
      if(board[rowNoOfQueenPosition + i][columnNoOfQueenPosition + i] === 'q'){
        continue
      } else if(board[rowNoOfQueenPosition + i][columnNoOfQueenPosition + i] === 'o'){
        break
      }
      if(board[rowNoOfQueenPosition + i][columnNoOfQueenPosition + i]){

        count++
      }
    }

     // CHECKING DIAGONALLY RIGHT
      for(let i = 0; i < board.length; i++){
        if((rowNoOfQueenPosition - i - 1) < 0 || (columnNoOfQueenPosition + i - 1) < 0){
          break
        }
        if((rowNoOfQueenPosition - i - 1) > board.length - 1 || (columnNoOfQueenPosition + i - 1) > board.length - 1){
          break
        }
        if(board[rowNoOfQueenPosition - i - 1][columnNoOfQueenPosition + i - 1] === 'q'){
          continue
        } else if(board[rowNoOfQueenPosition - i - 1][columnNoOfQueenPosition + i - 1] === 'o'){
          break
        }
        if(board[rowNoOfQueenPosition - i - 1][columnNoOfQueenPosition + i - 1]){
  
          count++
        }
      }
      for(let i = 0; i < board.length; i++){
        if((rowNoOfQueenPosition + i - 1) < 0 || (columnNoOfQueenPosition - i - 1) < 0){
          break
        }
        if((rowNoOfQueenPosition + i - 1) > board.length - 1 || (columnNoOfQueenPosition - i - 1) > board.length - 1){
          break
        }
        if(board[rowNoOfQueenPosition + i - 1][columnNoOfQueenPosition - i - 1] === 'q'){
          continue
        } else if(board[rowNoOfQueenPosition + i - 1][columnNoOfQueenPosition - i - 1] === 'o'){
          break
        }
        if(board[rowNoOfQueenPosition + i - 1][columnNoOfQueenPosition - i - 1]){
  
          count++
        }
      }
    
    return count
  }

  

  // CHECKING DIAGONALLY RIGHT


queensAttack(8, 1, 4, 4, [[3, 5]])
queensAttack(4, 0, 4, 4)
queensAttack(8, 0, 1 , 1)