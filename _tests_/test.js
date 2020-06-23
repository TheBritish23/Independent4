import { userAge } from './../src/age.js';

describe('userAge', () => {

test ('The number you put in is multiplied by the number of the fuction', () => {
  var calculate = new userAge(99);
  console.log(calculate);
  expect(calculate.mercuryYears).toEqual(412);
});
test('should correctly return inputted age in Venus years', () => {
  var calculate = new userAge(99);
  console.log(calculate);
  expect(calculate.venusYears).toEqual(161);
});
test('should correctly return inputted age in Mars years', () => {
  var calculate = new userAge(99);
  console.log(calculate);
  expect(calculate.marsYears).toEqual(53);
});
test('should correctly return inputted age in Jupiter years', () => {
  var calculate = new userAge(99);
  console.log(calculate);
  expect(calculate.jupiterYears).toEqual(9);
 });
});

describe('HowLongUGotLeftToLive', () => {

  test('should return number of Mercury years past expectancy if Earth user enters age that is higher than life expectancy', () => {
      var calculate = new userAge(100, 99);
      console.log(calculate);
      expect(calculator.lifeExpectancyInMercury()).toEqual(618);
    });
  test('should return number of Venus years past expectancy if Earth user enters age that is higher than life expectancy', () => {
      var calculate = new userAge(100, 99);
      console.log(calculate);
      expect(calculate.lifeExpectancyInVenus()).toEqual(149);
    });
  test('should return number of Mars years past expectancy if Earth user enters age that is higher than life expectancy', () => {
      var calculate = new userAge(100, 99);
      console.log(calculate);
      expect(calculate.lifeExpectancyInMars()).toEqual(53);
    });
  test('should return number of Jupiter years past expectancy if Earth user enters age that is higher than life expectancy', () => {
      var calculate = new userAge(100, 99);
      console.log(calculate);
      expect(calculate.lifeExpectancyInJupiter()).toEqual(10);
    });
