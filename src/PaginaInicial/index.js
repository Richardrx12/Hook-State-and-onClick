import React, { useState } from "react";
// o Hook ( useState ) é utilizado para alterar automaticamente uma variavel na tela

import './style.css'

export default function PaginaInicial() {
    //variavel de estado para interagir com a função de numeros aleatorios
    const [ numAleatorio, setNumAleatorio ] = useState(0);

    // função que gera numeros aleatórios e associa ao evento onClick
    function gerarNumero() {
        const novoNumero = Math.floor(Math.random() * (100-1) + 1);
        setNumAleatorio(novoNumero);
    }

    return(
        <div className="container"> 
            <div className="conteudo">
                <h1> Número aleatório: </h1>
                <h2> { numAleatorio } </h2>

                <label> Click no botão abaixo para gerar um número aleatório: </label>
   
                <button onClick={ gerarNumero } className="botao"> Gerar número </button>
            </div>

        </div>
    );
}
