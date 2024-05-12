// Define a function that takes in two numbers and returns their sum
function add(a, b) {
  return a + b;
}

// Define a function that takes in a string and returns the length of the string
function getLength(str) {
  return str.length;
}

// Define a function that takes in an array and returns a new array with all the even numbers removed
function removeOdds(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Define a function that takes in a number and returns a string with that number of "Hello"s concatenated together
function sayHello(num) {
  return "Hello".repeat(num);
}

// Call the functions and log the results to the console
console.log(add(2, 3)); // Output: 5
console.log(getLength("Hello, world!")); // Output: 13
console.log(removeOdds([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
console.log(sayHello(3)); // Output: "HelloHelloHello"
