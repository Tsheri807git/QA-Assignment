const prompt = require('prompt-sync')();
const getMonthName = (monthNumber) => {
    // Get the month names as an array.
    const monthNames = ["January", "February", "March", "April", "May", "June",
                       "July", "August", "September", "October", "November", "December"];
  
    // Check if the month number is valid.
    if (monthNumber < 1 || monthNumber > 12) {
      throw new Error("Invalid month number: " + monthNumber);
    }
  
    // Return the month name at the given index.
    return monthNames[monthNumber - 1];
  };
  
// Get the month name from the user input.
const monthNumber = prompt('Enter a month number: ');
// Print the month name.
const monthName = getMonthName(monthNumber);
console.log(monthName);
  