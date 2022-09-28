'use strict';
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //dont do it not a good mantaince for preformance reasons
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};
Person.hey = function () {
  console.log('hey there');
  console.log(this);
};
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`my name is ${this.name} and i study ${this.course}`);
};
const mike = new Student('mike', 1999, 'Computer scince');
mike.introduce();
// mike.calcAge();
Person.hey();
console.log(mike.__proto__);
console.log(mike instanceof Student);
// Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
// const jonas = new Person('jonas', 1991);
// console.log(jonas);
// const matila = new Person('matila', 2000);
// console.log(matila);
// const ahmed = new Person('ahmed', 2001);
// console.log(new Person('ahmed', 2001));
// console.log(jonas instanceof Person);
// //prototypes
// Person.prototype;

// jonas.calcAge();
// const ah = new Array();
// console.log(ah.__proto__);
// console.log(jonas.__proto__);
// console.log(Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matila));
// console.log(Person.prototype.isPrototypeOf(Person));
// Person.prototype.spices = 'homo Sapiens';
// console.log(jonas.spices, matila.spices);
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('spacies'));

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);
// console.log(Person.prototype.constructor);
// const arr = [1, 2, 3, 4, 5, 6, 5, 4, 5];
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// console.log(arr);
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());
// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

//class expretion
// const PersonC1=class{ }
//class declartions
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not fullName`);
    }
  }
  get fullName() {
    return this._fullname;
  }
  static hey() {
    console.log(`hey there`);
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);
console.log(jessica.age);
console.log(jessica.fullName);
console.log(jessica);
// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`);
// };
jessica.greet();
const walter = new PersonCl('walter white', 1995);
PersonCl.hey();
// const account = {
//   owner: 'jonas',
//   movments: [200, 520, 120, 300],

//   get lastest() {
//     return this.movments.slice(-1).pop();
//   },
//   set lastest(mov) {
//     this.movments.push(mov);
//   },
// };

// console.log(account.lastest);
// account.lastest = 50;
// console.log(account.movments);
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(name, birthYear) {
//     this.Name = name;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__);
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1999);
// sarah.calcAge();
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not fullName`);
    }
  }
  get fullName() {
    return this._fullname;
  }
  static hey() {
    console.log(`hey there`);
    console.log(this);
  }
}
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.fullName = fullName;
    this.course = course;
  }
  introduce() {
    console.log(`my name is ${this._fullName} and i study ${this.course}`);
  }
  calcAge() {
    console.log(`i'm ${2037 - this.birthYear}`);
  }
}
const martha = new StudentCl('Marths jons', 2001, 'CS');
martha.introduce();
martha.calcAge();
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(name, birthYear) {
    this.Name = name;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
// StudentProto.introduce = function () {
//   console.log(`my name is ${this.firstName} and i study ${this.course}`);
// };
StudentProto.init = function (fullName, birthYear, course) {
  PersonProto.init.call(this, fullName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`my name is ${this.fullName} and i study ${this.course}`);
};
const jay = Object.create(PersonProto);
jay.init('jay', 2010, 'CS');
jay.calcAge();
console.log(jay);
jay.introduce();
*/
//public filed
//privet filed
//public method
//privet method
//there is also static version
class Account {
  //public filed
  lacal = navigator.language;
  //privet
  #movments = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movments = [];
    // this.lacal = navigator.language;
    console.log('thanks for openning an account');
  }
  //public method

  getMovments() {
    return this.#movments;
  }

  deposit(val) {
    this.#movments.push(val);
    return this;
  }
  withdrew(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('loan approved');
    }
    return this;
  }
  //privet methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('jonas', 'EUR', 111);
// acc1.movments.push(250);
// acc1.movments.push(-140);
acc1.deposit(250);
acc1.withdrew(140);
acc1.requestLoan(1000);
console.log(acc1);
console.log(acc1);
console.log(acc1.getMovments());
// console.log(acc1.#movments);
// console.log(acc1.#approveLoan());
acc1.deposit(300).deposit(500).withdrew(35).requestLoan(25000).withdrew(4000);
console.log(acc1.getMovments());
