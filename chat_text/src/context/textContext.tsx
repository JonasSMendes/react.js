import { ReactNode, createContext, useContext, useReducer } from "react"
import { Message } from "@/types/Message";
import { chatReducers } from "@/reducer/chatReducer";
import { test } from "node:test";


type ChatMensagem = {
    chat: Message[],
    addMessage:(user:string, text: string) => void
}

export const ChatContext = createContext<ChatMensagem | null>(null);

export const chatProvider = ({children}: {children: ReactNode}) =>{

    const [chat, dispatch] = useReducer(chatReducers, []);

    const addMessage = (user:string, text:string) => {
        dispatch(
            {
                 type: 'add',
                payload: {
                    text: text,
                    user: user
                }
            }
        )
    }
    return(
        <ChatContext.Provider value={{chat, addMessage}}>
            {children}
        </ChatContext.Provider>
    )
}

export const useChat = () => useContext(ChatContext);