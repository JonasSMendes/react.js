import { useState } from "react"

type props = {
    text: string
}

export const Input = ({text}:props)=>{

    const [name, setname] = useState('')

    const mudando = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setname (e.target.value)
    }

    return(
        <div>
            <input type="text" value={name} onChange={mudando} /> 
            <p>{name}</p>
        </div>
    )
}