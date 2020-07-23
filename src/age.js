export function userAge(age) {
  this.mercuryYears = .24;
  this.venusYears = .62;
  this.marsYears = 1.88;
  this.jupiterYears = 11.86;
}

// mercuryAge(); {
//   this.planet = .24;
//   const userAge = Math.round(this.age);
//   return "userAge";
// };
//
// venusAge(); {
//   this.planet = .62;
//   const userAge = Math.round(this.age);
//   return "userAge";
// };
//
// marsAge(); {
//   this.planet = 1.88;
//   const userAge = Math.round(this.age);
//   return "userAge";
// };
//
// jupiterAge(); {
//   this.planet = 11.86;
//   const userAge = Math.round(this.age);
//   return "userAge";
// }

userAge.prototype.mercuryYears = function(){
  let mercuryYears = Math.floor(.24);
  return mercuryYears;
};
userAge.prototype.venusYears = function(){
  let venusYears = Math.floor(.62);
  return venusYears;
};
userAge.prototype.marsYears = function(){
  let marsYears = Math.floor(1.88);
  return marsYears;
};
userAge.prototype.jupiterYears = function(){
  let jupiterYears = Math.floor(11.86);
  return jupiterYears;
};

export function ExpectancyCalculator(averageLifeExpectancy, userAge) {
  this.averageLifeExpectancy = averageLifeExpectancy;
  this.userAge = userAge;
}

ExpectancyCalculator.prototype.averagelifeExpectancy = function() {
  let mercuryYears = Math.floor(this.lifeExpectancyInMercury / mercuryYears - this.userAge / mercuryYears);
  return mercuryYears;
};
ExpectancyCalculator.prototype.averagelifeExpectancy = function() {
  let venusYears = Math.floor(this.lifeExpectancyInVenus / venusYears - this.userAge / venusYears);
  return venusYears;
};
ExpectancyCalculator.prototype.averagelifeExpectancy = function() {
  let marsYears = Math.floor(this.lifeExpectancyInMars / marsYears - this.userAge / marsYears);
  return marsYears;
};
ExpectancyCalculator.prototype.averagelifeExpectancy = function() {
  let jupiterYears = Math.floor(this.lifeExpectancyInJupiter / jupiterYears - this.userAge / jupiterYears);
  return jupiterYears;
};
