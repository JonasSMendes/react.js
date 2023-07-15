'use client'

import { Theme, useTheme } from "@/contexts/ThemeContext"
import { ReactNode, useContext } from "react"

type props = {
    children: ReactNode
}

export const Container = ({children}: props) => {

    const ThemeCtx = useTheme()

    return(
        <div
            className={`w-full h-screen
                ${ThemeCtx?.theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black' }
            `}
        >
            <div className="container mx-outo">
            {ThemeCtx?.theme}
            {children}
            </div>
        </div>
    )
}