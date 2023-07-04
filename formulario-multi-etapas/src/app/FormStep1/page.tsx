import Link from 'next/link'
import * as S from './styled'

import { Theme } from '@/components/theme'

export default function FormStep1 (){

    return(
        <>
        <Theme>
             <S.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>preencha o campo abaixo com o seu nome completo</p>

                <hr />

                <label htmlFor="">
                    seu nome completo
                    <input 
                    type="text"
                    autoFocus
                    />
                </label>

                <Link href='/FormStep2'>Proximo</Link>

            </S.Container>
        </Theme>
           
        </>
    )
}