let randomNumber = Math.round(Math.random() * 100 + 1);
//console.log(randomNumber);

const submit = document.querySelector('#subt');
const userGuess = document.querySelector('#guessField');
const lastguess = document.querySelector('.guesses');
const guessRemained = document.querySelector('.lastResult');
const resultPara = document.querySelector('.resultParas');
let allGuesses = [];
let guessUsed = 1;
let playgame = true;

let lowOrHi = document.querySelector('.lowOrHi');
let playAgainMsg = document.createElement('p');

if (playgame && guessUsed < 11) {
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
      guessUsed++;
      showUserGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('Congrats! You Guessed it right ');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Nope! You Guessed it tooo low ');
  } else if (guess > randomNumber) {
    displayMessage('Nope! You Guessed it tooo high ');
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
  //console.log(p.innerHTML);
}

function showUserGuess(guess) {
  userGuess.value = '';
  allGuesses.push(guess);
  guessRemained.innerHTML = `${11 - guessUsed}`;
  lastguess.innerHTML += ` ${guess} `;
}

function playAgain() {
  playAgainMsg.addEventListener('click', function (e) {
    userGuess.removeAttribute('disabled');
    //userGuess.value = ' ';
    randomNumber = parseInt(Math.random() * 100 + 1);
    allGuesses = [];
    guessUsed = 1;
    lastguess.innerHTML = '';
    guessRemained.innerHTML = `${11 - guessUsed} `;
    resultPara.removeChild(playAgainMsg);
    lowOrHi.innerHTML = '';
    playGame = true;
  });
}

function endGame() {
  userGuess.value = ' ';
  userGuess.setAttribute('disabled', '');
  playAgainMsg.classList.add('button');
  playAgainMsg.innerHTML = `<h2 id='newGame'>Play Again</h2>`;
  resultPara.appendChild(playAgainMsg);
  playGame = false;
  playAgain();
}
