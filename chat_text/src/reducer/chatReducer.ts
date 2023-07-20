import { Message } from "@/types/Message";


type AddPost = {
    type: "add";
    payload: {
        user: string,
        text: string
    }
}

type PostReducerAction =  AddPost 

export const chatReducers = (state:Message[] , action:PostReducerAction ) => {
    switch(action.type) {
        case 'add':
           return[...state, {
                id: state.length,
                user:action.payload.user,
                text: action.payload.text
           }];
        default:
            return state;
    }
}