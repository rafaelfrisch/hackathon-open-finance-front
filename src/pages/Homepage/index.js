import React from 'react'
import { Link } from 'react-router-dom'
import Arvore from '../../assets/logo.svg'
import './styles.css'

export default function HomePage(){

    return(
        <div className="home-container">
            <div>
                <img src={Arvore} />
                <h1>Carbon Cash</h1>
                <p>Save Carbon Earn Money</p>
                <Link to="register"><button id="register">Começar agora</button></Link>
                <Link to="login"><button id="login">LogIn</button></Link>
            </div>
        </div>
    )
}