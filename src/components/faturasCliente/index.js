import React from 'react'
import './styles.css'
import LogoSmall2 from '../../assets/logoSmall2.svg'
import RigthIcon from '../../assets/rigthIcon.svg'
import { Link } from 'react-router-dom'

export default function FaturasCliente({rangeDate, faturaAtual, creditoGanho}){
    return(
        <div className="faturaCliente-container">
            <h2>Suas faturas</h2>
            <Link to="/produtosEServicos">
                <section className="fatura">
                    <section className="dateRange">
                        <p>{rangeDate}</p>
                        <img src={RigthIcon} />
                    </section>
                    <p id="pFatura">Fatura atual</p>
                    <section className="numberFatura">
                        <p id="pNumberFatura">R$ {faturaAtual}</p>
                        <p id="pCents">,00</p>
                    </section>
                    <p id="pCredito">Crédito a ser gerado</p>
                    <section className="creditoGerado">
                        <img src={LogoSmall2} />
                        <p>+{creditoGanho}</p>
                    </section>
                </section>
            </Link>
        </div>
    )
}