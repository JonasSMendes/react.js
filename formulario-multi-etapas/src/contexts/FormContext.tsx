
import { createContext , useReducer, useContext, Children, ReactNode } from "react";

type State = {
    currentStep: number,
    name:string,
    level: 0 | 1,
    email: string,
    github: string
}
type action = {
    type: FormAction,
    payload: any
}
type contextType = {
    state: State,
    dispatch: (action: action) => void;
}
type FormProviderProps = {
    children: ReactNode
}

const initialData : State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}


//context

const FormContext = createContext<contextType | undefined>(undefined);

//reducer
export enum FormAction{
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub,
}

const Formreducer = (state: State, action: action)=>{
    switch(action.type){
        case FormAction.setCurrentStep:
            return{...state, currentStep : action.payload};
        case FormAction.setName:
            return{...state, name: action.payload};
        case FormAction.setLevel:
            return{...state, level: action.payload};
        case FormAction.setEmail:
            return{...state, email: action.payload};
        case FormAction.setGithub:
            return{...state, github: action.payload};    
        default:
            return state;
    }
}

// provider

export const FormProvider = ({children}:FormProviderProps) =>{

    const [state, dispatch] = useReducer(Formreducer, initialData)
    const value = {state , dispatch}

    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}


//context hook

export const useForm = () =>{
    const context = useContext(FormContext);
    if(context === undefined){
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }

    return context;
}