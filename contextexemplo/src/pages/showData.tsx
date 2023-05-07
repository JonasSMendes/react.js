import { useContext } from 'react'
import {Link} from 'react-router-dom'

import { Context } from '../contexts/context'

export const ShowData = () => {

const {state, dispatch} = useContext(Context)

    return(
        <div>
           <h3>Tela ShowDAta</h3>
            {state.user.name && 
                <>
                meu nome é: {state.user.name} <br />
                e tenho : {state.user.age} <br />
                e atualmente eu vivo em: {state.user.city}
                </>
            }
            {!state.user.name && 'não ha informaçôes.'}
                <br />
            <Link to='/'>voltar para singup</Link>
        </div>
    )
}