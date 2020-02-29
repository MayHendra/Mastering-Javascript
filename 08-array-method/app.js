/** @format */

// create array

const number = [54, 23, 69, 77, 89];
const fruit = ['anggur', 'jeruk', 'mangga'];
const mix = [30, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

// get length
val = number.length;

// check is array
val = Array.isArray(number);

// get single array
val = number[3];

// replace array value
fruit[1] = 'Manggis';
//console.log(fruit);

// find index of value
val = mix.indexOf(null);

// add array to end
number.push(300);

// add array to front
mix.unshift("C'mon");

// delete end of array value
mix.pop();

// delete front of array value
mix.shift();

// splice array
mix.splice(1, 3);

// reverse array value
fruit.reverse();

console.log(fruit);
console.log(mix);
console.log(number);
console.log(val);
