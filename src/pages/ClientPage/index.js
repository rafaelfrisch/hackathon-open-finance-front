import React, { useState } from 'react'
import FaturasCliente from '../../components/faturasCliente'
import HeaderClientPage from '../../components/headerClientPage'
import SaldoCliente from '../../components/saldoCliente'
import TransferenciaCliente from '../../components/transferenciaCliente'
import CartaoIcon from '../../assets/cartaoIcon.svg'
import './styles.css'
import { requestGet } from '../../services/request'
import { useNavigate } from 'react-router'

export default function ClientPage(){
    const [view, setView] = useState(true)
    const [nome, setNome] = useState("José Silva")
    const [saldo, setSaldo] = useState(500)
    const [faturaAtual, setFaturaAtual] = useState(0)
    const [rangeDate, setRangeDate] = useState("")
    const [creditoGanho, setCreditoGanho] = useState(50)

    const navigate = useNavigate()

    function getLatest(listDates){
        let biggest = 0
        let dateBig = ""
        let billId = ""
        listDates.map(date => {
            // console.log("\naqui dentro, temos em 5:", date.dueDate.replaceAll("-", ""))
            if(parseInt(date.dueDate.replace("-", "")) > biggest){
                // console.log("\nentrei na condição")
                biggest = parseInt(date.dueDate.replaceAll("-", ""))
                dateBig = date.dueDate
                billId = date.billId
            }
        })
        setRangeDate(dateBig)
        return billId
    }

    async function getInfo(){
        let cpf = localStorage.getItem("cpf")
        let token = localStorage.getItem("token")
        let response = await requestGet("/users/accountdata/" + cpf.replaceAll(".", "").replaceAll("-", ""), token)
        if(response.status == 200){
            // console.log("\naqui dentro: ", response.data)
            setNome(response.data.adicionalAccountData.name)
            setSaldo(response.data.adicionalAccountData.balance)
            localStorage.setItem("creditCardAccountId", response.data.creditCart.creditCardAccountId)
            localStorage.setItem("organizationId", response.data.account.organizationId)
            localStorage.setItem("hash", response.data.adicionalAccountData.accountHash)
            localStorage.setItem("balance", response.data.adicionalAccountData.balance)
            let res = await requestGet("/users/creditcarddata/" + response.data.creditCart.creditCardAccountId + "?organizationId=" + response.data.account.organizationId + "&customerId=" + response.data.account.customerId, token)
            if(res.status == 200){
                // console.log("\naqui temos2: ", res.data)
                let billId = getLatest(res.data)
                let responseFinance = await requestGet("/users/creditcardbillstransactions/" + response.data.creditCart.creditCardAccountId + "/" + billId + "?organizationId=" + response.data.account.organizationId + "&customerId=" + response.data.account.customerId, token)
                // console.log("\nno ultimo, temos: ", responseFinance)
                let faturaAtual = 0
                responseFinance.data.map(fatura => {
                    faturaAtual = faturaAtual + fatura.brazilianAmount
                })
                console.log("\naqui no erro:", faturaAtual.toFixed(2))
                setFaturaAtual(faturaAtual.toFixed(2))
                setCreditoGanho(Math.trunc(faturaAtual/2))
            }else{
                alert("Houve um erro no momento, tente novamente mais tarde")
                navigate("/login")
            }
        }else{
            alert("Houve um erro no momento, tente novamente mais tarde")
            navigate("/login")
        }
    }

    useState(() => {
        getInfo()
    }, [])

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