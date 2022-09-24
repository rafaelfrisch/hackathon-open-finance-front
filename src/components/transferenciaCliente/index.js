import React from 'react'
import './styles.css'
import enviarIcon from '../../assets/enviarIcon.svg'
import receberIcon from '../../assets/receberIcon.svg'
import SacarIcon from '../../assets/sacarIcon.svg'
import ComprarIcon from '../../assets/comprarIcon.svg'

export default function TransferenciaCliente(){

    return(
        <div className="transferenciaCliente-container">
            <h2>Transferências</h2>
            <section className="transferencia">
                <section className="transferencia-box" id="enviar-credito">
                    <img src={enviarIcon}/>
                    <section>
                        <p>Enviar</p>
                        <p>créditos</p>
                    </section>
                </section>
                <section className="transferencia-box" id="receber-credito">
                    <img src={receberIcon}/>
                    <section>
                        <p>Receber</p>
                        <p>créditos</p>
                    </section>
                </section>
            </section>
            <section className="saque-compra">
                <img src={SacarIcon}/>
                <p>Sacar em BRL</p>
            </section>
            <section className="saque-compra">
                <img src={ComprarIcon}/>
                <p>Comprar créditos com BRL</p>
            </section>
        </div>
    )
}