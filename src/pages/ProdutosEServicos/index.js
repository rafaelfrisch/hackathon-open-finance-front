import React, { useState } from 'react'
import './styles.css'
import {IoIosArrowBack} from "react-icons/io"
import ProdutoComponent from '../../components/produto'
import { useNavigate } from 'react-router-dom'

export default function ProdutosEServicos(){

    const history = useNavigate();

    const handleSubmit = () => {};

    const ordenacao = [{
        name: "Ordenar por n° de créditos",
        id: 0
    },
    {
        name: "Ordenar por ordem alfabética",
        id: 1
    }]

    const mesFatura = [{
        name: "Setembro",
        id: 0
    },
    {
        name: "Outubro",
        id: 1
    }]

    const fatura = [
        {
            name: "Milhagem",
            data: "01/09",
            preco: 1250
        },
        {
            name: "Restaurante",
            data: "03/09",
            preco: 100
        }
    ]

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
                <select id="fatura">
                    {mesFatura.map(option => (
                        <option key="fatura" value={option.id}>{option.name}</option>
                    ))}
                </select>
            </section>
            {
                fatura.map(produto => (
                    <ProdutoComponent 
                        name = {produto.name}
                        data = {produto.data}
                        preco = {produto.preco}
                    />
                ))
            }
        </div>
    )
}