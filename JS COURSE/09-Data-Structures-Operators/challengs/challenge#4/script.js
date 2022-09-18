'use strict';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const a = text.split('\n');
  let num = 1;
  for (const n of ) {
    console.log(
      (
        n.slice(0, n.indexOf('_')).toLowerCase() +
        n[n.indexOf('_') + 1].toUpperCase() +
        n.slice(n.indexOf('_') + 2)
      )
        .replace(' ', '')
        .padEnd(20, ' ') + '✅'.repeat(num)
    );
    num++;
  }
});

prepareString(
  ` underscore_case ,
     First_name ,
  Some_Variable ,
    calculate_AGE , delayed_dep
`
);
