
let purchaseAmount = parseFloat(prompt("Enter the purchase amount:"));

// Initialize discount variable
let discount;
let finalAmount;

if (purchaseAmount > 5000) {
  discount = 0.20; // 20% discount
} else if (purchaseAmount >= 1000 && purchaseAmount <= 5000) {
  discount = 0.10; // 10% discount
} else {
  discount = 0; // No discount
}

// Calculate the final amount after discount
finalAmount = purchaseAmount - (purchaseAmount * discount);

// Display the result
console.log(`Original Amount: ${purchaseAmount}`);
console.log(`Discount: ${discount * 100}%`);
console.log(`Final Amount: ${finalAmount}`);
