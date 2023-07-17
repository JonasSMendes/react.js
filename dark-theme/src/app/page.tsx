'use client'

import { ThemeProvider} from "@/contexts/ThemeContext";
import { Container } from "../components/Container";
import { Button } from "@/components/Button";
import { ThemeSwitch } from "@/components/ThemeSwitch";

export default function Home() {

  return (
    <ThemeProvider>
      <Container>
      <ThemeSwitch />
        <header className="py-5">
            <h1 className="text-3xl ">
                titulo da pagina
            </h1>
        </header>
        <section>
          <p className="my-6 ">
            conteudo da pagina
          </p>
          <Button label="clique aqui" Click={()=>{}}/>
        </section>
        
      </Container>
    </ThemeProvider>
  )
}
