'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; // To select a random number from 1 to 20, trunc and  + 1 to avoid decimal number
let score = 20; // State Variable
let highScore = 0;
// Create a a displayMessage function to not repeat codes
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // Game logic depending on the number the user put in the check box number

  // When there is no input in the check box option
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔️ No number';
    displayMessage('⛔️ No number');

    // When player wins the game /////////////
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🤩🥳Correct Number!';
    displayMessage('🤩🥳Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // Change the background color when player wins using CSS style

    document.querySelector('body').style.backgroundColor = '#60b347';

    // Increase the guess number rectangle when the user wins the game modifying the width from original CSS

    document.querySelector('.number').style.width = '30rem';

    // Implement the high score and keep it whenever we start a new game
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too High' : '📉 Too low';
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = ' 😤 You lost the game';
      displayMessage(' 😤 You lost the game');
      document.querySelector('.score').textContent = 0;
    }

    /*
    // When guess is too high //////////////
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 😤 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low ////////////////
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 😤 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    */
  }
});

// Reset all values when the player wins the game.
//Using the Start again button

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
});
