'use strict';
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
const element = [...new Set(gameEvents.values())];

console.log(element);
gameEvents.delete(64);
let arr = 0;
for (const [arr, eve] of gameEvents) {
  const TIME = arr < 45 ? 'FIRST HALF' : 'SECOUND HALF';
  console.log(` [${TIME}] ${arr}:  ${eve}`);
}
console.log(`An event happend on avarge every ${90 / gameEvents.size} mins`);
