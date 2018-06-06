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
  } 
}
seForVerdade(2)



function efetuar_login(){
  let user = 'admin'
  let pass = 'admin'

  if (user === 'admin' && pass === 'admin'){
    console.log('\n' + 'Autenticado com sucesso')
  } else {
    console.log('Login fail')
  }
}
efetuar_login()