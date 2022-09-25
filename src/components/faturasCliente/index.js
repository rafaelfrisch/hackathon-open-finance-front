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
                    {
                        faturaAtual === "****"?
                        <section className="numberFatura">
                            <p id="pNumberFatura">R$ ****</p>
                            <p id="pCents">,00</p>
                        </section>:
                        <section className="numberFatura">
                            <p id="pNumberFatura">R$ {Math.trunc(faturaAtual)}</p>
                            <p id="pCents">,{Math.trunc((faturaAtual*100)%100)}</p>
                        </section>
                    }
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