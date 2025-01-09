// Program to classify age group

// Input the age from the user
let age = parseInt(prompt("Enter your age:"));

// Classify based on the age
let classification;

if (age < 18) {
  classification = "Minor";
} else if (age >= 18 && age <= 60) {
  classification = "Adult";
} else {
  classification = "Senior Citizen";
}

// Display the result
console.log(`You are classified as: ${classification}`);
