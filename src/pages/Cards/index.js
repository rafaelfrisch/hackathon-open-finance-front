import { IoIosArrowBack } from "react-icons/io";
import "./styles.css";
import logo from "../../assets/logo-cardspage.svg";
import { useNavigate } from "react-router-dom";
import card_blue from "../../assets/card-blue.svg"
import card_pink from "../../assets/card-pink.svg"
import card_green from "../../assets/card-green.svg"


export default function CardsPage(){

    const history = useNavigate();
    return(
        <div className="cardspage-container">
            <div className="arrow-container">
                <IoIosArrowBack className="logo-arrow"   onClick={() => history(-1)}  />
            </div>
            <h1>Seus cartões</h1>
            <p>Faturas abertas em seu cartão</p>
            <div className="cards-content">
                <div className="card-line">
                    <div className="card">
                        <p>**** **** **** 1234</p>
                        <img src={card_blue}></img>
                    </div>
                    
                    <div className="card-info">
                        <p className="date-info">03 set - 03 out </p>
                        <p className="label-info">Fatura atual</p>
                        <p className="info-money">R$1500,00</p>
                        <p className="label-info">Crédito a ser gerado</p>
                        <div className="logo-value-card">
                            <img src={logo}/>
                            <p className="info-money">30.0</p>
                        </div>
                        
                        
                    </div>
                    
                </div>

                <div className="card-line">
                    <div className="card">
                        <p>**** **** **** 1234</p>
                        <img src={card_pink}></img>
                    </div>
                    
                    <div className="card-info">
                        <p className="date-info">03 set - 03 out </p>
                        <p className="label-info">Fatura atual</p>
                        <p className="info-money">R$1500,00</p>
                        <p className="label-info">Crédito a ser gerado</p>
                        <div className="logo-value-card">
                            <img src={logo}/>
                            <p className="info-money">30.0</p>
                        </div>
                        
                        
                    </div>
                    
                </div>

                <div className="card-line">
                    <div className="card">
                        <p>**** **** **** 1234</p>
                        <img src={card_green}></img>
                    </div>
                    
                    <div className="card-info">
                        <p className="date-info">03 set - 03 out </p>
                        <p className="label-info">Fatura atual</p>
                        <p className="info-money">R$1500,00</p>
                        <p className="label-info">Crédito a ser gerado</p>
                        <div className="logo-value-card">
                            <img src={logo}/>
                            <p className="info-money">30.0</p>
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}