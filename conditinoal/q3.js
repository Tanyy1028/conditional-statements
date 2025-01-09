
let character = prompt("Enter a character:");


if (character === character.toUpperCase() && character !== character.toLowerCase()) {
  console.log("Uppercase Letter");
} else {
  console.log("The character is not an uppercase letter");
}
