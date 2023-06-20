import * as C from './styled'

type props = {
    title:string
    value:number
    color?: string
}

export const ResumeItem = ({title,value, color}:props) =>{
    return(
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color} >R${value}</C.Info>
        </C.Container>
    )
}