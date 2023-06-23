import { Photos } from "../types/photos"
import {storage} from '../libs/firebese'
import {ref, listAll, getDownloadURL, uploadBytes} from 'firebase/storage'
import { v4 as creatId } from "uuid"



export const getAll = async () => {
    let list: Photos[] = []

    const imageFolder = ref(storage, "images");
    const photoList = await listAll(imageFolder);

    for(let i in photoList.items){
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name:photoList.items[i].name,
            url:photoUrl
        })
    }

    return list;
}

export const insert = async (file: File) => {
    if( ['image/jpeg', 'image/png', 'image.jpg',].includes(file.type) ){
        
        let randomName = creatId();
        let newfile = ref(storage,`images/${randomName}`)
        
        let upLoad = await uploadBytes(newfile, file);
        let photoUrl = await getDownloadURL(upLoad.ref);
        
        return{
            name:upLoad.ref.name,
            url: photoUrl
        } as Photos;


    }else{
        return new Error('tipo do arquivo não permitido')
    }
}