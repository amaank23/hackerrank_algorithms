function angryProfessor(k, a) {
    // Write your code here
    return a.filter(i => i <= 0).length >= k ? "NO" : "YES"
}

console.log(angryProfessor(10, [23, -35, -2, 58, -67, -56, -42, -73, -19, 37]));