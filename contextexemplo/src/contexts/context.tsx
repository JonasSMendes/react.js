/*
import React, { createContext } from "react";

type ContextType = {
    name : string
    Age: number
}

const InitialState = {
    name: 'pedro',
    Age: 90
}

export const  Context = createContext<ContextType>(InitialState);

export const ContextProvider = ({children}: React.PropsWithChildren) =>{
    return(
        <Context.Provider value={InitialState}>
            {children}
        </Context.Provider>
    )
}
*/

    import { createContext, useReducer } from "react";

    import { Usertype, userInitialState, userReducer } from "../reducers/useRedecer";
import { reducerActionType } from "../types/ReducerActionType";

    type contextType = {
        state: initialStateType,
        dispatch: React.Dispatch<any>;
    }

    type initialStateType = {
        user: Usertype
    }

    const initialState = {
        user: userInitialState,
    }

    export const Context = createContext<contextType>({
        state: initialState,
        dispatch: () => null
    })

    const mainReducer = ({user}:initialStateType,action:reducerActionType) => {
        user: userReducer(user, action)
    }