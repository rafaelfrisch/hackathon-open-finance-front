import React, { useState } from 'react'
import ButtonGreen from '../../components/buttonGreen'
import Arvore from '../../assets/logo.svg'
import './styles.css'
import InputContainer from '../../components/inputContainer/indes'
import {IoIosArrowBack} from "react-icons/io"
import { useNavigate } from 'react-router-dom'
import signInService from '../../services/login';


export default function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useNavigate();

    async function handleSubmit(){
        const userData = await signInService(email, password);

        localStorage.setItem("logged", 1)
        localStorage.setItem("cpf", userData.user.cpf)
        localStorage.setItem("token", userData.token)
        
        history("/client")
    }

    return(
        <div className="loginpage-container">
            <div className="arrow-container">
                <IoIosArrowBack className="logo-arrow"
                onClick={ () => history(-1)}
                />
            </div>
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