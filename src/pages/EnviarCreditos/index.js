import React, { useState } from 'react'
import './styles.css'
import {IoIosArrowBack} from "react-icons/io"
import { useNavigate } from 'react-router-dom'
import makeTransaction from '../../services/makeTransaction'


export default function EnviarCreditos(){
    const [receiverAccountHash, setreceiverAccountHash] = useState("");
    const [sendValue, setSendValue] = useState(150)

    const history = useNavigate();

    const handleSubmit = async () => {
      const senderAccountHash = localStorage.getItem("hash")
      const token = localStorage.getItem("token")
      
      const transaction = await makeTransaction(senderAccountHash, receiverAccountHash, sendValue, token)

      alert("Transação feita com sucesso");
    };

    const saldoAtual = localStorage.getItem("balance")


    return(
        <div className="enviarCreditos-container">
            <div className="arrow-container">
                <IoIosArrowBack className="logo-arrow"
                    onClick={ () => history(-1)}
                />
            </div>
            <h2>Enviar créditos</h2>
            <p>Digite o código da conta de destino</p>
            <section className="codigoConta">
                <input type="text" placeholder="0000 0000 0000 0000" 
                  value={receiverAccountHash}
                  onChange={(event) => setreceiverAccountHash(event.target.value)}
                />
            </section>
            <h2>Digite o valor em créditos a ser transferido</h2>
            <span>Saldo atual: {saldoAtual}</span>
            <section className="enviar">
                <input type="number"
                value={sendValue} 
                onChange={(event) => setSendValue(event.target.value)}
                />
                <button onClick={handleSubmit}>Enviar</button>
            </section>
        </div>
    )
}