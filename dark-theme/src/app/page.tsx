import { ThemeProvider } from "@/contexts/ThemeContext";
import { Container } from "../components/Container";
import { Button } from "@/components/Button";

export default function Home() {

  const handleButton = () => {
    
  }

  return (
    <ThemeProvider>
      <Container>
        <header className="py-5">
            <h1 className="text-3xl ">
                titulo da pagina
            </h1>
        </header>
        <section>
          <p className="my-5">
            conteudo da pagina
          </p>
          <Button label="Click aqui" click={handleButton} />
        </section>
      </Container>
    </ThemeProvider>
  )
}
