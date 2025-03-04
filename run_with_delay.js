async function runWithDelay(functions, delays) {
    for (let i = 0; i < functions.length; i++) {
      await new Promise(resolve => setTimeout(() => {
        resolve(functions[i]());
      }, delays[i]));
    }
  }
  
  const functions = [
    () => console.log("first"),
    () => console.log("second"),
    () => console.log("third")
  ];
  const delays = [2000, 1000, 3000];
  
  runInOrder(functions, delays);