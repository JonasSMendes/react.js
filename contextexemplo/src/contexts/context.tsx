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

    import { PropsWithChildren, createContext, useReducer } from "react";

    import { Usertype, userInitialState, userReducer } from "../reducers/useRedecer";
    import { reducerActionType } from "../types/ReducerActionType";

    import { Themetype, ThemeInitialState, themeReducer } from "../reducers/themeReducer";

    type contextType = {
        state: initialStateType,
        dispatch: React.Dispatch<any>;
    }

    type initialStateType = {
        user: Usertype
        theme: Themetype
    }

    const initialState = {
        user: userInitialState,
        theme:ThemeInitialState
    }

    export const Context = createContext<contextType>({
        state: initialState,
        dispatch: () => null
    })

    const mainReducer = (state:initialStateType,action:reducerActionType) => ({
        user: userReducer(state.user, action),
        theme:themeReducer(state.theme, action)
    })

export const ContextProvider = ({children}:PropsWithChildren) => {
        
    const [state, dispatch] = useReducer(mainReducer, initialState)
        
    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
} 