'use strict';
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
    return this;
  }
}
class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  chargeBattary(chargeTo) {
    this.charge = chargeTo;
    console.log(this.charge);
    return this;
  }
  Accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(this.charge, 'from acc');
    console.log(
      `${this.make} is going on ${this.speed} and a charge of ${this.charge} %`
    );
    return this;
  }
}
const Rivian = new EV('Rivian', 120, 23);
Rivian.Accelerate().chargeBattary(20).break();
