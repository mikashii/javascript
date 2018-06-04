function soBoanoticia (nota){
  if (nota >= 7) {
    console.log('Aprovado com ', nota)
  } else if (nota <= 6){
    console.log('Reprovado', nota)
  } else{
    console.log('Tente novamente')
  }}

soBoanoticia(6.1)
soBoanoticia(4.1)
soBoanoticia(7)

function seForVerdade (valor) {
  if (valor) {
    console.log('É verdade...' + valor)
<<<<<<< HEAD
  } 
=======
  }
>>>>>>> 93bef5fe121cda1d1d57c0183a8d8ddee963d1e6
}
seForVerdade(2)