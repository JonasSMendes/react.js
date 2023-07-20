import { ReactNode, createContext, useContext, useState } from "react";


//const STOREGE_KEY = 'useProviderLocalStorege'

type useContext = {
    user: string
    setUser: (newUser: string)=>void
}

export const UserContext = createContext<useContext | null>(null);


export const UserProvider = ({children}: {children : ReactNode}) => {
    
    const [user, setUser] = useState('')

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);