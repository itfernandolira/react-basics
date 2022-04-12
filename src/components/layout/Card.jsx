import './Card.css'
import React from 'react'

const card = props => {
    const cardStyle = {
        backgroundColor: props.color || '#CCCCFF',
        borderColor: props.color || '#CCCCFF'
    }
    return (
        <div className='Card' style={cardStyle}>
        <div className='Title'>{ props.title }</div>
        <div className='Content'>
            { props.children }
        </div>
    </div>
    )
}

export default card;
