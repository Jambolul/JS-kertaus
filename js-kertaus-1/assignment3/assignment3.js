'use strict';

const side1 = +prompt('Give the lenght of the first side of a triangle');

const side2 = +prompt('Give the lenght of the second side of a triangle');

const side3 = +prompt('Give the lenght of the third side of a triangle');

let answer = '';

if (side1 == side2 && side1 == side3) {
  answer = 'equilateral';
} else if (side1 == side2 || side2 == side3 || side1 == side3) {
  answer = 'isosceles';
} else if (side1 != side2 && side2 != side3 && side1 != side3) {
  answer = 'scalene';
}

console.log(answer);
document.getElementById('kohde').textContent = answer;
