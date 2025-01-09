// Program to display the day of the week

// Input a number from the user
let dayNumber = parseInt(prompt("Enter a number (1-7):"));


let day;
switch (dayNumber) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
  default:
    day = "Error: Please enter a valid number between 1 and 7.";
}

// Display the result
console.log(day);
