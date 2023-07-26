// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array should have at least two elements";
  }
  const sortedArray = arr.slice().sort((a, b) => a - b);
  return sortedArray[1];
}

const numbers = [5, 8, 2, 3, 10, 1];
const secondSmallest = findSecondSmallest(numbers);
console.log(secondSmallest);