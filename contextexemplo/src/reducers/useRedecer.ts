
import { reducerActionType } from "../types/ReducerActionType"

 export type Usertype = {
    name: string
    age:number
    city: string
}

export const userInitialState: Usertype = {
    name: 'jonas' ,
    age: 90,
    city: 'recife'
}

export const userReducer = (state:Usertype, action:reducerActionType ) =>{
    switch(action.type){
        case 'CHANGE_NAME':
            return {...state, name: action.payload.name};
        break;    
        case 'CHANGE_AGE':
            return {...state, age: action.payload.age};
        break;   
        case 'CHANGE_CITY':
            return {...state, city: action.payload.city};
        break;

    }
    
    return state;
}