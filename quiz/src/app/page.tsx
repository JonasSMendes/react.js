'use client'

import Image from 'next/image'
import { question } from '@/data/questions'
import { useState } from 'react'

import { Quests } from '@/components/question'

export default function Home() {

  const [currentCount , setcurrentCount] = useState(0)
  const title = 'Quiz de anime'

  const handleAnswered = (answer: number) => {
      
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <div className='flex flex-col bg-white w-full max-w-xl h-auto text-black '>
            <div className='p-5 font-bold text-2xl shadow shadow-gray-300 text-center'>{title}</div>
            <hr />
            <div className='p-8'>
                <Quests
                  question={question[currentCount]}
                  count={currentCount + 1}
                  onAnswer={handleAnswered}

                />
            </div>
            <div className='p-5 text-center border-1 border-gray-300'>
              {currentCount + 1} de {question.length} perguntas {question.length === 1? '' : 's'}
            </div>
        </div>
    </main>
  )
}
