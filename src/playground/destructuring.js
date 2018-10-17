// const person = {
//   name: 'Haseeb',
//   age: 26,
//   location: {
//     city: 'London',
//     temp: 16
//   }
// };

// const { name, age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} celcius in ${city} today.`)
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);

const item = ['Coffee (cold)', '$2.00', '$2.51', '$2.75'];

const [coffee, , mediumPrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`);