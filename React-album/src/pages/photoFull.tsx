import { useEffect , useState, } from "react";
import { Api } from "../api";
import { PhotoList } from "../types/photosList";
import { FullScream } from "../components/fullScream/FullScream";


export const PhotoFull =  () =>{

    const [fullScream, setFullScream] = useState<PhotoList[]>([])
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
                {
                fullScream.map((item, index)=>(
                    <FullScream data={item} key={index}/>
                ))}
            </div>

        </div>
    )
}