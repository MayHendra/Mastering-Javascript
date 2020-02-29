/** @format */

const fruits = ['Orange', 'Banana', 'Kiwi', 'Grape'];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${fruits[i]} Fruit`);
// }

// fruits.forEach(function(fruit) {
//   console.log(`${fruit} Fruit`);
// });

// const users = [
//   { id: 1, name: 'Rudi' },
//   { id: 2, name: 'Swipper' },
//   { id: 3, name: 'Habi' }
// ];

// const ids = users.map(function(user) {
//   return user.id;
// });

// console.log(ids);
const user = {
  firstName: 'Yudi',
  lasName: 'ari',
  age: 23
};

for (x in user) {
  console.log(`${user[x]}`);
}
