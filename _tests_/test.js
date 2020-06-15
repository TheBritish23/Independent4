import { userAge } from './../src/age.js';

describe('userAge', () => {

test ('The number you put in is multiplied by the number of the fuction', () => {
  var calculate = new userAge(99);
  console.log(calculate);
  expect(calculate.mercuryYears).toEqual(412);

  var calculate = new userAge(99);
  console.log(calculate);
  expect(calculate.venusYears).toEqual(161);

  var calculate = new userAge(99);
  console.log(calculate);
  expect(calculate.marsYears).toEqual(53);

  var calculate = new userAge(99);
  console.log(calculate);
  expect(calculate.jupiterYears).toEqual(9);
 });
});

describe('HowLongUGotLeftToLive', () => {
  test('should return number of Mercury years past expectancy if Earth user enters age that is higher than life expectancy', () => {
      var calculator = new userAge(100, 33);
      console.log(calculator);
      expect(calculator.lifeExpectancyInMercury()).toEqual(279);
    });
