mport { userAge } from './../src/age.js';

describe('userAge', () => {

test ('The number you put in is multiplied by the number of the fuction', () => {
  var calculate = new userAge(412, 161, 53, 9);
  console.log(calculate);
  expect(calculate.mercuryYears).toEqual(412);
  expect(calculate.venusYears).toEqual(161);
  expect(calculate.marsYears).toEqual(53);
  expect(calculate.jupiterYears).toEqual(9);
 });
});
