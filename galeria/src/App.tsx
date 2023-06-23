import {useState,useEffect, FormEvent} from 'react';
import * as C from './Appstyled'
import * as Photo from './services/photos';
import { Photos } from './types/photos';

import { PhotoItem } from './components/photoItem';

function App() {

  const [uploading, setUploading] = useState(false)
  const [loading, setloading] = useState(false);
  const [Myphotos, setMYPhotos] = useState<Photos[]>([])
  

  useEffect(()=>{
    const getPhotos = async () =>{
      setloading(true)
      setMYPhotos(await Photo.getAll()) ;
      setloading(false)
    }
    getPhotos()
  },[])

  const handleFormSubmit = async (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;
    if(file && file.size > 0){
      setUploading(true)
        let result = await Photo.insert(file);
      setUploading(false)

      if(result instanceof Error){
        alert(`${result.name} ${result.message}`)
      }else{
        let newPhotoList = [...Myphotos];
        newPhotoList.push(result);
        setMYPhotos(newPhotoList);
      }
    }
  }

  return (
   <C.Container>
    <C.Area>
      <h1>Galeria de fotos</h1>


      {/*area de upload*/ }

      <C.UploadForm method="POST" onSubmit={handleFormSubmit} >
          <input type="file" name='image' />
          <input type="submit" value="Enviar" />
          {uploading &&
            'Enviando...'
          }
      </C.UploadForm>


      {/*Lista de fotos*/ }
    {loading &&
      <C.ScreamWarning>
        <div className='emoji'>✋</div>
        <div>Carregando...</div>
      </C.ScreamWarning>
    }

    {!loading && Myphotos.length > 0 &&
    
      <C.PhotoList>
        {Myphotos.map((item, index)=>(
          <div key={index}>
            <PhotoItem
            item={item}
            />
            </div>
        ))}
      </C.PhotoList>
    }

    {!loading && Myphotos.length === 0 &&
       <C.ScreamWarning>
       <div className='emoji'>😔</div>
       <div>Não a fotos cadastradas...</div>
     </C.ScreamWarning>
    }
    </C.Area>
   </C.Container>
    
  );
}

export default App;
