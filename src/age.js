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
