'use client'

import Link from 'next/link'
import * as S from './styled'
import {useForm, FormAction} from '../../contexts/FormContext'

import { Theme } from '@/components/theme'
import { useEffect } from 'react'


export default function FormStep2 (){

    const {state, dispatch} = useForm();

    useEffect(()=>{
        dispatch({
            type:FormAction.setCurrentStep,
            payload: 2, 
        })
    },[])

  
    return(
        <>
        <Theme>
             <S.Container>
             <p>Passo {}/3 </p>
                <h1>Vamos começar com seu nome</h1>
                <p>preencha o campo abaixo com o seu nome completo</p>

                <hr />

               
                
             
                <Link href='/FormStep3'>Proximo</Link>
            </S.Container>
        </Theme>
           
        </>
    )
}