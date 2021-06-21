import React, { useState } from "react";
import './index.css';

const Hooks = () => {

    const [contador, setContador] = useState(0);

    const handleContador = () => {
        setContador(contador + 1);
    }
    
    const handleQualquer = () => {
        setContador(contador - 1);
    }


    return (
        <center>            
            <button onClick={ handleContador } >
               Aumentar
            </button>
            <button onClick={ handleQualquer } >
                Diminuir
            </button>
            <p>Você clicou aqui {contador} vezes</p>
        </center>
    );
}

export default Hooks;