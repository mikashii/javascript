//Objeto é uma coleção dinâmica de pares: chave/valor 

const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica' //fugir do padrão de identificadores do javascript
produto.preco = 220

produto.material = 'Madeira'
console.log(produto)
//removendo atributo
delete produto.preco

console.log(produto)
