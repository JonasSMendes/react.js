import { useUser } from "@/context/UserContext"
import { useState } from "react"

type List = {

}


export const ChatText = () => {

    const[listUser, setListUser] = useState([''])
    const[textUser, setTextUser] = useState('')
    const UserCtx = useUser()

    const handleEnterClick = () => {
        document.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                
            }})
            
    }

    return (
        <div className="flex justify-center items-center flex-col" >
            <div className="w-80 h-80 border">
                
                <ul className=" p-4 chat chat-start">
                    {listUser.map((i, index)=>(
                        <li key={index} className=" chat-bubble chat-bubble-primary">
                            {i}
                        </li>
                    ))}
                </ul>
                
                <div className=" p-4 chat chat-end">
                    <div className=" chat-bubble chat-bubble-info">bot fala</div>
                </div>

            </div>
            <div className="w-80  mt-5">
                <input onChange={(e)=>setTextUser(e.target.value)} type="text" placeholder={UserCtx?.user} className=" input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Bot" className="input input-bordered input-warning w-full max-w-xs" />
            </div>
        </div>
    )
}