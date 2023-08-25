'use strict';

const numbers = [5, 2, 8, 1, 9];

function sortArray(numbers, order) {
  if (order === 'asc') {
    numbers.sort((a, b) => a - b);
    return numbers;
  } else if (order === 'desc') {
    numbers.sort((a, b) => b - a);
    return numbers;
  } else {
    console.log('invalid value');
  }
}
console.log('ascending list');
console.log(sortArray(numbers, 'asc'));

console.log('descending list');
console.log(sortArray(numbers, 'desc'));
