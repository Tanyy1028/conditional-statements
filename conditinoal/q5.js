
let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));

if (number1 < number2) {
  console.log(`Minimum: ${number1}`);
} else if (number2 < number1) {
  console.log(`Minimum: ${number2}`);
} else {
  console.log("Both numbers are equal.");
}
