import React, { useState } from 'react'
import './styles.css'
import {IoIosArrowBack} from "react-icons/io"
import ReceberIconSet from '../../assets/receberIconSet.svg'
import { useNavigate } from 'react-router-dom'

export default function ReceberCreditos(){

    const history = useNavigate();

    const handleSubmit = () => {};

    const conta = "xxxx xxxx xxxx xxxx"

    return(
        <div className="receberCreditos-container">
            <div className="arrow-container">
                <IoIosArrowBack className="logo-arrow"
                    onClick={ () => history(-1)}
                />
            </div>
            <h2>Receber créditos</h2>
            <p>Copie ou compartilhe o código de sua conta abaixo</p>
            <section className="receber">
                <p>{conta}</p>
                <button onClick={handleSubmit}><img src={ReceberIconSet} /></button>
            </section>
        </div>
    )
}