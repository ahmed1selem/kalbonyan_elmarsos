'use strict';

//selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');
const dicEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let scores, currentScore, activePlayer, playing;
// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  dicEL.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};
// Rolling dice functionlity
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1- ganerat dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.display dice
    dicEL.classList.remove('hidden');
    dicEL.src = `dice-${dice}.png`;

    //3.check 1
    if (dice !== 1) {
      //add to score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switcing to next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  //1.add current score to active platyer
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2.check  100 ?win:switch player
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dicEL.classList.add('hidden');
    } else {
      //switch player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', function () {
  init();
});
