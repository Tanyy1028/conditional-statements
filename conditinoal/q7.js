
let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));

// Input the operation from the user
let operator = prompt("Enter the operation ('+', '-', '*', '/'):");

// Perform the operation based on the user's choice
let result;

if (operator === "+") {
  result = number1 + number2;
} else if (operator === "-") {
  result = number1 - number2;
} else if (operator === "*") {
  result = number1 * number2;
} else if (operator === "/") {
  if (number2 !== 0) {
    result = number1 / number2;
  } else {
    result = "Error: Division by zero is not allowed.";
  }
} else {
  result = "Error: Invalid operator.";
}

// Display the result
console.log(`Result: ${result}`);
