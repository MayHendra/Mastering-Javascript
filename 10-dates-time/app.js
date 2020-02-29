/** @format */

const today = new Date();
let birtday = new Date('07-15-2007');
birtday = new Date('july-31-2003');

let val = today.getFullYear();
val = today.getMonth();
val = today.getDate();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();

console.log(val);
console.log(birtday);
