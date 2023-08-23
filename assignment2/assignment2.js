'use strict';

const x1 = +prompt('Give the first x coordinate');
const x2 = +prompt('Give the second x coordinate');

const y1 = +prompt('Give the first y coordinate');
const y2 = +prompt('Give the second y coordinate');

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

document.getElementById(
  'kohde'
).textContent = `The euclidean distance is ${distance}`;
