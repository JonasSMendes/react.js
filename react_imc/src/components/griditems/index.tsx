import { Level } from "../../helpers/imc"
import upImage from "../../assets/img/up.png"
import downImage from "../../assets/img/down.png"

type Props = {
    item: Level;
}

export const Griditem = ({ item }: Props)=>{
  
 return(
    <div className="flex-1 rounded flex justify-center items-center flex-col p-10 " style={{backgroundColor: item.color}}>
        <div className="rounded-full p-3 bg-neutral-500  flex justify-center items-center">
            {item.icon === 'up' && <img src={upImage} alt="" width={30}/>}
            {item.icon === 'down' && <img src={downImage} alt='' width={30}/>}
        </div>
        <div className="text-lg font-bold mt-2 text-white w-30">
            {item.title}
        </div>
        {item.yourimc && 
        <div className="text-sm mt-5 mb-25 ">seu imc é de {item.yourimc}kg/m2</div>}

        <div className="text-xs text-gray-200 text-center w-80 ">
            <>
                imc está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </>
        </div>
    </div>
 )
}