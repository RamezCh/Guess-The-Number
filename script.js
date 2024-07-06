'use strict';

const message = document.querySelector('header h1');
const rangeNumber = document.querySelector('.number');
const score = document.querySelector('.score');
const guess = document.querySelector('.guess');

console.log(message.textContent);
console.log(rangeNumber.textContent);
console.log(score.textContent);
console.log(guess.value);

const checkButton = document.querySelector('.check');
checkButton.addEventListener('click', function () {
  console.log('Button clicked');
  console.log(guess.value);
});
