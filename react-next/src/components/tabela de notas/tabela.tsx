import { students } from "@/data/students"
import './tabela.css'

export const Tabela =()=>{
    
    return(
        <div>

            {students.map((item,index)=>(
                <div></div>
            ))}
        </div>
    )
} 