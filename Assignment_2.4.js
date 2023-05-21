

function removeOccurrences(arr, num) {
    return arr.filter(element => element !== num);
  }
  
  
  const numbers = [1, 2, 3, 1, 4, 6, 4,4];
  const numToRemove1 = 4;
  const filteredArray1 = removeOccurrences(numbers, numToRemove1);
  const numToRemove = 1;
  const filteredArray = removeOccurrences(filteredArray1, numToRemove);
  console.log(filteredArray);
  