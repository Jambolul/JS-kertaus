'use sitrct';

const temperature = prompt('Give the temperature in celsius');

const celsius = temperature;
const celsiusInt = parseInt(celsius);
const fahrenheit = (celsiusInt * 9) / 5 + 32;
const kelvin = celsiusInt + 273.15;

const answer = `The temperature ${celsiusInt} celsius is ${fahrenheit} in fahrenheit, and ${kelvin} in kelvins.`;

//print

document.getElementById('kohde').textContent = answer;
