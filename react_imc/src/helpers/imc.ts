export type Level ={
    title:string;
    color:string;
    icon: 'down' | 'up';
    imc: number[];
    yourimc?: number;

}

export const levels: Level[] = [
    {title: 'Magresa',color:'#96A3ab', icon:'down', imc: [0, 18.5]},
    {title: 'Normal', color:'#0Ead69', icon:'up', imc: [18.6, 24.9]},
    {title: 'Sobrepeso' ,color:'#e2b039' , icon:'down', imc: [25 , 30]},
    {title: 'Obesidade' ,color:'#c3423f', icon:'down', imc: [30.1 ,99]}
]   

export const CalcImc = (heigth:number, weigth:number)=>{
    const imc = weigth / (heigth * heigth);

    for(let i in levels){
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
            let levelscopy:Level = {...levels[i]}


            levelscopy.yourimc= parseFloat( imc.toFixed(2))
            return levelscopy
        }
    }

    return null
}