import  Axios  from "axios"

const Requisicao = 'https://jsonplaceholder.typicode.com'

export const  Api = {
    getAllPost: async () =>{
        let response  = await Axios.get(`${Requisicao}/posts`)
        return response.data
/*
    let response = await fetch(`${Requisicao}/posts`)
    let json = await response.json()
        return json
*/  
    },

    addNewPost: async (title:string,body:string,userId:number) =>{

        let response = await Axios.post(`${Requisicao}/posts`,{
            title,body,userId
        });
        return response.data;
    /*
      let response = await fetch(`${Requisicao}/posts`,{
      method: 'POST',
      body: JSON.stringify({title,body,userId}),
      headers: {
        'Content-type':'application/json'
      }
      });
      let json = await response.json()

      return json
    }
    */
    }
    
    }