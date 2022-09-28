// 'use strict';
const Car = function (make, speed) {
  this.make = make;
  this.speed = `${speed}Km/h`;
};
Car.prototype.Accelerate = function (speed) {
  speed = parseInt(this.speed) + 10;
  this.speed = speed;
  console.log(this.speed);
};
Car.prototype.break = function () {
  speed = parseInt(this.speed) - 5;
  this.speed = speed;

  console.log(this.speed);
};
const BMW = new Car('BMW', 120);
const Marcedes = new Car('Marcedes', 95);
console.log(BMW);
BMW.Accelerate();
Marcedes.break();
BMW.break();
Marcedes.Accelerate();
BMW.Accelerate();
Marcedes.break();
