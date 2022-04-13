import React from "react";

const elementChild = props => {

    const geraIdade = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div>
            <div>Child</div>
            <button onClick={ e => props.aoClicar('Mário',geraIdade(18,75),true)}> Info do Parent </button>
        </div>
    )
}

export default elementChild;