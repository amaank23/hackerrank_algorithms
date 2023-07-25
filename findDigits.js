function findDigits(n) {
    // Write your code here
    const intToStr = n.toString()
    let count = 0;
    for (let i = 0; i < intToStr.length; i++) {
        if (n % Number(intToStr[i]) === 0) {
            count += 1
        }
    }
    return count
}

console.log(findDigits(124));