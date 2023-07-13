import { ReactNode, createContext, useState } from "react"


type CountContextType = {
    onlineCount: number;
    setOnlineCount: (n : number ) => void
}

export const CountContext = createContext<CountContextType | null>(null);


type props = {
    children: ReactNode
}
export const CountProvider = ({children}: props) => {

    const [onlineCount, setOnlineCount] = useState(10);

    return(
        <>
            <CountContext.Provider value={{onlineCount,setOnlineCount}}>
                {children}
            </CountContext.Provider>
        </>
    )
}