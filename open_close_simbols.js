function isValid(s) {
    let stack = [];
    
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (mapping[char]) {
            let topElement = stack.pop() || '#';
            
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}

console.log(isValid('{[]}'))

console.log(isValid('{[}'))