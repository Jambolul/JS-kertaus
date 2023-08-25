'use strict';
const numbers = [];
let number = 0;
const evenNumbers = [];

do {
  number = +prompt('Give a number, or press enter to stop');
  numbers.push(number);
} while (number != '');

for (number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    console.log('nothing');
  }
}
evenNumbers.pop();
console.log(evenNumbers);

document.getElementById('kohde').textContent =
  `List of even numbers ` + evenNumbers;
