{
    {
        {
            {
                var sera = 'Sera???'
            }
        }
    }
}
console.log(sera);
/**
 * VAR sempre fica visível, mesmo fora do bloco de código (escopo)
 */

 function teste(){
    var local = 123;
    console.log(local)
 }
 teste();
 console.log(local); //fora do escopo da função
 /**Quando definimos uma variável dentro de uma função, ela faz apenas parte do escopo da função */
 