import * as C from './styled'
import { Item } from '../../types/Item'

type props ={
    item:Item
}

export const TableItem = ({item}:props) =>{
    return(
        <C.TableLine>
            <C.TableColumn>...</C.TableColumn>
            <C.TableColumn>{item.category}</C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>R${item.value}</C.TableColumn>
        </C.TableLine>
    )
}