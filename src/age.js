export function userAge(age) {
  this.mercuryYears = age;
  this.venusYears = age;
  this.marsYears = age;
  this.jupiterYears = age;
}
mercuryYears(){
  this.age = .24
  const userAge = Math.round(this.age);
  return userAge;
  }
venusYears(){
  this.age = .62
  const userAge = Math.round(this.age);
  return userAge;
  }
marsYears(){
  this.age = 1.88
  const userAge = Math.round(this.age);
  return userAge;
  }
jupiterYears(){
  this.age = 11.86
  const userAge = Math.round(this.age);
  return userAge;
  }
