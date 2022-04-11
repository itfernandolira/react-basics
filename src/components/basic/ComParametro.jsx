import React from 'react'

export default function ComParametro(props) {
    console.log(props);
    const status = props.nota >= 10 ? 'Aprovado' : 'Não aprovado';
    //Erro - as propriedades dos componentes são de leitura apenas!
    //props.nota = Math.ceil(props.nota);
    const notaInt = Math.ceil(props.nota);
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                Aluno - { props.aluno } - { notaInt } - { status }
            </p>
        </div>
    );
}