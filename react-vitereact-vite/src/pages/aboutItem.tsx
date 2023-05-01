import {useParams,useNavigate} from 'react-router-dom'

export const AboutItem = () =>{

    const parans = useParams();
    const navigate = useNavigate();

    const handleBackButton = () =>{
        navigate(-1);
    }
    const handleHomeButton = () =>{
        navigate('/')
    }

    return(
        <div>
            Pagina sobre {parans.slug?.toLocaleUpperCase()}
            <hr />
            <br />
            <button onClick={handleBackButton} >voltar</button>
            <br />
            <button onClick={handleHomeButton}>home</button>
        </div>
    )
}