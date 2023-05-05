import { useEffect , useState, } from "react";
import { Api } from "../api";
import { PhotoList } from "../types/photosList";
import { Link } from "react-router-dom"
import { PhotoLists } from "../components/photoList/photoList";



export const Galeria = () =>{

    const [photos, setPhotos] = useState<PhotoList[]>([])
    const[ loading ,setloading] = useState(false)

    useEffect(()=>{
        loadingPhotos()
    },[])

    const loadingPhotos = async () =>{
        setloading(true)
        let json = await Api.getAllAbums()
        setloading(false)
        setPhotos(json)
    }

    return(
        <>
        <div>
            {loading &&
                <div>carregando...</div>
            }
        </div>
        <div>
            {photos.map((item,index)=>(
                <Link to= '/photoFull'>
                    <PhotoLists data={item} key={index}/>
                </Link>
            ))}
        </div>
        </>
    )
}