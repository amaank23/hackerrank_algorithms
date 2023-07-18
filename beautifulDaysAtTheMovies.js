function beautifulDays(start, end, k) {
    // Write your code here
    const arr = []
    for (let i = start; i <= end; i++) {
        if (Math.abs(i - (Number(i.toString().split("").reverse().join("")))) % k === 0) {
            arr.push(Math.abs(i - (Number(i.toString().split("").reverse().join("")))))
        }
    }
    return arr.length

}
beautifulDays(20, 23, 6)