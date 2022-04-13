import React from "react";

const parOuImpar = props => {
    const ePar = props.numero % 2 === 0;
    return (
        <div>
            <span>Número: {props.numero} - </span>
            {ePar ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )
}

export default parOuImpar;