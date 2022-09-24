import React from 'react'
import './styles.css'

export default function ButtonGreen({text, handleSubmit}){

    return(
        <div className="buttongreen-container">
            <button onClick={handleSubmit}>
                {text}
            </button>
        </div>
    )
}