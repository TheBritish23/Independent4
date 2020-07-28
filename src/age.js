export function UserAge(age) {
  this.age = age;
  this.userExpectancy;
  this.lifeExpectancy = 85;
  this.mercuryYears;
  this.mercuryExpectancy;
  this.venusYears;
  this.venusExpectancy;
  this.marsYears;
  this.marsExpectancy;
  this.jupiterYears;
  this.jupiterExpectancy;
}

UserAge.prototype.calculateAges = function(){
  this.mercuryYears = Math.floor(this.age/.24);
  this.venusYears = Math.floor(this.age/.62);
  this.marsYears = Math.floor(this.age/1.88);
  this.jupiterYears = Math.floor(this.age/11.86);
};

UserAge.prototype.calculateLife = function(){
  this.userExpectancy = (this.lifeExpectancy - this.age);
  this.mercuryExpectancy = Math.floor((this.lifeExpectancy/.24) - this.mercuryYears);
  this.venusExpectancy = Math.floor((this.lifeExpectancy/.62) - this.venusYears);
  this.marsExpectancy = Math.floor((this.lifeExpectancy/1.88) - this.marsYears);
  this.jupiterYears = Math.floor((this.lifeExpectancy/11.86) - this.jupiterYears);
};

// export function ExpectancyCalculator(averagelifeExpectancy, userAge) {
//   this.averagelifeExpectancy = averagelifeExpectancy;
//   this.userAge = userAge;
// }
//
// ExpectancyCalculator.prototype.averagelifeExpectancy = function() {
//   let mercuryYears = Math.floor(this.lifeExpectancyInMercury / mercYears - this.userAge / mercYears);
//   return mercuryYears;
// };
// ExpectancyCalculator.prototype.averagelifeExpectancy = function() {
//   let venusYears = Math.floor(this.lifeExpectancyInVenus / venYears - this.userAge / venYears);
//   return venusYears;
// };
// ExpectancyCalculator.prototype.averagelifeExpectancy = function() {
//   let marsYears = Math.floor(this.lifeExpectancyInMars / marYears - this.userAge / marYears);
//   return marsYears;
// };
// ExpectancyCalculator.prototype.averagelifeExpectancy = function() {
//   let jupiterYears = Math.floor(this.lifeExpectancyInJupiter / jupitYears - this.userAge / jupitYears);
//   return jupiterYears;
// };
