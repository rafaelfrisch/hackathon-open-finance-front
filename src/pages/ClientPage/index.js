import React from 'react'
import FaturasCliente from '../../components/faturasCliente'
import HeaderClientPage from '../../components/headerClientPage'
import SaldoCliente from '../../components/saldoCliente'
import TransferenciaCliente from '../../components/transferenciaCliente'
import CartaoIcon from '../../assets/cartaoIcon.svg'
import './styles.css'

export default function ClientPage(){

    return(
        <div className="clientPage-container">
            <HeaderClientPage name={"José Silva"} /> 
            <SaldoCliente saldo={"500.00"} saldoBrl={"500,00"} />
            <TransferenciaCliente />
            <FaturasCliente faturaAtual={300} rangeDate="03 set - 03 out" creditoGanho={"50.00"} />
            <div className="cartao-container">
                <section>
                    <img src={CartaoIcon} />
                    <p>Meus cartões</p>
                </section>
            </div>
        </div>
    )
}