// Objetos são um conjunto de chave valor

const prod1 = {}        // Uma objeto vazio, abaixo são adicionadas as chaves e os valores
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4000
prod1['Desconto Legal'] = 0.40    //     Evitar atributos com espaço

// prod1 é a objeto / nome é a chave e 'Celular ultra mega é o valor 


// outra forma de sentença para criar a array

const Carolina = {
  Nome: "Carolina",
  lastName: "Portas",
  yearOfBirth: 1994,
  job: "Web developer",
  isMarried: false
}
console.log(Carolina)                  // exibe todo  o conteúdo do objeto
console.log(["job"])                    // exibe a key 'job'. É necessário passar a chave como uma string
//


console.log(["lastName"])          // criar variável através da chave 'lastName'
const trabalho = 'job'                 //cria uma variavel a partir da key do objeto "Carolina"
const sobreNome = 'lastName'            // 
console.log(Carolina[trabalho])         // atribui um valor a variável 'trabalho' vindo do objeto 'Carolina' usa-se os brackets
console.log(Carolina[sobreNome])
//                   variavel 

/** Data mutation */

Carolina.lastName = 'Cabral';
Carolina['job'] = 'Web Developer'
Carolina.isMarried = true;
console.log(Carolina);

    // Criar uma função dentro de um objeto.
/*
let Lais = {
  nome: 'Láis',
  sobreNome: 'Banhidai',
  yearOfBirth: '1999',
  job: 'Aux administrativo',
  isMarried: false,
  family: ["Carol", "Bete"],
  calculateAge: function (){
    return 2018 - this.yearOfBirth;
  }
  //   console.log(Lais.calculateAge());  // Chamando o método
  
  // Atribuir o valor a uma variavel
  const age = Lais.calculateAge(); // vinculando os valores da função
  Lais.age = age; // criando uma nova chave chamada "age" com o valor da função calculateAge()
  console.log(Lais.age)
  console.log(Lais)
}; 

*/

/**
 * Versão dois
 */
let Lais = {
  nome: 'Láis',
  sobreNome: 'Banhidai',
  yearOfBirth: '1999',
  job: 'Aux administrativo',    // cada chave > valor é chamado de propriedade do objeto
  isMarried: false,
  family: ["Carol", "Bete"],
  calculateAge: function (){
   // return 2018 - this.yearOfBirth; // versão 1
   this.age = 2018 - this.yearOfBirth;
  }
};

Lais.calculateAge()
console.log(Lais)


const Mark = {
  name: "Mark Smith",
  mass: 60,
  height: 1.80,
  calculateBmi: function (){
   this.bmi = this.mass / (this.height * this.height);
   return this.bmi;
  }
};

const Brian = {
  name: "Brian O'nell",
  mass: 90,
  height: 1.90,
  calculateBmi: function () {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  }
};

Mark.calculateBmi()
Brian.calculateBmi()
console.log(Mark, Brian)


if (Mark.calculateBmi() > Brian.calculateBmi()){
  console.log(`${Mark.name} has a higher BMI than ${Brian.name}.`)
} else if (Brian.calculateBmi() > Mark.calculateBmi()){
  console.log(`${Brian.name} has a higher BMI than ${Mark.name}.`)
} else {
  console.log(`Both have the same BMI.`)
}



























