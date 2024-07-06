'use strict';
// Guess My Number!
const message = document.querySelector('header h1');
// 1 < ? < 20
const rangeNumber = document.querySelector('.number');
// Score: 5
const scoreElement = document.querySelector('.score');
let score = 5;
// Generate Random Number between 1 and 20
// Math.random() generates number between 0 and 1
// Math.trunc() removes decimal part
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
// Event Listener for Check Button
checkButton.addEventListener('click', function () {
  // Value is String, Convert to Number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // If No Number, we get 0 which is Falsy value
  if (!guess) {
    message.textContent = 'No Number Entered!';
  } else if (guess === secretNumber) {
    // When Player Wins
    message.textContent = 'Correct Guess! 🎉';
    rangeNumber.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    rangeNumber.style.width = '30rem';
  } else if (guess > secretNumber * 2 && score > 1) {
    // When Guess is too high
    message.textContent = 'Too High!';
    score--;
    scoreElement.textContent = score;
  } else if (guess > secretNumber && score > 1) {
    // When Guess is high
    message.textContent = 'High!';
    score--;
    scoreElement.textContent = score;
  } else if (guess < secretNumber / 2 && score > 1) {
    // When Guess is too low
    message.textContent = 'Too Low!';
    score--;
    scoreElement.textContent = score;
  } else if (guess < secretNumber && score > 1) {
    // When Guess is low
    message.textContent = 'Low!';
    score--;
    scoreElement.textContent = score;
  } else {
    // When Player Loses
    message.textContent = 'You Lost the Game!';
    scoreElement.textContent = 0;
  }
});
