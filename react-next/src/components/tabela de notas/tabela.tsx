import { students } from "@/data/students"
import './tabela.css'

export const Tabela =()=>{
    
    return(
        <div>
            <table border={1} color="#fff">
                <tr>
                <td>nome</td>
                <td>status</td>
                <td>grade 1</td>
                <td>garde 2</td>
                <td>final grade</td>
                </tr>
            {students.map((item,index)=>(
                <tr key={index}>
                    <td>
                        <div className="avatar-name">
                            <img src={item.avatar}/>
                            {item.name}
                        </div>
                        <div className="email">
                            {item.email}
                        </div>  
                    </td>
                    <td>
                        {item.active &&
                        <div style={{backgroundColor: 'green'}}>
                            active
                        </div>
                        }
                         {!item.active &&
                        <div style={{backgroundColor: 'red'}}>
                            inactive
                        </div>
                        }
                    </td>
                    <td>{item.grade1}</td>
                    <td>{item.grade2}</td>
                    <td>{((item.grade1+ item.grade2) /2).toFixed(1)}</td>
                </tr>
            ))}
            </table>
        </div>
    )
} 