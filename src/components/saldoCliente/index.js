import React from 'react'
import './styles.css'
import LogoSmall from '../../assets/logoSmall1.svg'
import RigthIcon from "../../assets/rigthIcon.svg"
import { Link } from 'react-router-dom'

export default function SaldoCliente({saldo, saldoBrl}){
    return(
        <div className="saldoCliente-container">
            <h2>Seu saldo</h2>
            <section className="saldo-container">
                <img id="logosmallIcon" src={LogoSmall} />
                <section className="saldoNumber-container">
                    <p id="pSaldo">{saldo}</p>
                    <Link to="/chart">
                        <section>
                            <p>{saldoBrl} BRL</p>
                            <img src={RigthIcon} />
                        </section>
                    </Link>
                </section>
            </section>
        </div>
    )
}