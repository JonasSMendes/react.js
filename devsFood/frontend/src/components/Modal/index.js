import React from "react";
import { Container,ModalBady } from './styled'

export default ({status,children, setStatus}) =>{

    const handleModalClick = (e) =>{
        if(e.target.classList.contains('modalBg')){
            setStatus(false);
        }

        
    }

    return(
        <Container
         status={status}
         onClick={handleModalClick}
         className="modalBg"
         >
            <ModalBady>
                {children}
            </ModalBady>
        </Container>
    )
}