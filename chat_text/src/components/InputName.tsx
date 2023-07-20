import { useUser } from "@/context/UserContext"
import { useState } from "react"

export const InputName = () => {

    const [Name, setName] = useState('')
    const UserCtx = useUser()

    const HandleNameSet = () => {
        UserCtx?.setUser(Name);
    }

    return(
        <div className="flex item-center justify-center mt-20 ">
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Escreva seu nome" className="input w-full max-w-xs" />
            <button onClick={HandleNameSet} className="ml-4 btn">Entrar</button>
        </div>
    )
}