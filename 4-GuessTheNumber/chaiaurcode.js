let randomNumber = Math.round(Math.random() * 100 + 1);
//console.log(randomNumber);

const submit = document.querySelector('#subt');
const userGuess = document.querySelector('#guessField');
const lastguess = document.querySelector('.guesses');
const guessRemained = document.querySelector('.lastResult');
const allGuesses = [];
let guessUsed = 1;
let playgame = true;

if (playgame) {
  playGame();
}

function playGame() {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userGuess.value);
    //console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess < 1) {
    displayMessage('Enter a number greater than 0');
  } else if (guess > 100) {
    displayMessage('Enter a number lesser than 101');
  } else if (isNaN(guess)) {
    displayMessage('Enter a valid number');
  } else {
    if (guessUsed === 11) {
      showUserGuess(guess);
      displayMessage(`Game over Random number was ${randomNumber} `);
      endGame();
    } else {
      showUserGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
}

function displayMessage(message) {
  //
}

function showUserGuess(guess) {
  //
}

function playAgain() {
  //
}

function endGame() {
  //
}
