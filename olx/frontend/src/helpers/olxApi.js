import Cookies from "js-cookie";
import qs from 'qs'


const BASEAPI = 'http://localhost:3001';

const ApiFetchPost = async (endPoint, body) => {

    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token
        }
    }

    const res = await fetch(BASEAPI+endPoint,{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Conteny-Type': 'application/json'
        },
        body:JSON.stringify(body)
    });
    const json = await res.json()

    if(json.notallowed){
        window.location.href = '/singin';
        return;
    }

    return json;
}




const ApiFetchGet = async (endPoint, body) => {

    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token
        }
    }

    const res = await fetch(`${BASEAPI+endPoint}?${qs.stringify(body)}`);
    const json = await res.json()

    if(json.notallowed){
        window.location.href = '/singin';
        return;
    }

    return json;
}


const OlxApi = {
    login:async (email ,password) =>{
        const json = await ApiFetchPost(
            '/user/signin',
            {email,password}
        );


        return{error: 'funcionalidade incompleta'};
    },

    getStates:async () =>{
        const json  = await ApiFetchGet(
            '/states'
        );
        return json.states;
    }
    
}

export default ()=>OlxApi;

//http://alunos.b7web.com.br:501