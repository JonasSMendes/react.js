import { PostType } from "../types/TypePost";

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


type postsAction = AddAction | EditTextAction | toggleText | removeText

export const ListReducer = (posts: PostType[], action: postsAction) =>{
    //executar alguma ação
    switch(action.type){
        case 'add':
            return [...posts, {
                id: posts.length,
                text: action.payload.text,
                done: false
            }]
        case 'editText':
            return posts.map((i)=>{
                if(i.id === action.payload.id) i.title = action.payload.newText

                return i
        
            })
            /*
        case 'toggle':
           return posts.map(t => {

                if(t.id === action.payload.id) t.id = !t.id

                return t;
              })
              */
        case 'remove':  
           return posts.filter(t => t.id !== action.payload.id)
           
        default:
            return posts           
    }
    
    return posts;
}
