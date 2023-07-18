function viralAdvertising(n) {
    // Write your code here
    let count = 0;
    let liked = 0;
    let shared = 5;
    for (let i = 0; i < n; i++) {
        liked = Math.floor(shared / 2)
        count = count + liked
        shared = liked * 3
    }
    return count
}
viralAdvertising(3)