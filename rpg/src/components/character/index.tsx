import * as C from './styled'
import { CharacterSides } from '../../types/Chactersides';

type props= {
    x:number
    y:number
    side:CharacterSides
}
export const Character = ({x, y, side}:props) =>{
    const size = 30;

    const sides = {
        down: 0,
        left: -30,
        rigth: -60,
        up: -90
    }

    return(
        <C.Container
            size={size}
            left={x * size}
            top={y * size}
            sidePos={sides[side]?? 0}
        >
           
        </C.Container>
    )
}