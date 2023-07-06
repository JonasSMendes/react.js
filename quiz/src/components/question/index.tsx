import { question } from "@/data/questions"
import { QuestionTypes } from "@/types/questionTypes"
import { useState } from "react"

type props = {
    question : QuestionTypes
    count: number
    onAnswer: (answer:number) => void
}


export const Quests = ({question, count, onAnswer}: props) => {

    const [selected , setSelected] = useState<number | null>(null)

    const checkQuestion = (index: number) => {
        if(selected === null){
            setSelected(index);
            onAnswer(index);
        }
    }

    return(
        <>
            <div className="p-2 text-center">{count}. {question.question}</div>
            <div className="">
                {question.option.map((i, index)=>(
                    <div
                     className={`p-3 bg-gray-400 border hover: cursor-pointer
                     
                        ${selected !== null ? 'cursor-outo' : 'hover:bg-gray-500'} 
                        ${selected !== null && selected === question.answer && selected === index && 'bg-green-300 border-green-300'}
                        ${selected !== null && selected !== question.answer && selected === index && 'bg-red-300 border-red-300'}
                     `}
                     key={index}
                     onClick={() => checkQuestion(index)}
                     > 
                        {i}
                    </div>
                ))}
            </div>
        </>
    )
}