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

import { ChangeEvent, useEffect, useState } from "react";

//import {Header} from './components/header'
//import { Photo } from './components/photo';

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

//import { useState } from 'react';
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

// import { Input } from './components/input';
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
   
 // import { Pessoa } from './components/pessoa';
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

//import styled from 'styled-components';



//import { Botao } from './styled-components/botao';
//import { Container } from './styled-components/Container';

//import { Container, Botao } from './components/styled-components/appstyled';

//import * as C from './components/styled-components/appstyled'


/*
 function app(){
   return(
    <C.Container bgcolor='#ccc'>
     <span>ola pessoa do gera</span> 

     <a href="" className='link'> uhuhuhu</a>

      <C.Botao bg='green'> botão grande</C.Botao>
      <C.Botao bg='blue' small> botão pequeno</C.Botao>

    </C.Container>
   )
 };

 */

 /*
 function app(){
   return(
      <div className="items-center bg-blue-500 flex justify-center flex-col md:flex-row md:justify-between md:pr-2 pl-2" >
         <h1 className=" p-2 text-red-300 text-2xl font-bold">Hello world!</h1>
<div>
        <input type="text" placeholder="digite algo" className="border-transparent bg-white p-2  rounded focus:ring-2 outline-none"/>
        <button className="pl-2 bg-green-400 p-2 rounded hover:bg-green-600 font-bold text-white hover:text-white">Pesquisar</button>
</div>
         <button className=" hover:text-white mt-3 mb-2 p-1 rounded font-bold"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/VisualEditor_-_Icon_-_Menu.svg/2048px-VisualEditor_-_Icon_-_Menu.svg.png" alt="" width={50} /></button>
      </div>
   )
 };
 */

 /*
import { ChangeEvent, useEffect, useState } from "react";


 const app =()=>{

  const [name, setname] = useState('')
  const [lastname, setlasname] = useState('')
  const [fullname, setfullname] = useState('')
  

  const handlenamechange =(e:ChangeEvent<HTMLInputElement>)=>{
    setname(e.target.value)
  }

  const handlelastnamechange =(e:ChangeEvent<HTMLInputElement>)=>{
    setlasname (e.target.value)
  }

  useEffect(()=>{
    setfullname(`${name} ${lastname}`)
  },[name,lastname])


  return(
    <div className="flex flex-col">
        <input className="" type="text" placeholder="digite seu nome" value={name} onChange={handlenamechange} />
        <input className="" type="text" placeholder="digite seu Sobrenome" value={lastname} onChange={handlelastnamechange} />

        <p>Nome Completo: {fullname}</p>
    </div>
  )
 }
 */
/*
import { useEffect, useState } from "react";

type Movie = {
  titulo:string
  avatar:string
}

 const app =()=>{

  const [filmes, setfilme] = useState<Movie[]>([])

  useEffect(() =>
   {handleloadmovies()},
  [])

  const [loading, setLoading] = useState(false)

const handleloadmovies = async () =>{

  try{
  setLoading(true)
  let response = await fetch('https://api.b7web.com.br/cinema/')
  let json = await response.json();
  setLoading(false)
  setfilme(json);
}catch(error){
  setLoading(false);
  <div>tente mais tarde</div>
}
  /*
  fetch('https://api.b7web.com.br/cinema/')
  .then((response)=>{
    return response.json();
  })
  .then((json)=>{
    setfilme(json);
  });
*/
/*
}
  return(
    <div>
        {loading && 
          <img src="https://olaargentina.com/wp-content/uploads/2019/11/loading-gif-transparent-10.gif" width={50} alt="" />
        }
        {!loading && filmes.length > 0 &&
        <div>total de filmes:{filmes.length}</div>
        }
      
    
        <div className="grid grid-cols-6 gap-3">

        {filmes.map((item, index)=>(

        <div key={index} >
        <img src={item.avatar} className="w-30 block" />

        {item.titulo}
        </div>

        ))}
        </div>


        {!loading && filmes.length === 0 &&
        
          <div>tenta mais tarde novamente.</div>
        }
    </div>
  )
 }
*/
/*
import { useEffect, useState } from "react";

type poke = {
  name:string
  url:string
  abilities:string
  data:string
  avatar:string
}

const app = () =>{

  const [pokemon, setpokemon] = useState<poke[]>([])


  useEffect(()=>{
    handlepokemon()
  },[])

  const handlepokemon = () =>{

    const Url = 'https://pokeapi.co/api/v2/pokemon?limit=50' 

    fetch(Url)
    .then((response)=>{
      return response.json()
    })
    .then((json)=>{
      console.log(json)
      setpokemon(json.data.results)
    })
    .catch((erro)=>{
      console.log("erro: " + erro)
    })
  }

  return(
   <div>
      {pokemon.map((item, index) => (
        <div key={index}>
            esse é o pokemon:{item.name}
        </div>
      ))}
    </div>  
  )
}
*/
/*
import { Post } from "./types/post";
import { Input } from "./components/componentes sem uso/input";
import { PostForm } from "./components/postForm";
import { PostItem } from "./components/PostItem";
import { Api } from "./api";

const app = () => {

  const [Post, setPost] = useState<Post[]>([]) 
  const [loading, setloading] = useState(false)

  useEffect(()=>{
     loadingPost();
},[])

  const loadingPost = async ()=>{

    setloading(true);
    let json = await Api.getAllPost();
    setloading(false)
    setPost(json)

  }
/*
  const handleaddclick = async ()=>{
    if(addtitle && addbody){

      let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
          method: 'POST',
          body: JSON.stringify({
            title:addtitle,
            body: addbody,
            userId: 1
          }),
          headers: {
            'Content-type':'application/json'
          }
      });
      let json = await response.json()
      
      if(json.id){
        alert('post adicioando com sucesso')
      }else{
        alert('deu algum erro')
      }


    }else{
      alert ('digite seu post')
    }
  }

  */
/*
  const handleAddPost = async (title:string, body:string)=>{

      let json = await Api.addNewPost(title,body, 1)
      if(json.id){
      alert('post adicioando com sucesso')
      }else{
      alert('deu algum erro')
      } 

  }

  return(
    <div className="p-5">
        {loading && 
        <img src="https://olaargentina.com/wp-content/uploads/2019/11/loading-gif-transparent-10.gif"
        width={50} alt="" />}
      
        <PostForm onAdd={handleAddPost}/>

        {!loading && Post.length > 0 &&
        <div>total de posts:{Post.length}</div>
        }

        <div>
        {Post.map((item, index)=>(
            <PostItem data={item}/>
        ))}
        </div>

        {!loading && Post.length === 0 &&
          <div>tenta mais tarde novamente, não a posts.</div>
        }
    </div>
  )
}


/*

import { PostPiece } from "./types/episodios";

const app = () =>{

  const [loading, setloading] = useState(false)
  const [Episodios, setEpisodios] = useState<PostPiece[]>([])

  useEffect(()=>{
    loadingPostPiece()
  },[])

  const loadingPostPiece = async () =>{
    let response = await fetch('https://api.api-onepiece.com/episodes');
    let json = await response.json()
    setEpisodios(json);

  }


  return(
    <div>
        {loading && 
          <img src="https://olaargentina.com/wp-content/uploads/2019/11/loading-gif-transparent-10.gif" width={50} alt="" />
        }
        {!loading && Episodios.length > 0 &&
        <div className="p-5">total de posts:{Episodios.length}</div>
        }
      
    
        <div>

        {Episodios.map((item, index)=>(

        <div key={index} className="p-5" >
          <br /> <br />
        <h4 className="font-bold" >{item.title}</h4> 
        <small> - data de lançamento - {item.release_date} - saga - {item.saga_id} -episodio- {item.number}</small>
        <p>{item.description}</p>  

        </div>

        ))}
        </div>
        
        {!loading && Episodios.length === 0 &&
          <div>tenta mais tarde novamente, não a episodios aqui ainda.</div>
        }
    </div>
  )
}
*/
/*
import { useContagem } from "./reducers/contagem";

  const app = () => {

    const [state, dispatch] = useContagem();
  
  return(
    <div className="p-5">

      contagem: {state.count}

      <button className="p-3" onClick={()=>dispatch({type:'ADD'})}>Adicionar</button>
      <button className="p-3" onClick={()=>dispatch({type:'DEL'})}>Remover</button>
      <button className="p-3" onClick={()=>dispatch({type:'RESET'})}>Resetar</button>
    </div>
  )
}
*/




import { Routelist } from "./routeList";


const app = () =>{
  return(
    <div className="p-4">
        <header>
        <h1>titulo do site</h1>
        </header>
        <br />
        <hr />
        <div className="py-4">
            <Routelist/>
        </div>
        <hr />
        <footer>
          todos os direitos reservados
        </footer>
    </div>
  )
}


export default app;

//https://pokeapi.co/api/v2/pokemon/

//https://api.b7web.com.br/cinema/

//https://jsonplaceholder.typicode.com/posts

//https://api.api-onepiece.com/episodes