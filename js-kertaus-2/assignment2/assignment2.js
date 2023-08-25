const numbers = [];

for (let i = 0; i < 5; i++) {
  let numbah = +prompt('Give a number');
  numbers.push(numbah);
}

console.log(numbers);

let isnumba = +prompt('Give a number NOW');
if (numbers.includes(isnumba)) {
  console.log(`The number ${isnumba} is in the list`);
} else {
  console.log('The number is not in the list');
}

numbers.pop(numbers[numbers.length - 1]);
console.log('Removed last number, updated list below');
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log('sorted array in ascending numerical order');
console.log(numbers);
