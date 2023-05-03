import { useEffect , useState, } from "react";
import { Api } from "../api";
import { PhotoList } from "../types/photosList";


export const PhotoFull =  () =>{

    const [fullScream, setFullScream] = useState<PhotoList>()
    const [loading , setloading] = useState(false)

    useEffect(()=>{
        loadingFull()
    },[])

    const loadingFull = async () =>{
        setloading(true)
        let json = await Api.getPhotoFullScream()
        setloading(false)
        setFullScream(json)
    }

    return(
        <div>
            <div>
                {loading &&
                 <div>carregando...</div>
                }
            </div>
            <div>
               
            </div>

        </div>
    )
}