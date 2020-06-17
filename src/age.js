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

export function ExpectancyCalculator(averageLifeExpectancy, age) {
  this.averageLifeExpectancy = averageLifeExpectancy;
  this.age = age;
}
ExpectancyCalculator.prototype.lifeExpectancyInMercury = function() {
  let lifeExpectancyInMercury = Math.floor(this.averageLifeExpectancy / mercuryYears - this.age / mercuryYears);
  return lifeExpectancyInMercury;
};
ExpectancyCalculator.prototype.lifeExpectancyInVenus = function() {
  let lifeExpectancyInVenus = Math.floor(this.averageLifeExpectancy / venusYears - this.age / venusYears);
  return lifeExpectancyInVenus;
};
ExpectancyCalculator.prototype.lifeExpectancyInMars = function() {
  let lifeExpectancyInMars = Math.floor(this.averageLifeExpectancy / marsYears - this.age / marsYears);
  return lifeExpectancyInMars;
};
ExpectancyCalculator.prototype.lifeExpectancyInJupiter = function() {
  let lifeExpectancyInJupiter = Math.floor(this.averageLifeExpectancy / jupiterYears - this.age / jupiterYears);
  return lifeExpectancyInJupiter;
};
