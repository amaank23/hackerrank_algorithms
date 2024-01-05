function extractIndividualNumbers(n){
    let num = n;
    let reverseNum = 0
    while(num > 0){
        const number = num % 10
        num = parseInt(num / 10)
        reverseNum = (reverseNum * 10) + number
        console.log(reverseNum);
    }
    // console.log(reverseNum);
}

extractIndividualNumbers(1234)