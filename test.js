// Importing the custom functions from custom-functions.js
const customFunctions = require('./custom-functions');

// Test cube function
console.log("Cube of 3:", customFunctions.cube(3)); // Outputs 27

// Test fullName function
console.log("Full Name:", customFunctions.fullName('John', 'Doe')); // Outputs 'John Doe'

// Test power function
console.log("2 raised to the power of 3:", customFunctions.power(2, 3)); // Outputs 8

// Test sumCubes function
console.log("Sum of cubes [1, 2, 3]:", customFunctions.sumCubes([1, 2, 3])); // Outputs 36
