import { useState } from 'react'
import powerimg from './assets/img/powered.png'
import { levels } from './helpers/imc'
import { CalcImc } from './helpers/imc'
import { Griditem } from './components/griditems'
import leftarrow from './assets/img/leftarrow.png'

import { Level } from './helpers/imc';

const App =()=>{

const [heightfield, setheightfield] = useState<number>(0)
const [weigthfield, setweigthfield] = useState<number>(0)
const [showItem, setshowIntem] = useState< Level | null>(null)

const handleCalculateButton = ()=>{
  if(heightfield && weigthfield){

    setshowIntem(CalcImc(heightfield, weigthfield));

  }else{
    alert('digite todos os campos')
  }
}

const handlebackbutton = ()=>{
  setshowIntem(null);
  setheightfield(0);
  setweigthfield(0);
}

  return(
    <div className="">
        <header>
          <div className="max-w-screen-lg mt-10 mr-20 ml-20 ">
              <img className='' src={powerimg} alt="" width={150}/>
          </div>
        </header>
        <div className='flex max-w-screen-lg mt-10 mr-20 ml-20 '>
          <div className=' flex-1  mr-20'> {/*left-side*/}

              <h1 className='text-zinc-800'>calcule o seu IMC.</h1>
              <br />
              <p className='text-zinc-500	 mb-3 '>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
              
              <input className='outline-0 border-t-0 border-l-0 border-r-0  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5'
                type="number"
                placeholder='digite a sua altura. Ex: 1.5 (em metros)' 
                value={heightfield > 0 ?  heightfield : ''}
                onChange={e => setheightfield(parseFloat(e.target.value))}
                disabled={showItem ? true : false}
              />

              <input className=' outline-0 border-t-0 border-l-0 border-r-0  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  mt-5'
                type="number"
                placeholder='digite a sua peso. Ex: 1.5 (em kg)' 
                value={weigthfield > 0 ?  weigthfield : ''}
                onChange={e => setweigthfield(parseFloat(e.target.value))}
                disabled={showItem ? true : false}
              />

              <button onClick={handleCalculateButton} disabled={showItem ? true : false} className='hover:bg-blue-700 transition-all bg-blue-500 p-2 rounded mt-7 w-full '    type="submit">Calcular</button>
          </div>
          <div className='flex-1 flex  ml-20'> {/*rigt-side*/}
              {!showItem && 
              <div className='flex-1 grid grid-cols-2 gap-2'>
                  {levels.map((item, key)=>(
                    <Griditem key={key} item={item}/>
                  ))}
              </div>
                  }
                  {showItem &&
                    <div className='flex-1 flex'>
                        <div onClick={handlebackbutton} className=' absolute p-3 bg-blue-300 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer  -ml-5 mt-[145px] transition hover:bg-blue-500'>
                            <img   src={leftarrow} alt="" />
                        </div>
                        <Griditem item={showItem}/>
                    </div>
                  }
          </div>
        </div>
    </div>
  )
}

export default App
