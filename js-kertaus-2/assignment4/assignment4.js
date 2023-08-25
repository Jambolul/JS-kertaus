'use strict';
const numbers = [1, 25, 30, 10, 7, 2, 9, 75];

function sortArray() {
  const sortedNumbers = [...numbers];
  sortedNumbers.sort((a, b) => a - b);
  return sortedNumbers;
}

sortArray();

console.log(numbers);
console.log(sortArray());
