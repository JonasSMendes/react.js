import { useUser } from "@/context/UserContext"
import { useState } from "react"
import { ChatText } from "./ChatText"

export const InputName = () => {

    const [name, setName] = useState('')
    const UserCtx = useUser()

    const HandleNameSet = () => {
        if(name !== ''){
            UserCtx?.setUser(name);
        }
    }

    return(
        <div className="flex item-center justify-center mt-20 ">
            {UserCtx?.user === '' &&
            <>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Escreva seu nome" className="input w-full max-w-xs" />
            <button onClick={HandleNameSet} className="ml-4 btn">Entrar</button>
            </> 
            }
            {UserCtx?.user !== '' &&
                <ChatText/>
            }

            
        </div>
    )
}