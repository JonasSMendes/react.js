import * as C from './app.styles'
import { useState, useEffect } from 'react';
//types
import { category } from './types/category';
import { Item } from './types/Item';
/////////////////////////////////////////////
//data
import { categories } from './data/categories';
import { items } from './data/items';
/////////////////////////////////////////////
//helpers
import { getCurrentsMonth, filterListByMonth } from './helpers/dateFilter';
//////////////////////////////////////////////
//components
import { TableArea } from './components/tableArea';
//////////////////////////////////////////////
const App = () =>{

  const [ list, setlist] = useState(items);
  const [filterList, setFilterList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth]= useState(getCurrentsMonth());

  useEffect(()=>{
    setFilterList(filterListByMonth(list, currentMonth));
  },[list,currentMonth])

  return(
    <C.Container>
      <header>
        <h1 className='header-teste'>Sistema financeiro</h1>
      </header>
      <body>
        {/* area de informação */}


        {/* area de inserçao */}


        {/* tabela de itens */}
        <TableArea
         lis={list}
        />

      </body>
    </C.Container>
  )
}

export default App;