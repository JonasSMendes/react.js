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
import { Photo } from './components/photo';

/*
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
*/
/*
function app(){
  return(
    <div>
      <Header title="minha props funciona"/>
      <Header title="outra parada "/>

      ola,mundo olaaa 
 
    <Photo children="" url="http://www.google.com.br/google.jpg" legend='Google'/>
      
    </div>
  )
}
*/

import { useState } from 'react';
/*
function app(){

const [numero, setNumero] = useState(0);
const [name, setName] = useState('jonas')

  const buttonClick = ()=>{
    setNumero( numero + 10)
  }

  return(
    <div>
      o nome é: {numero}
     <button onClick={buttonClick}>clique aqui</button>
      
    </div>
  )
}
*/
/*
function app(){

  const [numero, setNumero] = useState(0);
  const [name, setName] = useState('jonas')
  
    const buttonClick = ()=>{
      setNumero( numero + 1)
    }

    const buttonClickMenos = () =>{
      if(numero > 0){
        setNumero( numero - 1)
      }
    }
    return(
      <div>
        o nome é: {numero}
       <button onClick={buttonClick}>+</button>
       <button onClick={buttonClickMenos}>-</button>
        
      </div>
    )
  }
  */
 /*
function app(){

const [name , setName] = useState('')


const handleInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
  setName  (e.target.value)
}
    return(
      <div>
        Nome:
       <input type="text" name="" id="" value={name}  onChange={handleInput}/>
       <hr />
       seu nome é:{name}
      </div>
    )
  }
  */

 import { Input } from './components/input';
 /*
  function app(){

    let textodobotao = 'clique aqui va'
    let  textoInput = 'aqui es eu'

    const funcaopai = (txt:string)=>{
      alert('frase do app: '+ txt)
  }

  return(
    <div>
      <Botao text={textodobotao} clickFn={funcaopai}/>

      <Input text={textoInput} />
      
    </div>
    
)
    }
    */
   
  import { Pessoa } from './components/pessoa';
/*
    function app(){

      let list = [
          {name:'jonas',idade: 20},
          {name:'maria',idade: 23},
          {name:'pedro',idade: 36},
          {name:'Daisy',idade: 27},
          {name:'simone',idade: 29}
        ]

      

    return(
      <div> 
        <h2> lista de presença</h2>
        <ul>
          {list.map((i, index)=>(
            <Pessoa key={index} data={i}/>
          ))}
        </ul>
      </div>
      
  )
      }
       */
/*
  function app(){

    const [show, setshow] = useState(false)

    const handleclick = ()=>{
      setshow(!show)
    }

    return(
      <div>
        <button onClick={handleclick}>{show ? 'và simbora rapaz' : 'venha cá rapaz'}</button>

        {show === true && 

        <div>
          me chamou? 
          <br />
          <img src="https://onlineseries.com.br/wp-content/uploads/2021/04/Shrek-filmes-Netflix-1024x535.jpg" width={400} alt="" />
        </div>

        }

      </div>
    )
}

*/
/*
function app(){

  const [click, setclick] = useState(false)
 
 const handleClick = ()=>{
   setclick(!click)
 }
 
   return(
     <div>
       <button
       onClick={handleClick}
        style={{
         backgroundColor: 'red', 
         color: 'white'
       }}
        >clique aqui</button>
     </div>
   )
 }
 */

//import { Botao } from './components/botao';

import styled from 'styled-components';



//import { Botao } from './styled-components/botao';
//import { Container } from './styled-components/Container';

import { Container, Botao } from './components/styled-components/appstyled';
import * as C from './components/styled-components/appstyled'


 function app(){
   return(
    <C.Container>
      ola pessoa do gera

      <C.Botao> ola marcia</C.Botao>
    </C.Container>
   )
 };
export default app;