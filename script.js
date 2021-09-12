'use strict';
let newGameBtn = document.querySelector('.btn--new');
let winnerNewGameBtn = document.querySelectorAll('.btn--new2');
winnerNewGameBtn[0].style.display = 'none';
winnerNewGameBtn[1].style.display = 'none';

let diceImg = document.querySelector('img');
let rollDiceBtn = document.querySelector('.btn--roll');
let holdBtn = document.querySelector('.btn--hold');

let player1Name = document.getElementById('name--1');
let player2Name = document.getElementById('name--2');
let player = document.querySelectorAll('.player');
let activePlayer = document.querySelector('.player--active');

let current = document.querySelectorAll('.current');
let currentScore = document.querySelectorAll('.current-score');
currentScore = 0;

let player1 = document.querySelector('.player--1');
let player1Score = document.getElementById('score--1');
let player1CurrentScore = document.getElementById('current--1');

let player2 = document.querySelector('.player--2');
let player2Score = document.getElementById('score--2');
let player2CurrentScore = document.getElementById('current--2');

let rollcontainActive = () => {
  if (
    player1.classList.contains('player--active') &&
    player1.classList.contains('player--1')
  ) {
    player1CurrentScore.textContent = currentScore;
  } else {
    player2CurrentScore.textContent = currentScore;
  }
};

let switchPlayer = () => {
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

let toggle100 = () => {
  newGameBtn.classList.toggle('hidden');
  diceImg.classList.toggle('hidden');
  rollDiceBtn.classList.toggle('hidden');
  holdBtn.classList.toggle('hidden');
};

let rollDice = () => {
  let diceNumber = Math.ceil(Math.random() * 6);
  diceImg.src = `dice-${diceNumber}.png`;
  if (diceNumber === 1) {
    currentScore = 0;
    rollcontainActive();
    switchPlayer();
  } else {
    currentScore += diceNumber;
    rollcontainActive();
  }
};

let hold = () => {
  if (
    player1.classList.contains('player--active') &&
    player1.classList.contains('player--1')
  ) {
    player1Score.textContent = Number(player1Score.textContent) + currentScore;
    if (player1Score.textContent < 20) {
      player1CurrentScore.textContent = 0;
      currentScore = 0;
      switchPlayer();
    } else {
      player1Score.textContent = 'Win This Game';
      player1.classList.toggle('player--winner');
      player2.classList.toggle('hidden');
      player1CurrentScore.classList.toggle('hidden');
      current[0].classList.toggle('hidden');
      winnerNewGameBtn[0].style.display = 'block';
      toggle100();
    }
  } else {
    player2Score.textContent = Number(player2Score.textContent) + currentScore;
    if (player2Score.textContent < 20) {
      player2CurrentScore.textContent = 0;
      currentScore = 0;
      switchPlayer();
    } else {
      player2Score.textContent = 'Win This Game';
      player2.classList.toggle('player--winner');
      player1.classList.toggle('hidden');
      player2CurrentScore.classList.toggle('hidden');
      current[1].classList.toggle('hidden');
      winnerNewGameBtn[1].style.display = 'block';
      toggle100();
    }
  }
};

let newGame = () => {
  currentScore = 0;
  diceImg.src = 'dice-0.png';
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  player1.classList.remove('player--winner');
  player1.classList.remove('hidden');
  player1CurrentScore.classList.remove('hidden');
  current[0].classList.remove('hidden');
  winnerNewGameBtn[0].style.display = 'none';
  player2.classList.remove('player--winner');
  player2.classList.remove('hidden');
  player2CurrentScore.classList.remove('hidden');
  current[1].classList.remove('hidden');
  winnerNewGameBtn[1].style.display = 'none';
  newGameBtn.classList.remove('hidden');
  diceImg.classList.remove('hidden');
  rollDiceBtn.classList.remove('hidden');
  holdBtn.classList.remove('hidden');
  if (
    player2.classList.contains('player--active') &&
    player2.classList.contains('player--2')
  ) {
    switchPlayer();
  }
};

rollDiceBtn.addEventListener('click', rollDice);
diceImg.addEventListener('click', rollDice);
holdBtn.addEventListener('click', hold);
newGameBtn.addEventListener('click', newGame);
winnerNewGameBtn[0].addEventListener('click', newGame);
winnerNewGameBtn[1].addEventListener('click', newGame);
