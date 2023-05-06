import { useContext } from 'react'
import {Link} from 'react-router-dom'

import { Context } from '../contexts/context'

export const SingUp = () => {

const {name} = useContext(Context)

    return(
        <div>
            sIngUp criada de {name}
            <br />
            <Link to='/exibir'> ir para showData</Link>
        </div>

    )
}