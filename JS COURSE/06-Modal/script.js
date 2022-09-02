'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsopenModel = document.querySelectorAll('.show-modal');
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsopenModel.length; i++)
  btnsopenModel[i].addEventListener('click', openModal);
btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
