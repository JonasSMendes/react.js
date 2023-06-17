import React,{useState, KeyboardEvent} from 'react'
import * as C from './styled'


type Props = {
    onEnter: (textName:string) => void
}

export default ({onEnter}:Props) =>{

    const [inputText, setImputText] = useState('');

    const handleKeyUp = (e:KeyboardEvent) =>{
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setImputText('');
        }
    }

    return(
        <C.Container>
            <div className='image'>➕</div>
            <input
                type='text'
                placeholder='adicione sua tarefa'
                value={inputText}
                onChange={e=>setImputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    )
}