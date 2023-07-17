import { useTheme } from "@/contexts/ThemeContext"

type Props = {
    label: string
    Click: () => void
}

export const Button = ({label, Click}:Props) => {

    const ThemeCtx = useTheme();

    return(
    <button
        className="border px-4 py-3 rounded-md hover:bg-gray-400
         bg-white text-black
         dark:bg-black dark:text-white"
        onClick={Click}
    >
        {label}
    </button>
    )
}