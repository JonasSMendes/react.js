import * as C from './app.styles'
import { useState, useEffect } from 'react';
//types
import { category } from './types/category';
import { Item } from './types/Item';
/////////////////////////////////////////////
//data
import { categoriesList } from './data/categories';
import { items } from './data/items';
/////////////////////////////////////////////
//helpers
import { getCurrentsMonth, filterListByMonth } from './helpers/dateFilter';
//////////////////////////////////////////////
//components
import { TableArea } from './components/tableArea';
import { InfoArea } from './components/infoArea';
import { InputArea } from './components/inputArea';
//////////////////////////////////////////////
const App = () =>{

  const [ list, setlist] = useState(items);
  const [filterList, setFilterList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth]= useState(getCurrentsMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);


  useEffect(()=>{
    setFilterList(filterListByMonth(list, currentMonth));
  },[list,currentMonth])

  useEffect(()=>{
    let incomeCount = 0
    let expenseCount= 0 

    for(let i in filterList){
      if(categoriesList[filterList[i].category].expense){
        expenseCount += filterList[i].value;
      }else{
        incomeCount += filterList[i].value;
      }
    }

    setIncome(incomeCount)
    setExpense(expenseCount)
  },[filterList])

  const handleManthChange= (newMonth: string) =>{
    setCurrentMonth(newMonth);
  } 

  const handleAddItem = (item:Item) =>{
    let newList = [...list]
    newList.push(item)
    setlist(newList)
  }

  return(
    <C.Container>
      <header>
        <h1 className='header-teste'>Sistema financeiro</h1>
      </header>
      <body>
        {/* area de informação */}
        <InfoArea 
        currentMonth={currentMonth}
        onMonthChange={handleManthChange}
        income={income}
        expense={expense}
        />

        {/* area de inserçao */}
        <InputArea 
          onAdd={handleAddItem}
        />


        {/* tabela de itens */}
        <TableArea
         lis={filterList}
        />

      </body>
    </C.Container>
  )
}

export default App;