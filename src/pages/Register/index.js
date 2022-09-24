import ButtonGreen from "../../components/buttonGreen"
import InputContainer from "../../components/inputContainer/indes"
import { useState } from "react"
import {IoIosArrowBack} from "react-icons/io"
import "./styles.css"
import { useNavigate } from "react-router-dom"

export default function Register(){
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPass, setRepeatPass] = useState("");

    const history = useNavigate();

    function emptyValues(){
        setName("");
        setCpf("");
        setEmail("");
        setPassword("");
        setRepeatPass("");
    }

    async function handleSubmit(){
        if(password != repeatPass){
            setPassword("");
            setRepeatPass("");
            alert("A senha não confere!");
            return;
        }
        alert("a")
    }

    return(
        <div className="register-container">
           <div className="arrow-container">
                <IoIosArrowBack className="logo-arrow"
                onClick={ () => history(-1)}
                />
            </div>
            <InputContainer text={"Nome"} inputProps={{
                placeholder: "Digite seu nome",
                type: "text",
                onChange: (e) => setName(e.target.value),
                value: name
            }} />

            <InputContainer text={"CPF"} inputProps={{
                placeholder: "Digite seu CPF (apenas números)",
                type: "text",
                onChange: (e) => setCpf(e.target.value),
                value: cpf
            }} />

            <InputContainer text={"Email"} inputProps={{
                placeholder: "Digite seu email",
                type: "text",
                onChange: (e) => setEmail(e.target.value),
                value: email
            }} />

            <InputContainer text={"Crie sua senha"} inputProps={{
                placeholder: "******",
                type: "password",
                onChange: (e) => setPassword(e.target.value),
                value: password
            }} />

            <InputContainer text={"Repetir senha"} inputProps={{
                placeholder: "*******",
                type: "password",
                onChange: (e) => setRepeatPass(e.target.value),
                value: repeatPass
            }} />
            <div className="check-container">
                <input type="checkbox"/>
                <p>Autorizar o app a utilizar os dados em open finance.</p>
            </div>

            <ButtonGreen text={"Finalizar Cadastro"} handleSubmit={handleSubmit} />

            
        </div>
    )
}