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

    const handleAddItem = (e:any):any =>{
        let newItem: Item = {
            date: new Date(2023, 7,21),
            category: `${addCategory}`,
            title: `${addTitle}`,
            value: 250.50
        }

        e.preventDefault()
        onAdd(newItem);
    }

    return(
        <C.Container>
            <C.form>
            <input onChange={(e)=> setAddTitle(e.target.value)} type="text" placeholder='titulo' />
            <select value={addCategory} onChange={(e)=>setAddCategoty(e.target.value)}>
                <option value="">escolha</option>
                <option value="food">comida</option>
                <option value="rent">aluguel</option>
                <option value="salary">salario</option>
            </select>
            <button onClick={handleAddItem}>adicionar</button>
            </C.form>
        </C.Container>
    )    
}