/* 
Arrays são utilizadas para armazenar ou receber valores em listas.
- Toda array é um objeto
- Há duas formas de construir uma array
1 - let arr = new Array();
2 - De forma literal e mais utilizada:
let arr = [a, b, c, d];
- Array é contruida por índices e começando sempre do índice 0, ou seja arr[0] = a 



*/
const valores = new Array(
    "Acima de R$ 10,00",
    "Acima de R$ 20,00",
    "Acima de R$ 30,00",
    "Acima de R$ 40,00"
    );
    const produto = new Array("Camiseta", " Calça", " Moletom", " Jaqueta");
    console.log(produto[3],"e" + produto[2]);
    console.log(valores);
    
    console.log(valores.length);
    
    const names = ["Jhon", "Jane", "Mark"];
    const years = new Array(1998, 1969, 1948);
    
    console.log(names[1]);
    console.log("\n")
    
    names[1] = "Carol"; // Modificar o index número 1 para 'carol'
    console.log(names[1]);
    console.log("\n")

    const Jhon = ["Jhon", "Smith", 1990, "Teacher", false];
    console.log(Jhon);
    console.log("\n")
    
    Jhon.push("Blue") // adiciona um elemento na ultima posição da array
    console.log("Push: " + Jhon)
    console.log("\n")
    // [ 'Jhon', 'Smith', 1990, 'Teacher', false, 'Blue' ]
    
    Jhon.unshift("Mr.") // adiciona um elemento no começo de um array.
    console.log("Unshift: " + Jhon)
    console.log("\n")
    // [ 'Mr.', 'Jhon', 'Smith', 1990, 'Teacher', false, 'Blue' ]
    Jhon.shift() // remove o primeiro elemento da array
    
    Jhon.pop() // remove o último elemento do array
    
    Jhon.splice() // Pode adicionar e remover elementos da array
    //Adicionar
    Jhon.splice(1, 0, "Caete", "Carol") //adiciona ao indice 1, não remove ninguém, e adicona no indíce 1 o "Caete"
    console.log(Jhon)
    console.log("\n")
    
    //Remover através do splice
    Jhon.splice(0, 1) //do indice zero(primeiro elemento), remove apenas um elemento 
    console.log(Jhon + "\n Removendo um elemento \n")
    
    //Slice - novo array gerado a partir do método slice.
    const newJhon = Jhon.slice(3) //cria o array a partir do indice 3
    console.log("Slice da array:\n  " + newJhon);
    const oldJhon = Jhon.slice(0, 2) //pega do 0 ao indice 2, mas não adc o 2
    console.log(oldJhon)
    
    /**
    * 
    */
    
    
    
    // IndexOf pode ser armazenado em um variavel ou retornado por um alert
    const index = Jhon.indexOf("Smith")
    console.log(index)
    
    // Condição que irá verificar se jhon é um professor, o resultado de um indice que não está na array deverá retornar - 1
    if (Jhon.indexOf("Teacher") === -1) {
        console.log("Jhon não é um professor")
    } else {
        console.log("Jhon é um professor! \n")
        
    }
    
    
    
    const anos = [1994, 1999, 2001];
    const matriz = [];
    for (i = 0; i < anos.length; i++) {
        matriz[i] = 2018 - anos[i];
    }
    console.log(matriz)

    var yuky = ["Jessyka", "Yuky", 27, "gostosa"]
    console.log(yuky[3])
    console.log(yuky[0])
    console.log(yuky)
    console.log(yuky)
yuky.splice(2,1);
console.log(yuky)           