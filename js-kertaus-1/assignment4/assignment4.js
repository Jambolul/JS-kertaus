'use strict';

`Scores between 0 and 39 receive a grade of 0.
Scores between 40 and 51 receive a grade of 1.
Scores between 52 and 63 receive a grade of 2.
Scores between 64 and 75 receive a grade of 3.
Scores between 76 and 87 receive a grade of 4.
Scores between 88 and 100 receive a grade of 5.`;

const score = prompt('Give your course assessment score');
let answer = 0;

if (score < 40) {
  answer = 0;
} else if (score > 39 && score < 52) {
  answer = 1;
} else if (score > 51 && score < 64) {
  answer = 2;
} else if (score > 63 && score < 76) {
  answer = 3;
} else if (score > 75 && score < 88) {
  answer = 4;
} else {
  answer = 5;
}

document.getElementById('kohde').textContent = answer;
