function countSymbols(word){

    let countArr = {};
    let result = '';

    for(let char of word){
        countArr[char] = (word[char] || 0) + 1
    }

    for(let char in countArr){
        result += char + countArr
    }
    
    return result;
}

console.log(countSymbols('AAAABBCCCDDD'));
