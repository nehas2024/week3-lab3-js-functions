// Function to calculate cube
function cube(x) {
    return x * x * x;
  }
  
  // Function to combine first and last name
  function fullName(first, last) {
    return first + " " + last;
  }
  
  // Recursive function to calculate power
  function power(base, exp) {
    if (exp === 0) {
      return 1;
    }
    return base * power(base, exp - 1);
  }
  
  // Function to sum the cubes of an array of numbers
  function sumCubes(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += cube(numbers[i]);
    }
    return total;
  }
  
  // Export the functions
  module.exports = {
    cube,
    fullName,
    power,
    sumCubes,
  };
  