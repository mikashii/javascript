const Person = function (name, lastName, yearOfBirth, job) {
  this.name = name;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function (){
  return this.age = 2018 - this.yearOfBirth;
}
Person.prototype.adcHobbie = function (hobbie){
  return this.hobbie = hobbie;
}

let Carolina = new Person ("Carolina", "Cabral", 1994, "Web Developer")
// Invovanco os métodos criados acima.
Carolina.calculateAge()
Carolina.adcHobbie("Programar")

console.log(Carolina)