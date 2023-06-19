import * as C from './styled'
import { Item } from '../../types/Item'
import { TableItem } from '../tableItem'


type props = {
    lis:Item[]
}

export const TableArea = ({lis}:props) =>{
    return(
        <C.table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {lis.map((item,index)=>(
                  <TableItem
                   key={index}
                   item={item}
                   />
                ))}
            </tbody>
        </C.table>
    )
} 