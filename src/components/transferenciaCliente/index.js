import React from 'react'
import './styles.css'
import enviarIcon from '../../assets/enviarIcon.svg'
import receberIcon from '../../assets/receberIcon.svg'
import SacarIcon from '../../assets/sacarIcon.svg'
import ComprarIcon from '../../assets/comprarIcon.svg'
import { Link } from 'react-router-dom'

export default function TransferenciaCliente(){

    return(
        <div className="transferenciaCliente-container">
            <h2>Transferências</h2>
            <section className="transferencia">
                <Link to="/enviarCreditos">
                    <section className="transferencia-box" id="enviar-credito">
                        <img src={enviarIcon}/>
                        <section>
                            <p>Enviar</p>
                            <p>créditos</p>
                        </section>
                    </section>
                </Link>
                <Link to="/receberCreditos">
                    <section className="transferencia-box" id="receber-credito">
                        <img src={receberIcon}/>
                        <section>
                            <p>Receber</p>
                            <p>créditos</p>
                        </section>
                    </section>
                </Link>
            </section>
            <Link to="/sacarCreditos">
                <section className="saque-compra">
                    <img src={SacarIcon}/>
                    <p>Sacar em BRL</p>
                </section>
            </Link>
            <Link>
                <section className="saque-compra">
                    <img src={ComprarIcon}/>
                    <p>Comprar créditos com BRL</p>
                </section>
            </Link>
        </div>
    )
}