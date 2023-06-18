import React, {useState} from 'react'
import * as C from './styled'
import { Item } from '../../types/item'

type Props = {
    i: Item
}

export default ({i}:Props) =>{

    const [isChecked, setIsChecked] = useState(i.done);

    return(
        <C.Container done={isChecked}>
            <input
             type='checkbox'
             checked={isChecked}
             onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{i.name}</label>
        </C.Container>
    )
}