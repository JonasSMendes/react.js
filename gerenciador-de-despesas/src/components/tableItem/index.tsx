import * as C from './styled'
import { Item } from '../../types/Item'
import { formatDate } from '../../helpers/dateFilter'
import { categoriesList } from '../../data/categories'

type props ={
    item:Item
}

export const TableItem = ({item}:props) =>{
    return(
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.TableCategorys color={categoriesList[item.category].color}>
                    {categoriesList[item.category].title}
                </C.TableCategorys>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categoriesList[item.category].expense? 'red' : 'green'}>
                R${item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    )
}