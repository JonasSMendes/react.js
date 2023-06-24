import * as C from './app.styled'
import {useEffect} from 'react'
//compoenents
import { Character } from './components/character';
/////////////
//hooks
import { useCharecter } from './hooks/useCharacter';
////////////
export const App = () =>{

  const char = useCharecter();

  useEffect(()=>{
    window.addEventListener('keydown',handleKeyDown)
  },[])

  const handleKeyDown = (e: KeyboardEvent) =>{

    switch(e.code){
      case'KeyS':
      case'ArrowDown':
          char.moveDown();
      break;
      case'KeyW':
      case'ArrowUp':
        char.moveUp();
      break;

      case'KeyA':
      case'ArrowLeft':
        char.moveLeft();
      break;

      case'KeyD':
      case'ArrowRight':
        char.moveRight();
      break;
    }
  }

  
  return(
    <C.Container>
      <C.Map>
          <Character x={char.x} y={char.y} side={char.side}/>
      </C.Map>
    </C.Container>
  )
}

export default App;