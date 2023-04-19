type props = {
    data:{
        name:string
        idade:number
    }
}

export const Pessoa = ({data}:props)=>{
    return(
        <li>
            {data.name}--{data.idade}
        </li>
    )
}