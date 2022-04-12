import React, { Children, cloneElement } from "react";


const familia = props => {
    return (
        <div>
           {/* Mostrar todos - props.children */}
           {/* Apenas para um children - {React.cloneElement(props.children, props)} */}
           {
               React.Children.map(props.children, el => {
                   return cloneElement(el, props);
               })
           }
        </div>
    )
}

export default familia;