import { Notas } from "@/components/notas";
import { Tabela } from "@/components/tabela de notas/tabela";
import { Testes } from "@/components/testes/testes";
import { Galerias } from "@/components/galeria";

import { Galeria } from "@/data/galeria";


const Page = () =>{
    const horas = new Date().getHours();
    const minutos = new Date().getMinutes();


    const handleOpenphoto = (id: number) =>{
        
    }

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
             notas={3.2}
            />
            </div>

            <div className="tabela">
                <Tabela />
            </div>

            <div className="testes">
                <Testes/>
            </div>

            <div className="galeria">
                <h1>fotos de planetas</h1>
                <div className="img-grid"> 
                {Galeria.map(i=>(
                    <Galerias
                    url={i}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Page;