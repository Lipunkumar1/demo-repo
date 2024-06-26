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

// Fetch users data from json placeholder api

const fetchUsers = async (cb) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    cb(data);
  } catch (error) {
    console.log(error);
  }
};

fetchUsers((data) => {
  console.log(data);
});
