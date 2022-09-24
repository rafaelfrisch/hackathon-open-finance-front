import React from 'react'
import ButtonGreen from '../../components/buttonGreen'
import './styles.css'

export default function LoginPage(){

    async function handleSubmit(){
        console.log("entrar")
    }

    return(
        <div>
            <ButtonGreen text={"Entrar"} handleSubmit={handleSubmit} />
        </div>
    )
}