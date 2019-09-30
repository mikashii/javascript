function Carro (velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual = 0;

  //metodo publico

  this.acelerar = function (){
    if(velocidadeAtual + delta <= velocidadeMaxima){
      velocidadeAtual += delta
    }  else {
      velocidadeAtual = velocidadeMaxima
    }
}
  //metodo publico

  this.getVelocidadeAtual = function (){
    return velocidadeAtual
  }
}
const uno = new Carro
uno.acelerar();
console.log(uno.getVelocidadeAtual())


const ferrari = new Carro(350, 20)
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual())



/**
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
 */