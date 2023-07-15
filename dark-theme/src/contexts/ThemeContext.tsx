'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { ThemeType } from "@/types/themeType";

const STOREG_KEY = 'themeContextKey'

type ThemeDarkMode = {
    theme: string;
    setTheme:(newTheme: string) => void
    
}

export const Theme = createContext<ThemeDarkMode | null>(null)


type props = { children: ReactNode} 

export const ThemeProvider = ({children}: props) =>{

    const[theme, setTheme] = useState(
        localStorage.getItem(STOREG_KEY) || 'ligth'
    );

    useEffect(()=>{
        localStorage.setItem(STOREG_KEY, theme)
    },[theme])

return(
    <Theme.Provider value={{theme, setTheme}}>
        {children}
    </Theme.Provider>
)
}

export const useTheme = () => useContext(Theme)