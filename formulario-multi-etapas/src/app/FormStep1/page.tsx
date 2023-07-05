import Link from 'next/link'
import * as S from './styled'
import {useForm, FormAction} from '../../contexts/FormContext'

import { Theme } from '@/components/theme'
import { ChangeEvent, useEffect } from 'react';

export default function FormStep1 (){

    const {state, dispatch} = useForm();

    useEffect(()=>{
        dispatch({
            type:FormAction.setCurrentStep,
            payload: 1
        })
    },[])


    const handleNameChange = (e : ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setName,
            payload: e.target.value
        })
    }

    return(
        <>
        <Theme>
             <S.Container>
                <p>Passo {state.currentStep}/3 </p>
                <h1>Vamos começar com seu nome</h1>
                <p>preencha o campo abaixo com o seu nome completo</p>

                <hr />

                <label htmlFor="">
                    seu nome completo
                    <input 
                    type="text"
                    autoFocus
                    value={state.name}
                    onChange={handleNameChange}
                    required
                    />
                </label>

                {state.name === '' &&
                    <span>Digite seu nome...</span>
                }

                { state.name !== '' && state.name.length <= 3 &&
                    <span>tem que haver no minimo 4 letras</span>
                }

                {state.name !== '' &&   state.name.length >= 4 &&
                <Link href='/FormStep2'>Proximo</Link>
                }
            </S.Container>
        </Theme>
           
        </>
    )
}