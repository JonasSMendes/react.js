/*
import { Item } from "../App"


type AddAction = {
    type: 'add'
    payload: {
        text: string
    }
}
type EditTextAction = {
    type: 'editText';
    payload: {
        id: number,
        newText: string
    }
}
type toggleText = {
    type: 'toggle',
    payload: {
        id: number
    }
}

type removeText = {
    type: 'remove',
    payload: {
        id: number
    }
}


type ListAction = AddAction | EditTextAction | toggleText | removeText

export const ListReducer = (list: Item[], action: ListAction) =>{
    //executar alguma ação
    switch(action.type){
        case 'add':
            return [...list, {
                id: list.length,
                text: action.payload.text,
                done: false
            }]
        case 'editText':
            return list.map((i)=>{
                if(i.id === action.payload.id) i.text = action.payload.newText

                return i
            })
        case 'toggle':
           return list.map(t => {

                if(t.id === action.payload.id) t.done = !t.done

                return t;
              })
        case 'remove':  
           return list.filter(t => t.id !== action.payload.id)
           
        default:
            return list           
    }
    
    return list
}
*/