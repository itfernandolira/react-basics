import React from 'react'

export default function ComParametro(props) {
    console.log(props);
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                Aluno - { props.aluno } - { props.nota }
            </p>
        </div>
    );
}