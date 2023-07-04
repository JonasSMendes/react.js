import { ReactNode } from 'react'
import * as S from './styled'

import { Header } from '../header'


type props = {
    children: ReactNode
}

export const Theme = ({children}: props) =>{
    return(
        <S.Container>
            <S.Area>
                <Header/>

                <S.Steps>
                    <S.Sidebar>
                            ....
                    </S.Sidebar>
                    <S.Page>
                        {children}
                    </S.Page>
                </S.Steps>
            </S.Area>
        </S.Container>
    )
}