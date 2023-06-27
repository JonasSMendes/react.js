const Page = () =>{

    const horas = new Date().getHours();
    const minutos = new Date().getMinutes();
    const segundos = new Date().getSeconds();

    return(
        <div className="container">

            <h1>{horas <= 9 ? '0'+horas : horas}:{ minutos <=9? '0'+minutos : minutos}</h1>

            {horas < 12 && horas > 0 && 
                <p> bom dia 😊☀️ </p>
            }
            {horas >= 12 && horas < 18 && 
                <p> boa tarde 😊🌤️ </p>
            }
            {horas >= 0 && horas >= 19 && 
                <p> boa noite 😊🌜 </p>
            } 
        </div>
    )
}

export default Page;