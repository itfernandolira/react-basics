import React, { useState } from "react";
import ElementChild from "./ElementChild";
import If from '../conditional/If';

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
            <If teste={idade!=0}>
                <span>{nome} </span>
                <span><strong>{idade} </strong></span>
                <span>{ nerd ? 'Verdadeiro!' : 'Falso!'}</span>
            </If>
            <ElementChild aoClicar={parentInfo}></ElementChild>
        </div>
    )
}

export default ElementParent;