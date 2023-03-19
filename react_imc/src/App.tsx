import { useState } from 'react'
import powerimg from './assets/img/powered.png'

const App =()=>{

const [heightfield, setheightfield] = useState<number>(0)
const [weigthfield, setweigthfield] = useState<number>(0)


const handleCalculateButton = ()=>{
  if(heightfield && weigthfield){
    
    

  }else{
    alert('digite todos os campos')
  }
}

  return(
    <div className="">
        <header>
          <div className="max-w-screen-lg mt-10 mr-20 ml-20 ">
              <img className='' src={powerimg} alt="" width={150}/>
          </div>
        </header>
        <div className='flex max-w-screen-lg mt-10 mr-20 ml-20'>
          <div className='flex-1  mr-20'> {/*left-side*/}

              <h1>calcule o seu IMC.</h1>
              <br />
              <p className='mb-3 '>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
              
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5'
                type="number"
                placeholder='digite a sua altura. Ex: 1.5 (em metros)' 
                value={heightfield > 0 ?  heightfield : ''}
                onChange={e => setheightfield(parseFloat(e.target.value))}
              />

              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  mt-5'
                type="number"
                placeholder='digite a sua peso. Ex: 1.5 (em kg)' 
                value={weigthfield > 0 ?  weigthfield : ''}
                onChange={e => setweigthfield(parseFloat(e.target.value))}
              />

              <button onClick={handleCalculateButton} className='bg-blue-500 p-2 rounded mt-3' type="submit">Calcular</button>
          </div>
          <div className='flex-1  ml-20'> {/*rigt-side*/}
            .....
          </div>
        </div>
    </div>
  )
}

export default App
