// 'use strict';
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  Accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  break() {
    this.speed -= 5;
    console.log(this.speed);
  }
}
const BMW = new Car('BMW', 120);
const Marcedes = new Car('Marcedes', 95);
console.log(BMW);
BMW.Accelerate();
Marcedes.break();
BMW.break();
Marcedes.Accelerate();
BMW.Accelerate();
Marcedes.break();
console.log(BMW.speedUS);
console.log(BMW);
