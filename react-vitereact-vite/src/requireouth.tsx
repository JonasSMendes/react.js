import { Navigate } from "react-router-dom"


type Props = {
    children: JSX.Element
}

export const RequireOuth = ({ children }: Props) =>{
    const isAuth = false;

    if(isAuth){
        return children
    }else{
        
        return <Navigate to='/login' />
    }

    
}