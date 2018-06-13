const soma = function(x, y) {
  return x + y;
};
//                                   \/ o parâmetro, se vazio, assume a função soma acima
const imprimirResultado = function(a, b, operacao = soma) {
  console.log(operacao(a, b)); // chama a função operação, que é igual a "soma" e atribui os valores de 'a' e 'b'
};
imprimirResultado(1, 2);
imprimirResultado(1, 2, soma);
imprimirResultado(1, 2, (x, y ) => {return  x - y});
imprimirResultado(3, 2, (x, y) => x * y);


imprimirResultado(80, 32, (x, y) => x / y);

//

let arr = ['Modelo', 'Fabricante']
console.log(arr[0])
/*  arr[1] = 'Cor' // replace element
arr[3] = 'Fabricante' // add a element to the array  */

arr.push['teste'[4]] // acrescenta um elemento
arr.pop //deleta um elemento (do fim)
console.log(arr)





