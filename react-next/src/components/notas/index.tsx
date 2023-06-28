
type props = {
    notas: number
}

export const Notas = ({notas}:props) =>{

    if(notas > 5) notas = 5
    if(notas < 0) notas = 0

    const notaInteira = Math.floor(notas)

    let faceEmoji = '😃'
    const rageEmoji = '🤬'

    switch(notaInteira){
        case 1:
            faceEmoji = '😞' 
        break;
        case 2:
            faceEmoji = '😕'
        break;
        case 3:
            faceEmoji = '🙁'
        break;
        case 4:
            faceEmoji = '🙂'
        break;
        case 5:
            faceEmoji = '😁'
        break;           
    }

    const emoji = faceEmoji.repeat(notaInteira) + rageEmoji.repeat(5 - notaInteira)

    return(
        <div className="">
            <h1>{notas.toFixed(1)}</h1>

            <p>{emoji}</p>    
        </div>
    )
}
