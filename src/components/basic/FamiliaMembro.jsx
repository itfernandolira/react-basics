import React from "react";

const familiaMembro = props => {
    return (
        <div>
             {props.nome} <strong> {props.apelido} </strong>
        </div>
    )
}
export default familiaMembro;