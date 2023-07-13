import { ReactNode, createContext, useState } from "react";

type NameType = {
    name: string
    setName: (e: string) => void
}

export const YourName = createContext<NameType | null>(null) 

type props = {children: ReactNode}

export const NameProvider = ({children}: props) =>{

    const [name, setName] = useState('')

    return(
        <>
        <YourName.Provider value={{name , setName}}>
            {children}
        </YourName.Provider>
        </>
    )
}