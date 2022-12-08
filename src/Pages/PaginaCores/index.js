import React, { useState } from "react";
import './style.css'
import BotaoVoltar from "../../Componentes/BotaoVoltar";


export default function TrocarCores() {
    const corAmarela = 'esquerda'
    const corVerde = 'direita'

    const [ novaCor, setNovaCor ] = useState(corAmarela);
    const [ estiloAtualizado, setEstiloAtualizado ] = useState(corVerde);
    const [ aux, setAux ] = useState(true);

    const alterarCor = () => {

        if ( aux === true ) {
            setEstiloAtualizado(corAmarela)
            setNovaCor(corVerde);
            setAux(false)

        }
        else {
            setEstiloAtualizado(corVerde)
            setNovaCor(corAmarela);
            setAux(true)
        }
    }


    return(
        
        <div className="cores container">
            
                <div className={ novaCor }> </div>
                <div className={ estiloAtualizado }> </div>

                <div className="btn">
                    <button className="botao" onClick={ alterarCor }> Click aqui </button>
                    <BotaoVoltar />
                </div>
                
        </div>
    );
    
}