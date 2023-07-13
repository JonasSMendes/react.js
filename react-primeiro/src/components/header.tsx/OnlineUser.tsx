import { useContext } from "react"
import { CountContext } from "../../contexts/CountContext"

export const OnlineUser = () => {

    const CountCtx = useContext(CountContext);

    const handleClick = () => {
        CountCtx?.setOnlineCount(CountCtx.onlineCount + 1)
    }

    return(
        <>
       <p >online:{CountCtx?.onlineCount}</p>
       <button onClick={handleClick}>+</button>
       </>
    )
}