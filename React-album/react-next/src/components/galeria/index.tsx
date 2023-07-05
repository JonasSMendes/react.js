import './styles.css'
import {Src} from '../../types/galeria'

type props = {
    url: Src
}

export const Galerias = ({ url}: props) =>{

    return(
        <div>
            <div >
                <img src={url.image} alt="" />
            </div>
        </div>
    )
}