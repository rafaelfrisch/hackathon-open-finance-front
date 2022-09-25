import React, { useState } from 'react'
import FaturasCliente from '../../components/faturasCliente'
import HeaderClientPage from '../../components/headerClientPage'
import SaldoCliente from '../../components/saldoCliente'
import TransferenciaCliente from '../../components/transferenciaCliente'
import CartaoIcon from '../../assets/cartaoIcon.svg'
import './styles.css'

export default function ClientPage(){
    const [view, setView] = useState(true)
    const [nome, setNome] = useState("José Silva")
    const [saldo, setSaldo] = useState(500)
    const [faturaAtual, setFaturaAtual] = useState(300)
    const [rangeDate, setRangeDate] = useState("03 set - 03 out")
    const [creditoGanho, setCreditoGanho] = useState(50)

    return(
        <div className="clientPage-container">
            <HeaderClientPage name={nome} view={view} setView={setView} /> 
            <SaldoCliente saldo={view ? saldo : "****"} saldoBrl={view ? saldo : "****"} />
            <TransferenciaCliente />
            <FaturasCliente faturaAtual={view ? faturaAtual : "****"} rangeDate={rangeDate} creditoGanho={view ? creditoGanho : "****"} />
            <div className="cartao-container">
                <section>
                    <img src={CartaoIcon} />
                    <p>Meus cartões</p>
                </section>
            </div>
        </div>
    )
}