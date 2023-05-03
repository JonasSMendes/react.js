import { Album } from "../../types/albums"
import * as C from './style'

type Props ={
    data : Album
}

export const AlbumsList = ({data}:Props)=>{
    return(
        <C.links className="font-bold" >{data.title}</C.links>    
    )
}