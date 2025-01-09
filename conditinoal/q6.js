
let mathScore = parseFloat(prompt("Enter the Math score:"));
let scienceScore = parseFloat(prompt("Enter the Science score:"));

// Check eligibility
if (mathScore > 50 && scienceScore > 50) {
  console.log("Eligible for Grade A");
} else {
  console.log("Eligible for Grade B");
}
