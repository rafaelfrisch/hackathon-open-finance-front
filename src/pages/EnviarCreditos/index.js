import React, { useState } from 'react'
import './styles.css'
import {IoIosArrowBack} from "react-icons/io"
import { useNavigate } from 'react-router-dom'

export default function EnviarCreditos(){

    const history = useNavigate();

    const handleSubmit = () => {};

    const saldoAtual = 500

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
                <input type="text" placeholder="0000 0000 0000 0000" />
            </section>
            <h2>Digite o valor em créditos a ser transferido</h2>
            <span>Saldo atual: {saldoAtual}</span>
            <section className="enviar">
                <input type="number" defaultValue={150} />
                <button onClick={handleSubmit}>Enviar</button>
            </section>
        </div>
    )
}