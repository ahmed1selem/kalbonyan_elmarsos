'use strict';
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};
document.querySelector('.poll').addEventListener('click', function () {
  const chioce = prompt(`${poll.question}\n${poll.options.join('\n')}\n
  (Write option number)`);
  if (chioce >= 0 && chioce <= 4) {
    for (const i of poll.options) {
      if (i.startsWith(chioce)) {
        poll.answers[chioce]++;
      }
    }
  }
  displayResults('');
});
const displayResults = function (type) {
  if (typeof type == typeof []) {
    console.log(poll.answers);
  } else if (typeof type == typeof '') {
    console.log(`the poll resulat is ${poll.answers.join(',')}`);
  } else {
    return null;
  }
};
