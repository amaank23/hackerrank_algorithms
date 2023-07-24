function multiplesOfNumber(n) {
    // Write your code here
    let sumOfOne = 0;
    let sumOfTwo = 0
    while (sumOfOne < n) {
        if (sumOfOne + 3 > n) {
            break
        }
        sumOfOne += 3
    }

    while (sumOfTwo < n) {
        if (sumOfTwo + 5 > n) {
            break
        }
        sumOfTwo += 5
    }
    return sumOfTwo
}

console.log(multiplesOfNumber(10));
