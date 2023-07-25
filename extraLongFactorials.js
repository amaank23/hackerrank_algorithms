function factorial(num) {
    // Write your code here
    if (num === 0) {
        return BigInt(1);
    } else {
        return BigInt(num) * BigInt(factorial(num - 1))
    }
}

console.log(factorial(30).toString());