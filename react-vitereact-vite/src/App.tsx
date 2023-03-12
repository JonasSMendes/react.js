/*
const app = () => {

  let n1:number = 345
  let n2:number = 26
  let name:string = 'jonas'
  let sobrenome:string = 'mendes'


  function somar(n1:number, n2:number):number{
    return n1 * n2
  }

  return( 
  <div>
  a multiplicação do valor {n1} com o valor de {n2} é de {somar(n1,n2)} logo {`${name} ${sobrenome}`} estão com {somar(n1,n2)} peras
    </div>
  )
}
*/

import {Header} from './components/header'

function Form(){
  return (
    <form >
      <label htmlFor="">Nome completo</label>
      <input type="text" required placeholder='Nome:' />
      <label htmlFor="">Email</label>
      <input type="email" name="" id="" required placeholder='Email' />
      <label htmlFor="">password</label>
      <input type="password" name="" id="" placeholder='senha:' required />
    </form>
  )
}

function app(){
  return(
    <div>
      <Header/>
      ola,mundo olaaa 

      <Form/>
    </div>
  )
}
export default app;