import React from 'react'
import './styles.css'

export default function InputContainer({text, inputProps}){
    
    return(
        <div className="input-container">
            <p>{text}</p>
            <input {...inputProps}/>
        </div>
    )
}