import * as C from "./app.styles"
import logoImg from "./assets/devmemory_logo.png"
import { InfoItem } from "./components/infoItem"
import { Button } from "./components/button"
import ResttartIcon from "./svgs/restart.svg"
import {useEffect, useState} from "react"
import { GridItemType } from "./types/gridItemType"
import { items } from "./data/items" 

const App = () => {

const [playing, setplaying] = useState<boolean>(false)
const [timeElepsed , settimeElepsed] = useState<number>(0)
const [moveCount, setmoveCount] = useState<number>(0)
const [showcount, setshowcount] = useState<number>(0)
const [gridItems ,setgridItems] = useState<GridItemType[]>([])

useEffect(()=>{
  resetAndCreatGrid();
},[])

  const resetAndCreatGrid = () =>{
    
    //passo 1 resetar o jogo
        settimeElepsed(0)
        setmoveCount(0)
        setshowcount(0)
    //passo 2 criar o grid

    //2.1 criar um grid vazio

        let tempGrid: GridItemType[] = []
        for(let i = 0; i < (items.length * 2); i++){
            tempGrid.push({
            item:null,shown:false,permanentShown:false
          });
        }
    // 2.2 preencher o grid
        for(let w = 0; w < 2; w++){
          for(let y = 0; y < (items.length);y++){
              let pos = -1;
            while(pos < 0 || tempGrid[pos].item !== null){
                pos = Math.floor(Math.random() * (items.length * 2));
            }
                tempGrid[pos].item = y;
          }
        }
    //2.3 jogar no states
        setgridItems(tempGrid)

    //passo 3 começar o jogo
        setplaying(true)

  }



  return(
    <C.Container>
      <C.info>
            <C.logoLink href="">
                  <img src={logoImg} width="200" alt=""/>
            </C.logoLink>

            <C.infoArea>
                <InfoItem label="tempo" value="00:00"/>
                <InfoItem label="Movimentos" value="0"/>
            </C.infoArea>

            <Button Icon={ResttartIcon} label="reiniciar" onClick={resetAndCreatGrid}></Button>
      </C.info>
      <C.gridArea>
          <C.grid>

          </C.grid>
      </C.gridArea>
    </C.Container>
  )
}

export default App;