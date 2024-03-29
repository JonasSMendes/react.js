import  axios  from "axios";

const ALBUM = 'https://jsonplaceholder.typicode.com/albums'
const galeriaAlbums = 'https://jsonplaceholder.typicode.com/albuns/1/photos'
//const fullPhoto = 'https://jsonplaceholder.typicode.com/photos/1'


export const Api = {
    getalbuns: async () => {
        let response = await axios.get(`${ALBUM}`);
        return response.data
    },
    getAllAbums : async () => {
        let response = await axios.get(`${galeriaAlbums}`)
        return response.data
    },
    getPhotoFullScream: async () =>{
        let response = await axios.get(`${galeriaAlbums}`)
        return response.data
    }

}