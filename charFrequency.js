function getCharactersFrequency(char){
    const str = "abcdabcdefghefghtljalsdfjiuoauwlrjlqkwjr"
    const arr = Array(26).fill(0)
    const charCodeOfA = 'a'.charCodeAt(0)
    const charCodeOfChar = char.charCodeAt(0)
    const val = charCodeOfChar - charCodeOfA;
    for(let i = 0; i < str.length; i ++){
        if(str[i] === char){
            arr[val]++
        }
    }
    return arr[val]
}