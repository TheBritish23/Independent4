export function userAge(age) {
  this.mercuryYears = age;
  this.venusYears = age;
  this.marsYears = age;
  this.jupiterYears = age;
}

userAge.prototype.mercuryYears = function(){
  let mercuryYears = Math.floor(this.age);
  return mercuryYears;
};
userAge.prototype.venusYears = function(){
  let venusYears = Math.floor(this.age);
  return venusYears;
};
userAge.prototype.marsYears = function(){
  let marsYears = Math.floor(this.age);
  return marsYears;
};
userAge.prototype.jupiterYears = function(){
  let jupiterYears = Math.floor(this.age);
  return jupiterYears;
};

// export function ExpectancyCalculator(averageLifeExpectancy, userAge) {
//   this.averageLifeExpectancy = averageLifeExpectancy;
//   this.userAge = userAge;
// }
// ExpectancyCalculator.prototype.lifeExpectancyInMercury = function() {
//   let mercuryYears = Math.floor(this.averageLifeExpectancy / mercuryYears - this.userAge / mercuryYears);
//   return mercuryYears;
// };
// ExpectancyCalculator.prototype.lifeExpectancyInVenus = function() {
//   let venusYears = Math.floor(this.averageLifeExpectancy / venusYears - this.userAge / venusYears);
//   return venusYears;
// };
// ExpectancyCalculator.prototype.lifeExpectancyInMars = function() {
//   let marsYears = Math.floor(this.averageLifeExpectancy / marsYears - this.userAge / marsYears);
//   return marsYears;
// };
// ExpectancyCalculator.prototype.lifeExpectancyInJupiter = function() {
//   let jupiterYears = Math.floor(this.averageLifeExpectancy / jupiterYears - this.userAge / jupiterYears);
//   return jupiterYears;
// };
