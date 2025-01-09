// Program to classify temperature status

// Input the temperature from the user
let temperature = parseFloat(prompt("Enter the temperature in °C:"));

// Classify based on the temperature
let status;

if (temperature < 0) {
  status = "Freezing";
} else if (temperature >= 0 && temperature <= 20) {
  status = "Cold";
} else if (temperature >= 21 && temperature <= 35) {
  status = "Moderate";
} else {
  status = "Hot";
}

// Display the result
console.log(`The temperature status is: ${status}`);
