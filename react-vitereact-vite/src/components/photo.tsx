import { ReactNode } from "react"

type props = {
    url: string
    legend: string
    children: ReactNode
}

export const Photo = ({url, legend,children}:props) =>{

return (
    <div>
        <img src={url} alt="" />
        <p>{legend}</p>
    </div>
)

}
    
