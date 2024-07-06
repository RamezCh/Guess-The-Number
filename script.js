'use strict';

// Select DOM elements
const message = document.querySelector('header h1');
const rangeNumber = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const guessElement = document.querySelector('.guess');
const highScoreElement = document.querySelector('.highscore');

let score = 5;
let highScore = 0;
let secretNumber = generateRandomNumber();

// Function to generate a random number between 1 and 20
function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Function to display message
function displayMessage(msg) {
  message.textContent = msg;
}

// Function to update score
function updateScore(newScore) {
  score = newScore;
  scoreElement.textContent = score;
}

// Function to reset the game
function resetGame() {
  // Reset Values
  score = 5;
  secretNumber = generateRandomNumber();
  displayMessage('Guess My Number!');
  rangeNumber.textContent = '1 < ? < 20';
  guessElement.value = '';
  // Reset Styles
  document.querySelector('body').style.backgroundColor = '#222';
  highScoreElement.style.color = '#60b347';
  highScoreElement.textContent = highScore;
  guessElement.style.display = 'inline-block';
  checkButton.style.display = 'inline-block';
  againButton.style.visibility = 'hidden';
}

// Function to handle guess
function handleGuess(guess) {
  if (!guess) {
    displayMessage('No Number Entered!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Guess! 🎉');
    rangeNumber.textContent = secretNumber;
    // Vicotry Styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    highScoreElement.style.color = 'white';
    // Show Again Button - Hide Input and Check Button
    guessElement.style.display = 'none';
    checkButton.style.display = 'none';
    againButton.style.visibility = 'visible';
    // Update High Score
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }
  } else {
    // Check if the guess is too high or too low
    let message = '';
    if (guess > secretNumber * 2) {
      message = 'Too High!';
    } else if (guess > secretNumber) {
      message = 'High!';
    } else if (guess < secretNumber / 2) {
      message = 'Too Low!';
    } else {
      message = 'Low!';
    }
    if (score > 1) {
      displayMessage(message);
      updateScore(score - 1);
    } else {
      displayMessage('You Lost the Game!');
      updateScore(0);
      // Show Again Button - Hide Input and Check Button
      guessElement.style.display = 'none';
      checkButton.style.display = 'none';
      againButton.style.visibility = 'visible';
    }
  }
}

// Event Listener for Check Button
checkButton.addEventListener('click', function () {
  const guess = Number(guessElement.value);
  handleGuess(guess);
});

// Event Listener for Again Button
againButton.addEventListener('click', resetGame);
