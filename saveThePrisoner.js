function saveThePrisoner(n, m, s) {
    let i = (s + m - 1) % n;
    if (i === 0) {
        i = n;
    }
    return i;
}
console.log(saveThePrisoner(46934, 543563655, 46743));
console.log(saveThePrisoner(4, 5, 46743));