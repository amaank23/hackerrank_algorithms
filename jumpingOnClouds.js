function jumpingOnClouds(c, k) {
    let energy = 100
    let i = 0;
    let end = false
    while (true) {
        if (i >= (c.length)) {
            i = (i - (c.length))
            if (i === 0) {
                break
            }
        }
        if (end) {
            break
        }


        // console.log(i);
        if (c[(i + k) % c.length] === 1) {
            energy = energy - 1 - 2
        } else {
            energy -= 1
        }

        i += k
    }
    return energy
}

console.log(jumpingOnClouds([0, 0, 1, 0], 2));

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));

console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3));