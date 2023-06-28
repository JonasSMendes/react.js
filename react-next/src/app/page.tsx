import { Notas } from "@/components/notas";
import { Tabela } from "@/components/tabela de notas/tabela";

const Page = () =>{

    const horas = new Date().getHours();
    const minutos = new Date().getMinutes();

    return(
        <div className="container">



            <div className="horas">
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



            <div className="notas-emoji">
            <Notas
             notas={5}
            />
            </div>

            <div className="tabela">
                <Tabela />
            </div>
        </div>
    )
}

export default Page;