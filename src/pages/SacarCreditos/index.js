import React, { useState } from 'react'
import './styles.css'
import {IoIosArrowBack} from "react-icons/io"
import { useNavigate } from 'react-router-dom'

export default function SacarCreditos(){

    const history = useNavigate();

    const handleSubmit = () => {};

    const saldoAtual = 500

    const optionsCartao = [{
        name: "Cartao crédito",
        id: 1
    }]

    return(
        <div className="sacarCreditos-container">
            <div className="arrow-container">
                <IoIosArrowBack className="logo-arrow"
                    onClick={ () => history(-1)}
                />
            </div>
            <h2>Sacar créditos em BRL</h2>
            <p>Realize o saque de seus créditos através do seu banco de preferência</p>
            <p>Digite o valor em créditos a ser resgatado</p>
            <span>Saldo atual: {saldoAtual}</span>
            <section className="sacar">
                <input type="number" defaultValue={150} />
                <select>
                    {optionsCartao.map(option => (
                        <option key="cartao tipo" value={option.id}>{option.name}</option>
                    ))}
                </select>
            </section>
            <span style={{ marginTop: "10px" }}>Saldo atual: {saldoAtual}</span>
            <button onClick={handleSubmit}>Resgatar em BRL</button>
        </div>
    )
}