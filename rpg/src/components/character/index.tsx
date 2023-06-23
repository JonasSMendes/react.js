import * as C from './styled'

type props= {
    x:number
    y:number
}

export const Character = ({x, y}:props) =>{

    const size = 30;

    return(
        <C.Container
            size={size}
            left={x * size}
            top={y * size}
        >
           
        </C.Container>
    )
}