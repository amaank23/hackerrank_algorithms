
function circularArrayRotation(a, k, queries) {
    // Write your code here
    const newArr = [...a]
    for (let i = 0; i < k; i++) {
        const lastItem = newArr.pop()
        newArr.unshift(lastItem)
    }
    return queries.map(i => newArr[i])
}

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));