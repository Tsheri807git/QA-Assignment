function sumOfEvenNumbers(max) {
    // Initialize the sum variable to 0.
    let sum = 0;
  
    // Iterate over all numbers from 1 to max.
    for (let i = 1; i <= max; i++) {
      // If the number is even, add it to the sum.
      if (i % 2 == 0) {
        sum += i;
      }
    }
  
    // Return the sum.
    return sum;
  }
  
  // Find the sum of all even numbers from 0 to 100.
  const sum = sumOfEvenNumbers(100);
  
  // Print the sum.
  console.log("The sum of all even numbers from 0 to 100 is: " + sum);
  