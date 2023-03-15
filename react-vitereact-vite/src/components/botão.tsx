type props ={
    text: string
    clickFn: (txt:string) => void
}

export const Botao = ({clickFn, text}:props)=>{

   const handleClick = ()=>{
      clickFn('frase')
   }

    return(
        <button onClick={handleClick} >{text}</button>
    )
}