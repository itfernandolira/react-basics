import React, { useState } from "react";
import ElementChild from "./ElementChild";

const ElementParent = props => {
    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);

    function parentInfo(nomeParam, idadeParam, nerdParam) {
        setNome(nomeParam);
        setIdade(idadeParam);
        setNerd(nerdParam);

        console.log(nome,idade,nerd);
    }

    return (
        <div>
            <p>Parent</p>
            <span>{nome} </span>
            <span><strong>{idade} </strong></span>
            <span>{ nerd ? 'Verdadeiro!' : 'Falso!'}</span>
            <ElementChild aoClicar={parentInfo}></ElementChild>
        </div>
    )
}

export default ElementParent;