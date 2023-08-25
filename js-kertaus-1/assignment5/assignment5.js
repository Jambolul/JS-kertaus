const number = +prompt('Give a positive integer');

numbers = [];
let sum = 0;

for (let i = 1; i < number + 1; i++) {
  console.log(i);
  sum += i;
}

document.getElementById('kohde').textContent = sum;
