import Cookies from 'js-cookie'

export const IsLogged = () =>{
    let token = Cookies.get('token')

    return (token) ? true : false;
}

export const doLogin = (token , rememberPass = false) =>{
    if(rememberPass){
        Cookies.set('token', token, {expires:999});
    }else{
        Cookies.set('token', token);
    }
}

export const dologout = () =>{
    Cookies.remove('token')
}