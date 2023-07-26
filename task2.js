// Q: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function sumOfPositiveNumbers(numbersArray) {
  let sum = 0;

  for (let number of numbersArray) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}

const numbers = [6, -5, 7, -9, 4, -2];
const positiveSum = sumOfPositiveNumbers(numbers);
console.log(positiveSum);
