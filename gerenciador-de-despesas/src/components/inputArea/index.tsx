import * as C from './styled'
import { Item } from '../../types/Item'
import { useState } from 'react'
import { categoriesList } from '../../data/categories'

type props={
    onAdd: (item: Item) => void
}



export const InputArea = ({onAdd}:props) =>{

    const [addTitle, setAddTitle] = useState('')
    const [addDate, setAdddate] = useState('00/00/0000')
    const [addCategory, setAddCategoty] = useState('')
    const [addValue, setAddValue] = useState(0)

    const handleAddItem = () =>{
        let newItem: Item = {
            date: new Date(2023, 7, 27),
            category: `${addCategory}`,
            title: `${addTitle}`,
            value: 250.50
        }

        onAdd(newItem);
    }

    return(
        <C.Container>
            <C.form>
            <input type="date" />
            <select value={addCategory} onChange={(e)=>setAddCategoty(e.target.value)}>
                <option value={''}>selecione uma opção</option>
                <>
                
                </>
            </select>
            <input onChange={(e)=> setAddTitle(e.target.value)} type="text" placeholder='titulo' />
            
            <button onClick={handleAddItem}>adicionar</button>
            </C.form>
        </C.Container>
    )    
}