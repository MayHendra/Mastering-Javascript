/** @format */

// function declaration
function greet(name) {
  return `Hello ${name}`;
}

// alert(greet('John'));

// function expression
const square = function(x) {
  return x * x;
};

// alert(square(9));

// IFFEs

(function(name) {
  console.log(`Hello, ${name}`);
})('Jordan');
