function appendAndDelete(s, t, k) {
    // Write your code here
    const sArr = s.split("")
    const tArr = t.split("")

    for (let i = 0; i < k; i++) {
        if (sArr.join("") === t) {
            break
        }
        sArr.shift()
        const itemToRemove = tArr.shift()
        if (itemToRemove) {
            sArr.push(itemToRemove)
        }
    }
    return sArr.join("")
}

console.log(appendAndDelete("hackerhappy", "hackerrank", 9));