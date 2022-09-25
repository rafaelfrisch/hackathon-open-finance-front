import React from 'react'
import './styles.css'
import Person from '../../assets/personRounded.svg'
import ViewIcon from '../../assets/viewIcon.svg'
import ConfigIcon from '../../assets/configIcon.svg'

export default function HeaderClientPage({name, view, setView}){
    
    async function onClickIcon(){
        setView(!view)
    }

    return(
        <div className="headerClient">
            <div className="headerClient-container">
                <section className="icon-container">
                    <img id="person" src={Person} />
                    <section>
                        <img onClick={onClickIcon} id="viewIcon" src={ViewIcon} />
                        <img src={ConfigIcon} />
                    </section>
                </section>
                <h2>Olá, {name}</h2>
            </div>
        </div>
    )
}