"use client"
import React, { useState } from "react"
import { TodoPerson } from "@/types/TodoPerson"



export const Testes = () => {

    const [itemInput, setItemInput] = useState('')
    const [text, setText] = useState<TodoPerson[]>([
        { label: 'varrer a casa', check: false },
        { label: 'comprar pão', check: false },
        { label: 'acordar', check: false }
    ])

    const handleButtonPush = () => {

        if(itemInput.trim() === '') return;
        setText([
            ...text,
            { label: itemInput, check: false }
        ])

        setItemInput('')
    }

    const deleteItem = (index:number) =>{
        setText(
            text.filter((item, key) => key !== index )
        );
    }

    const toogleCheck = (index : number) =>{
        let newList = [...text]

        for(let i in newList){
            if(index === parseInt(i)){
                newList[i].check = !newList[i].check
            }
        }

        setText(newList)
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center text-2xl ">
            <input onChange={e => setItemInput(e.target.value)} value={itemInput} className="P-3 m-5" type="text" placeholder="adicione sua tarefa" />
            <button onClick={handleButtonPush} >adicionar</button>

            <p>{text.length} itens na lista</p>

            <ul className="w-full max-w-lg list-disc pl-5">
                {text.map((i, Index) => (
                    <li
                        key={Index}
                        className="hover:underline"
                        style={{ color: i.check === true ? 'green' : 'red' }}>
                        <input onChange={() => toogleCheck(Index)}  type="checkbox" checked={i.check} />
                        {i.label} ---
                        <button onClick={ () => deleteItem(Index)} >[deletar item]</button>
                    </li>
                ))}
            </ul>
        </div>
    )
} 