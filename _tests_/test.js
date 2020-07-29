import { UserAge } from './../src/age.js';

describe('userAge', () => {

test ('The number you put in is multiplied by the number of the fuction', () => {
  var calculate = new UserAge(100);
  calculate.calculateAges();
  expect(calculate.mercuryYears).toEqual(416);
});
test('should correctly return inputted age in Venus years', () => {
  var calculate = new UserAge(100);
  calculate.calculateAges();
  expect(calculate.venusYears).toEqual(161);
});
test('should correctly return inputted age in Mars years', () => {
  var calculate = new UserAge(100);
  calculate.calculateAges();
  expect(calculate.marsYears).toEqual(53);
});
test('should correctly return inputted age in Jupiter years', () => {
  var calculate = new UserAge(100);
  calculate.calculateAges();
  expect(calculate.jupiterYears).toEqual(8);
 });
 test('should return number of life expectancy on each planet past expectancy if Earth user enters age that is higher than life expectancy', () => {
   var userAge = new UserAge(85);
   userAge.calculateAges();
   userAge.calculateLife();
   expect(userAge.mercuryExpectancy).toEqual(0);
   expect(userAge.venusExpectancy).toEqual(0);
   expect(userAge.marsExpectancy).toEqual(0);
   expect(userAge.jupiterExpectancy).toEqual(0);
 });
 // test('should return number of Venus years past expectancy if Earth user enters age that is higher than life expectancy', () => {
 //   var userAge = new UserAge(85);
 //   userAge.calculateAges();
 //   userAge.calculateLife();
 // });
 // test('should return number of Mars years past expectancy if Earth user enters age that is higher than life expectancy', () => {
 //   var userAge = new UserAge(0);
 //   userAge.calculateAges();
 //   userAge.calculateLife();
 // });
 // test('should return number of Jupiter years past expectancy if Earth user enters age that is higher than life expectancy', () => {
 //   var userAge = new UserAge(0);
 //   userAge.calculateAges();
 //   userAge.calculateLife();
 // });
});
