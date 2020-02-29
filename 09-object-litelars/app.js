/** @format */

const person = {
  firstName: 'Steve',
  lasName: 'Job',
  age: 40,
  hobbies: ['music', 'sports'],
  address: {
    city: 'Jakarta',
    zipCode: '14280'
  },
  getBirthYear: function() {
    return 2019 - this.age;
  }
};

let val;

val = person;
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[0];
val = person.address.zipCode;
val = person.getBirthYear();

console.log(new Date('d'));
