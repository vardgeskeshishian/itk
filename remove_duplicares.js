function getUniqueValues(arr) {
    return arr.reduce((acc, current) => {
      if (!acc.includes(current)) {
        acc.push(current);
      }
      return acc;
    }, []);
  }
  
  console.log(getUniqueValues([1, 2, 3, 3, 4, 5, 4, 6]));

  console.log(getUniqueValues([5, 5, 5, 5, 5]));

  console.log(getUniqueValues([1, 2, 3, 4, 5]));
  
  console.log(getUniqueValues([]));