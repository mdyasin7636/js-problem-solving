// Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

const num1 = 10;
const num2 = 5;
const operator = "+";
const result = calculate(num1, operator, num2);
console.log(result);
