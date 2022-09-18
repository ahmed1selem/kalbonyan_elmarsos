(function () {
  const header = document.querySelector('h1');
  const body = document.querySelector('body');
  header.style.color = 'red';
  body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
