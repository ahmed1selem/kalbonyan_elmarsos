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
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
  scorers: {
    Lewandowski: 0,
    Gnarby: 0,
    Hummels: 0,
  },
};
for (const [i, val] of game.scored.entries()) {
  console.log(`${i + 1} ${val}`);
}
let avg = 0;
for (const val of Object.values(game.odds)) {
  avg += val;
}
console.log(avg / 3);
console.log(`odd of victory for ${game.team1} : ${game.odds.team1}`);
console.log(`odd of draw : ${game.odds.draw}`);
console.log(`odd of victory for ${game.team2} : ${game.odds.team2}`);
for (const val of game.scored) {
  for (const nam of Object.keys(game.scorers)) {
    if (nam == val) {
      game.scorers[val] += 1;
    }
  }
}
