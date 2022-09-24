import React from 'react'
import { Link } from 'react-router-dom'
import Arvore from '../../assets/arvore_teste.jpeg'
import './styles.css'

export default function HomePage(){

    return(
        <div className="home-container">
            <h1 className="mt-16">HomePage</h1>
            <img src={Arvore} />
            <h1>Carbon Cash</h1>
            <p>Save Carbon Earn Money</p>
            <Link className="">Começar agora</Link>
            <Link>LogIn</Link>
        </div>
    )
}