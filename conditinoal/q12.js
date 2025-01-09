// Program to check voting eligibility

// Input age from the user
let age = parseInt(prompt("Enter your age:"));

// Input whether the person is a registered voter (Yes or No)
let isRegistered = prompt("Are you a registered voter? (Yes/No)").toLowerCase();

// Check if the person is eligible to vote
if (age >= 18 && isRegistered === "yes") {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
