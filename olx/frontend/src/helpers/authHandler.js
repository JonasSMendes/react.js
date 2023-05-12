import Cookies from 'js-cookie'

export const IsLogged = () =>{
    let token = Cookies.get('token')

    return (token) ? true : false;
}