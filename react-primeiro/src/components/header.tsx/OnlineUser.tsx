import { useContext } from "react"
import { CountContext } from "../../contexts/CountContext"

export const OnlineUser = () => {

    const Count = useContext(CountContext);


    return(
       <p>online: {Count}</p>
    )
}