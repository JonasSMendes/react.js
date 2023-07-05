'use client'

import * as S from './styled'
import Link from 'next/link'
import { Theme } from '@/components/theme'

export default function FormStep3 (){
    return(
        <>
        <Theme>
            <S.Container>
                passo 3


                
                <Link href='/'>Proximo</Link>
            </S.Container>
        </Theme>
        </>
    )
}