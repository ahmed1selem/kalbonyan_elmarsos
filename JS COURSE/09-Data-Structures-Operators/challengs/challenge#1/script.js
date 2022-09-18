'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
const [gk, ...feildplayers] = players1;
console.log(gk);
console.log(feildplayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, 'Perisic', 'Coutinho', 'Thiago'];
console.log(players1Final);
const {
  odds: { team1, x: drew, team2 },
} = game;
console.log(team1, team2, drew);
const printGoals = function (...argument) {
  for (let i = 0; i < argument.length; i++)
    console.log(argument[i] + '  ' + (i + 1));
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
team1 < team2 && console.log('Team1 is More liklay to win');
team2 < team1 && console.log('Team2 is More liklay to win');
