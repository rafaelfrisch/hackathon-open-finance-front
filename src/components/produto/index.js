import React from 'react'
import './styles.css'

import carIcon from '../../assets/carIcon.svg'
import clothesIcon from '../../assets/clothesIcon.svg'
import ferramentasIcon from '../../assets/ferramentasIcon.svg'
import geralIcon from '../../assets/geralIcon.svg'
import giftIcon from '../../assets/giftIcon.svg'
import planeIcon from '../../assets/planeIcon.svg'
import shopIcon from '../../assets/shopIcon.svg'
import foodIcon from '../../assets/foodIcon.svg'

function containList(name, listItems){
    let i = 0;
    for(i = 0; i < listItems.length; i++){
        if (name.includes(listItems[i])) return true
    }
    return false
}

function getIconProduto(name){
    let icon = null
    let nameLowerCase = name.toLowerCase()
    if(containList(nameLowerCase, ["uber", "99pop", "indriver", "car", "carro", "bus", "onibus", "transporte"])) icon = carIcon
    else if(containList(nameLowerCase, ["renner", "riachuelo", "roupa", "centauro"])) icon = clothesIcon
    else if(containList(nameLowerCase, ["ferramenta", "leroy", "cassol", "operacoes", "obras"])) icon = ferramentasIcon
    else if(containList(nameLowerCase, ["present", "gift"])) icon = giftIcon
    else if(containList(nameLowerCase, ["plane", "azul", "gol", "latam", "airline", "aviao", "milha"])) icon = planeIcon
    else if(containList(nameLowerCase, ["shopping", "compra", "shopee", "mercado livre", "mercado"])) icon = shopIcon
    else if(containList(nameLowerCase, ["food", "comida", "restaurante", "lanchonete", "rappi"])) icon = foodIcon
    else icon = geralIcon
    return icon
}

export default function ProdutoComponent({name, data, preco}) {
    return(
        <div className="produto-container">
            <section className="logoData">
                {
                    name === undefined ?
                    <img src={geralIcon} /> :
                    <img src={getIconProduto(name)} />
                }
                <section className="dataNome">
                    <span>{data}</span>
                    <p>{name}</p>
                </section>
            </section>
            <section className="preco">
                <span>R$ {preco}</span>
                <p>{preco/2}</p>
            </section>
        </div>
    )
}