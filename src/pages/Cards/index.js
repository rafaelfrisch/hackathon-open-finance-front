import { IoIosArrowBack } from "react-icons/io";
import "./styles.css";
import logo from "../../assets/logo-cardspage.svg";
import { useNavigate } from "react-router-dom";
import card_blue from "../../assets/card-blue.svg"
import card_pink from "../../assets/card-pink.svg"
import card_green from "../../assets/card-green.svg"
import getCreditCards from "../../services/creditCards";
import { useEffect } from "react";


export default function CardsPage(){

    const organizationId = "69665991-da55-4aac-a1f2-32d23daba8fe";
    const costumerId = "595.080.896-84";
    const creditCardAccountId = "0b899b56-2f36-46c4-a594-b2a921f45575";
    console.log("aa")
    
    useEffect(() => {
        async function handleCreditCard(){
            const creditCardData = await getCreditCards(organizationId, costumerId, creditCardAccountId);
        }
        handleCreditCard();
    })

    
    
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


            </div>
        </div>
    );
}