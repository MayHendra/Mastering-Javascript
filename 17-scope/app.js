/** @format */

// Global Scope Variable

var a = 1;
let b = 2;
const c = 3;

console.log('Global Scope :', a, b, c);

// di dalam function berlaku local scope
function local() {
  var a = 4;
  let b = 5;
  const c = 6;

  console.log('Local Scope : ', a, b, c);
}

local();

if (true) {
  var a = 7;
  let b = 8;
  const c = 9;

  console.log(a, b, c);
}

console.log(a, b, c);
