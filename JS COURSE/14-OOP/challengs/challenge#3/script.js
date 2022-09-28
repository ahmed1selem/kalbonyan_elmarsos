// 'use strict';
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.Accelerate = function (speed) {
  this.speed += 10;
  console.log(this.speed, 'yah');
};
Car.prototype.break = function () {
  this.speed -= 5;
};
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattary = function (chargeTo) {
  this.charge = chargeTo;
  console.log(this.charge, 'from charge');
};
EV.prototype.Accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(this.charge, 'from acc');
  console.log(
    `${this.make} is going on ${this.speed} and a charge of ${this.charge} %`
  );
};
const modelS = new EV('tesla', 100, 70);
const BMW = new EV('BMW', 120, 70);
const Marcedes = new Car('Marcedes', 95);
console.log(BMW);
BMW.Accelerate();
BMW.chargeBattary(90);
Marcedes.Accelerate();
