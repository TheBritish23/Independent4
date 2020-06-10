import { userAge } from './../src/age.js';

describe('userAge', () => {

test ('The number you put in is multiplied by the number of the fuction', () => {
  var calculate = new userAge(412);
  console.log(calculate);
  expect(calculate.mercuryYears).toEqual(412);

  var calculate = new userAge(161);
  console.log(calculate);
  expect(calculate.venusYears).toEqual(161);

  var calculate = new userAge(53);
  console.log(calculate);
  expect(calculate.marsYears).toEqual(53);

  var calculate = new userAge(9);
  console.log(calculate);
  expect(calculate.jupiterYears).toEqual(9);
 });
});
