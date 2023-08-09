const arr = ["January", 23, "March", "December", 20, 30, "November", 33];

// Create new arrays to store the string and number values.
const stringValues = [];
const numberValues = [];

// Iterate over the array and add the string and number values to the appropriate arrays.
for (const value of arr) {
  if (typeof value === "string") {
    stringValues.push(value);
  } else if (typeof value === "number") {
    numberValues.push(value);
  }
}

// Print the string values.
console.log(stringValues);

// Print the number values.
console.log(numberValues);
