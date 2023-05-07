import { reducerActionType } from "../types/ReducerActionType"

 export type Themetype = {
    status: 'dark' | 'light'
}

export const ThemeInitialState: Themetype = {
   status: 'light'
}

export const themeReducer = (state:Themetype, action:reducerActionType ) =>{
    switch(action.type){
        case 'CHANGE_THEME':
            return {...state, status: action.payload.status};
        break;    
    }
    
    return state;
}