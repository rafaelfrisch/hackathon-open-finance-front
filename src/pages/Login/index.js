import React, { useState } from 'react'
import ButtonGreen from '../../components/buttonGreen'
import Arvore from '../../assets/logo.svg'
import './styles.css'
import InputContainer from '../../components/inputContainer/indes'

export default function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(){
        console.log("entrar")
    }

    return(
        <div className="loginpage-container">
            <img src={Arvore} />
            <h1>Carbon Cash</h1>
            <p>Save Carbon Earn Money</p>

            <InputContainer text={"Entrar"} inputProps={{
                placeholder: "Digite seu email",
                type: "text",
                onChange: (e) => setEmail(e.target.value),
                value: email
            }} />

            <InputContainer text={"Senha"} inputProps={{
                placeholder: "Senha",
                type: "password",
                onChange: (e) => setPassword(e.target.value),
                value: password
            }} />
            <ButtonGreen text={"Entrar"} handleSubmit={handleSubmit} />
        </div>
    )
}