'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log(fruits);
let length = fruits.length;
console.log(length);
console.log(fruits[2]);
console.log(fruits[length - 1]);

const vegetables = [];

for (let i = 0; i < 3; i++) {
  let vegetable = prompt('give a vegetable');
  vegetables.push(vegetable);
}

console.log(vegetables);
console.log(vegetables.length);
