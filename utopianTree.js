function utopianTree(n) {
    // Write your code here
    let count = 0
    for (let i = 1; i <= n + 1; i++) {
        if (i % 2 === 0) {
            count += count
        } else if (i % 2 !== 0) {
            count += 1
        }
    }
    return count
}

utopianTree(4)