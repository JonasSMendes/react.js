import * as C from './styled'
import { Photos } from '../../types/photos'

type props={
    item:Photos
}

export const PhotoItem = ({item}:props) =>{
    return(
        <C.Container>
            <img src={item.url}/>
            {item.name}
        </C.Container>
    )
}