function permutationEquation(p) {
    // Write your code here
    const arr = []
    for (let i = 0; i < p.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if ((i + 1) === p[j]) {
                for (let k = 0; k < p.length; k++) {
                    if ((j + 1) === p[k]) {
                        arr.push(k + 1)
                        break
                    }
                }
                break
            }
        }
    }
    return arr
}
console.log(permutationEquation([5, 2, 1, 3, 4]));
console.log(permutationEquation([2, 3, 1]));