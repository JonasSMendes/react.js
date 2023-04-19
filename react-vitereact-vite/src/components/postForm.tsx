import { useState,ChangeEvent } from "react"

type Props = {
    onAdd: (title:string, body:string) => void;
}


export const PostForm=({onAdd}:Props)=>{

    const [addtitle, setaddtitle] = useState('');
    const [addbody, setaddbody] = useState('');

    const handleaddtitle =(e:ChangeEvent<HTMLInputElement>)=>{
        setaddtitle(e.target.value)
      }
      const handleaddbody =(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setaddbody(e.target.value)
      }

      const handleaddclick = async ()=>{
        if(addtitle && addbody){
            onAdd(addtitle, addbody)
        }else{
            alert('preencha os campos')
        }
      }

    return(
        <div>
            <fieldset className="border-2 mb-3 p-3">
            <legend>adicionando novo post</legend>

            <input value={addtitle} onChange={handleaddtitle} className="block border" type="text" placeholder="Digite um titulo"/>
            <textarea value={addbody} onChange={handleaddbody} className="block border" name="" id=""></textarea>
            <button onClick={handleaddclick} className="block border"> adiconar</button>

            </fieldset>
        </div>
    )
}