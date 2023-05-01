import { Link,useSearchParams } from 'react-router-dom'

export const About = () =>{

    const [SearchParams,setSearchParams] = useSearchParams()

    const setOrder = (order: string) =>{
        SearchParams.set('order',order);
        setSearchParams(SearchParams);
    }

    return(
        <div>
            filtro: {SearchParams.get('filter')} <br />
            ordem: {SearchParams.get('order')}
                <br />

                <button onClick={()=> setOrder('Asc')}>Asc</button> 
                <br />
                <button  onClick={()=> setOrder('desc')}>desc</button>
                <br />
            Pagina sobre

            <ul>
                <li><Link to={'/sobre/pedro'}>pedro</Link></li>
                <li><Link to={'/sobre/jonas'}>jonas</Link></li>
            </ul>
        </div>
    )
}