export function UserAge(age) {
  this.age = age;
  this.mercuryYears = .24;
  this.mercuryExpectancy;
  this.venusYears = .62;
  this.venusExpectancy;
  this.marsYears = 1.88;
  this.marsExpectancy;
  this.jupiterYears = 11.86;
  this.jupiterExpectancy;
}

UserAge.prototype.calculateAges = function(){
  this.mercuryYears = Math.floor(this.age/.24);
  this.venusYears = Math.floor(this.age/.62);
  this.marsYears = Math.floor(this.age/1.88);
  this.jupiterYears = Math.floor(this.age/11.86);
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
