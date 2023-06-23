import * as C from './app.styled'

//compoenents
import { Character } from './components/character';
/////////////

export const App = () =>{
  return(
    <C.Container>
      <C.Map>
          <Character x={6} y={4}/>
      </C.Map>
    </C.Container>
  )
}

export default App;