function sumArray(sumArray){
    if(Array.isArray(sumArray)){
        return console.error('The argument type is not correct!')
    }
    
    return sumArray.reduce((partialSum, a) => partialSum + a, 0)
}

console.log(sumArray([1, 2, 3, 4, 5]));

console.log(sumArray([-1, 2, -3, 4, -5]));

console.log(sumArray([0, 0, 0, 0, 0]));

console.log(sumArray([]));