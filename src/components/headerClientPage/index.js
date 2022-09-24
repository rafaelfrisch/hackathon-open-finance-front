import React from 'react'
import './styles.css'
import Person from '../../assets/personRounded.svg'
import ViewIcon from '../../assets/viewIcon.svg'
import ConfigIcon from '../../assets/configIcon.svg'

export default function HeaderClientPage({name}){
    
    return(
        <div className="headerClient-container">
            <section className="icon-container">
                <img id="person" src={Person} />
                <section>
                    <img src={ViewIcon} />
                    <img src={ConfigIcon} />
                </section>
            </section>
            <h2>Olá, {name}</h2>
        </div>
    )
}