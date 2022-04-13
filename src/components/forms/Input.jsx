import './Input.css';
import React,{useState} from 'react';

const Input = props => {
    const [valor, setValor] = useState('Inicial');

    function aoMudar(e) {
        setValor(e.target.value);
    }

    return (
        <div className='Input'>
            <h2>{valor}</h2>
            <input value={valor} onChange={aoMudar} />
            <input value={valor} readOnly/>
            <input value={undefined} />
        </div>
    )
}

export default Input;