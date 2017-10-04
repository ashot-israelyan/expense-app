//
// Object Destructuring
//

// const person = {
//     //name: 'Ashot',
//     age: 25,
//     location: {
//         city: 'Yerevan',
//         temp: 18
//     }
// };
//
// const { name: firstName = 'Ashot', age } = person;
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };
//
// const { name: publisherName = 'Ashot' } = book.publisher;
//
// console.log(publisherName);

//
// Array Destructuring
//

const address = ['Halabyan 53', 'Yerevan', 'Armenia', '0078'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A ${itemName} costs ${mediumPrice}`);