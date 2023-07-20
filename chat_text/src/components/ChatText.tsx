import { useUser } from "@/context/UserContext"
import { useChat } from "@/context/textContext"
import { KeyboardEvent, useState } from "react"


export const ChatText = () => {

    const [text, setText] = useState('')

    const UserCtx = useUser()
    const chatCtx = useChat()


    const handleEventEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code.toLowerCase() === 'enter') {
                
            setText('')
        }
    }

    return (
        <div className="flex justify-center items-center flex-col" >
            <div className="w-80 h-80 border overflow-y-scroll">

                {chatCtx?.chat.map((i)=>(
                    <div>
                        {i.text}
                    </div>
                ))}
             
            </div>
            <div className="w-80  mt-5">
                <input
                    onKeyUp={handleEventEnter}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text" placeholder={`${UserCtx?.user} digite sua menssagem`}
                    className=" input input-bordered input-primary w-full max-w-xs"
                />
                <input
                    type="text"
                    placeholder="Bot digite sua mansagem"
                    className=" mt-2 input input-bordered input-warning w-full max-w-xs"
                />

            </div>
        </div>
    )
}