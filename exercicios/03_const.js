  /* Constantes

  O identificador de constantes é o const.
  Uma const nao pode alterar seu valor por meio de uma atribuiçao ou ser declarada novamente enquanto o programa é executado
  - Ela deve ser inicializada com um valor


  Não é possível declarar uma constante com o mesmo nome de uma função ou variavel que estao no mesmo escopo.
  Exemplo: */
    function f(){}
      // const f = 5;
    // SyntaxError: Identifier 'f' has already been declared
    
    //  Isso tbm irá gerar erro 
    function f(){
      const g = 5;
      var g 
      // Declarações
    }
    
  