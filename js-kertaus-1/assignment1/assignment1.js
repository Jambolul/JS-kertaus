'use strict';

const temperature = +prompt('Give the temperature in celsius');

const celsius = temperature;
const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;

const answer = `The temperature ${celsius} celsius is ${fahrenheit} in fahrenheit, and ${kelvin} in kelvins.`;

//print

document.getElementById('kohde').textContent = answer;
