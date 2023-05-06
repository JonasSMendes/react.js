import { useContext } from 'react'
import {Link} from 'react-router-dom'

import { Context } from '../contexts/context'

export const ShowData = () => {

const {name, Age } = useContext(Context)

    return(
        <div>
            Showdata criada de {name} que tem { Age} anos.
                <br />
            <Link to='/'>voltar para singup</Link>
        </div>
    )
}