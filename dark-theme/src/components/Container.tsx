import { useTheme } from "@/contexts/ThemeContext"
import { ReactNode} from "react"

type props = {
    children: ReactNode
}

export const Container = ({children}: props) => {

    const ThemeCtx = useTheme();

    return(
        <div
            className={`w-full h-screen
            bg-white text-black
            dark:bg-black dark:text-white
            `}
        >
            <div 
                className="container mx-auto"
            >
                tema:{ThemeCtx?.theme}
                {children}
            </div>
            
        </div>
    )
}