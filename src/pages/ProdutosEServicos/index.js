import React, { useState } from 'react'
import './styles.css'
import {IoIosArrowBack} from "react-icons/io"
import ProdutoComponent from '../../components/produto'
import { useNavigate } from 'react-router-dom'
import { requestGet } from '../../services/request'

export default function ProdutosEServicos(){

    const history = useNavigate();

    const handleSubmit = () => {};

    const ordenacao = [{
        name: "Ordenar por n° de créditos",
        id: 0
    }]

    const [mesFatura, setMesFatura] = useState([])
    const [faturaSelected, setFaturaSelected] = useState("")
    const [fatura, setFatura] = useState([])

    async function getMesFatura(){
        let token = localStorage.getItem("token")
        let cpf = localStorage.getItem("cpf")
        let accountId = localStorage.getItem("creditCardAccountId")
        let orgId = localStorage.getItem("organizationId")
        let res = await requestGet("/users/creditcarddata/" + accountId + "?organizationId=" + orgId + "&customerId=" + cpf, token)
        if(res.status == 200){
            setMesFatura(res.data)
            setFaturaSelected(res.data[0].billId)
        }else{
            alert("Não foi possível carregar alguns dados")
            history("/login")
        }
    }

    async function getProdutos(){
        let token = localStorage.getItem("token")
        let cpf = localStorage.getItem("cpf")
        let accountId = localStorage.getItem("creditCardAccountId")
        let orgId = localStorage.getItem("organizationId")
        console.log("\nantes")
        let res = await requestGet("/users/creditcardbillstransactions/" + accountId + "/" + faturaSelected + "?organizationId=" + orgId + "&customerId=" + cpf, token)
        console.log("\ndepois: ", res.data)
        if(res.status == 200){
            console.log("\ndepois do status:", res.data)
            setFatura(res.data)
        }else{
            alert("Houve um erro")
        }
    }

    useState(() => {
        getMesFatura()
    }, [])

    useState(() => {
        console.log("\n nesse useeffect")
        getProdutos()
    }, [faturaSelected])

    return(
        <div className="produtosEServicos-container">
            <div className="arrow-container">
                <IoIosArrowBack className="logo-arrow"
                    onClick={ () => history(-1)}
                />
            </div>
            <h2>Produtos e serviços</h2>
            <p>Acompanhe os créditos gerados por cada produto e serviço de sua fatura</p>
            <section className="sacar">
                <select id="ordenacao">
                    {ordenacao.map(option => (
                        <option key="ordenacao" value={option.id}>{option.name}</option>
                    ))}
                </select>
                <select id="fatura" value={faturaSelected} onChange={e => {
                    console.log("\ndentro do onchange: ", e.target.value)
                    setFaturaSelected(e.target.value)
                }}>
                    {mesFatura.map(option => (
                        <option key="fatura" value={option.billId}>{option.dueDate}</option>
                    ))}
                </select>
            </section>
            {
                fatura.map(produto => {
                    console.log("\naqui temos o produto: ", produto)
                    return (<ProdutoComponent 
                        name = {produto.transactionName}
                        data = {produto.transactionDate}
                        preco = {produto.brazilianAmount}
                    />)
                })
            }
        </div>
    )
}