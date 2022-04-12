import React from "react";
import FamiliaMembro from "./FamiliaMembro";

const familia = props => {
    return (
        <div>
           <FamiliaMembro nome="Pedro" apelido={props.apelido} />
           <FamiliaMembro nome="Susana" {...props} />
           <FamiliaMembro nome="Maria" apelido="Ferreira" />
        </div>
    )
}

export default familia;