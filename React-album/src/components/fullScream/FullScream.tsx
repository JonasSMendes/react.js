import { PhotoList } from "../../types/photosList"
//import * as C from './styled'

type Props = {
    data: PhotoList
}



export const FullScream =({data}:Props)=> {
    return(
        <div>
            <h4>tiutlo da foto {data.title}</h4>
            <img src={data.url} alt="" />
        </div>
    )
}