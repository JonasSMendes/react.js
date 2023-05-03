import { Api } from "../api";
import { AlbumsList } from "../components/albums/albumsList";
import { Album } from "../types/albums";
import { useEffect , useState, } from "react";
import { Link } from "react-router-dom"




export const Home = () =>{

    const[albuns, setalbuns] = useState<Album[]>([])
    const[ loading ,setloading] = useState(false)

     
    useEffect(()=>{
    loadalbums()
     },[])

    const loadalbums = async ()=>{
        setloading(true)
        let json = await Api.getalbuns();
        setloading(false)
        setalbuns(json)
      }
    return(
        <>
        <div>
        {loading &&
          <div>carregando...</div>
        }
        </div>
        
        <div>
        {albuns.map((item, index)=>(
            <Link to='/Galeria'><AlbumsList data={item} key={index}/></Link>
        ))}      
      </div>
      </>
    )
}