import styled from "styled-components"
import Titulo from "../Titulo"
import { ProductList } from "../ProductList"


const GaleriaContainer = styled.div`
display: flex;

`

const SeccionFluida = styled.section`
flex-grow: 1;
`



const Galeria = ({fotos= []}) => {
    return (
        <>
            
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    <ProductList />
                    {fotos.map(foto=>{
                        return <p key={foto.id}>{foto.path}</p>
                    })}
                </SeccionFluida>
                

            </GaleriaContainer>
        </>
    )
}

export default Galeria