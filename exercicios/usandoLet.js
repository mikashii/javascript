var numero = 1
{
  let numero = 2
  console.log('Dentro =', numero)
}
console.log('Fora = ', numero)

// O let tem escopo de bloco. Logo só funcionará dentro do bloco de código
// Let, escopo global, de função e de bloco

/* 

Imprimiu: 
Dentro = 2
Fora =  1

*/
