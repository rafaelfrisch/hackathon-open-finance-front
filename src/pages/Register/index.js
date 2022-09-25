import ButtonGreen from "../../components/buttonGreen"
import InputContainer from "../../components/inputContainer/indes"
import { useState } from "react"
import {IoIosArrowBack} from "react-icons/io"
import "./styles.css"
import { useNavigate } from "react-router-dom"
import signUpService from '../../services/signup';

export default function Register(){
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPass, setRepeatPass] = useState("");
    const [checkbox, setCheckbox] = useState(false)

    const history = useNavigate();

    function validateCPF(){
        if(cpf.length !== 11){
            alert("CPF inválido")
            return false
        }
        return true
    }

    function validateEmail(){
        if(!email.includes("@") || !email.includes(".com")){
            alert("Email inválido")
            return false
        }
        return true
    }

    async function handleSubmit(){
        if(!name || !cpf || !email || !password || !repeatPass){
            alert("Os campos abaixo não devem ser vazios")
            return;
        }
        if(password != repeatPass){
            setPassword("");
            setRepeatPass("");
            alert("A senha não confere!");
            return;
        }
        if(!checkbox){
            alert("Os termos devem ser aceitos")
            return
        }
        if(!validateCPF || !validateEmail){
            return;
        }
        const userData = await signUpService({
          name,
          cpf,
          email,
          password,
        })

        const { user, token } = userData
        console.log(userData)

        localStorage.setItem("logged", 1)
        localStorage.setItem("cpf", user.cpf)
        localStorage.setItem("token", token)
        
        history("/client")
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
                type: "number",
                onChange: (e) => setCpf(e.target.value),
                value: cpf
            }} />

            <InputContainer text={"Email"} inputProps={{
                placeholder: "Digite seu email",
                type: "email",
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
                <input type="checkbox" value={checkbox} onChange={e => setCheckbox(!checkbox)}/>
                <p>Autorizar o app a utilizar os dados em open finance.</p>
            </div>

            <ButtonGreen text={"Finalizar Cadastro"} handleSubmit={handleSubmit} />

            
        </div>
    )
}