import { PhotoList } from "../../types/photosList";
import * as C from './style'

type Props = {
    data:PhotoList
}


export const PhotoLists = ({data}:Props) =>{
    return(
        <C.Grid>
            <C.image>
                <C.titulo></C.titulo>
                <C.img src={data.thumbnailUrl} alt=""/>
                foto numero : {data.id}
            </C.image>     
        </C.Grid>
    )
}
