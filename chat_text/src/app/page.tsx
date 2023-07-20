'use client'

import { InputName } from "@/components/InputName";
import { UserProvider } from "@/context/UserContext";


export default function Home() {
  return (
    <UserProvider>
   <div  className="flex item-center justify-center flex-col">
      <h1 className=" m-auto text-4xl">Chat Simples</h1>
        <InputName />
   </div>
   </UserProvider>
  )
}
