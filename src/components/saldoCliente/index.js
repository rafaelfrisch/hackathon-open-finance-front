import React from 'react'
import './styles.css'
import LogoSmall from '../../assets/logoSmall1.svg'
import RigthIcon from "../../assets/rigthIcon.svg"
import { Link } from 'react-router-dom'

export default function SaldoCliente({view, saldo, saldoBrl}){
    return(
        <div className="saldoCliente-container">
            <h2>Seu saldo</h2>
            <section className="saldo-container">
                <img id="logosmallIcon" src={LogoSmall} />
                <section className="saldoNumber-container">
                    {
                        view ? 
                        <p id="pSaldo">{Math.trunc(saldo)}</p>:
                        <p id="pSaldo">****</p>
                    }
                    <Link to="/chart">
                        {view ?
                            <section>
                                <p>{(saldoBrl*3).toFixed(2)} BRL</p>
                                <img src={RigthIcon} />
                            </section>:
                            <section>
                                <p>**** BRL</p>
                                <img src={RigthIcon} />
                            </section>
                        }
                    </Link>
                </section>
            </section>
        </div>
    )
}