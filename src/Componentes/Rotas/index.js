
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TrocarCores from "../../Pages/PaginaCores";
import PaginaInicial from "../../Pages/PaginaInicial";
import PaginaNumAleatorio from "../../Pages/PaginaNumero";



const Rotas = () => (


<BrowserRouter>
    <Routes>
        <Route exact path="/" element={ <PaginaInicial /> } />
        <Route path='/numero' element={ <PaginaNumAleatorio /> } />
        <Route path='/cores' element={ <TrocarCores />} />
    </Routes>
</BrowserRouter>

)

export default Rotas;