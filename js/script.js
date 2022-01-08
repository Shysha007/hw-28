'use strict'

let calculator = {
  flag: true,
  firstVal: 0,
  secondVal: 0,

  isValid(arg) {
  if (isNaN(arg) || arg === null || arg.trim() === ``) { 
      alert("Введено не число!");
      this.flag = false;
    }
  },

  read() {
    let firstVal = prompt(`Введите первое значение:`);
    this.isValid(firstVal);
    if (this.flag) {
      console.log(this.firstVal = +firstVal);
    }
    let secondVal = prompt(`Введите второе значение:`);
    this.isValid(secondVal);
    if (this.flag) {
      this.secondVal = +secondVal;
    }
  },

  sum() {
    if (this.flag) {
      return this.firstVal + this.secondVal;
    } else {
      return `не числу!`;
    }
  },

  mul() {
    if (this.flag) {
      return this.firstVal * this.secondVal;
    } else {
      return `не числу!`;
    }
  }
};

calculator.read();

alert(`Сумма равна  ` + calculator.sum());

alert(`Произведение равно  ` + calculator.mul());
