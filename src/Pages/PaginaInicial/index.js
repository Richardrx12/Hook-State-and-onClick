import React from "react";
import './style.css'
import { Link } from "react-router-dom";


export default function PaginaInicial(){
    return(

        <div className="pagina-inicial">

            <h1> Escolha qual o seu caminho: </h1>
            
            <div className="links">
                <Link className="numero-aleatorio" to='/numero'> Gerador de números automático. </Link>
                <Link className="trocar-cores" to='/cores'> Brincando com as cores! </Link>
            </div>
            
        </div>
    );
}