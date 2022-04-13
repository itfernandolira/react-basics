import React from "react";

const elementChild = props => {
    return (
        <div>
            <div>Child</div>
            <button onClick={ e => props.aoClicar('Mário',48,true)}> Info do Parent </button>
        </div>
    )
}

export default elementChild;