import { IoIosArrowBack } from "react-icons/io";
import "./styles.css";
import logo from "../../assets/logo-cardspage.svg";
import { useNavigate } from "react-router-dom";
import card_blue from "../../assets/card-blue.svg"
import card_pink from "../../assets/card-pink.svg"
import card_green from "../../assets/card-green.svg"
import { useEffect, useState } from "react";
import getLastBill from "../../services/cards";
import { parse } from "postcss";


export default function CardsPage(){

    /*const organizationId = localStorage.getItem('organizationId');
    const costumerId = localStorage.getItem('costumerId');
    const creditCardAccountId = localStorage.getItem('creditCardAccountId');*/

    const organizationId = "69665991-da55-4aac-a1f2-32d23daba8fe"
    const customerId = "595.080.896-84"
    const creditCardAccountId = "0b899b56-2f36-46c4-a594-b2a921f45575"

    const [lastDate, setLastDate] = useState("--");
    const [amount, setAmount] = useState("");

    useEffect( () =>{
        async function handleCards(){
            const lastBill = await getLastBill(organizationId, customerId, creditCardAccountId);
            console.log(lastBill)
            setLastDate(lastBill.dueDate);
            setAmount(lastBill.billTotalAmount);
        }
         handleCards();
    },[]);

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
                        <p className="date-info">{lastDate} </p>
                        <p className="label-info">Fatura atual</p>
                        <p className="info-money">R${amount}</p>
                        <p className="label-info">Crédito a ser gerado</p>
                        <div className="logo-value-card">
                            <img src={logo}/>
                            <p className="info-money">{parseInt(parseInt(amount)/3)}</p>
                        </div>
                        
                        
                    </div>
                    
                </div>

            </div>
        </div>
    );
}