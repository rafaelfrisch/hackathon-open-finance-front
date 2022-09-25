import { IoIosArrowBack } from "react-icons/io";
import "./styles.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ChartPage(){
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const history = useNavigate();

    const [showQ1, setShowQ1] = useState(false);
    const [showQ2, setShowQ2] = useState(false);
    const [showQ3, setShowQ3] = useState(false);
    const optionsChart = {
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          },
          gridline: {
            display: false
          }
        },
    };
    const labels = ['Out', 'Nov','Dec', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set']
    const dataChart = {
        labels,
        datasets: [
          {
            label: 'Token',
            data: [0.4,0.35,0.45,0.48,0.41,0.50, 0.55,0.60, 0.58, 0.65,0.75,0.95],
            borderColor: '#73F689',
            backgroundColor: '#73F689',
          },
        ],
    };



    function toggleShowQ(question, setQuestion){
        setQuestion(!question);
    }

    return(
        <div className="chartpage-container">
            <div className="arrow-container" onClick={() => history(-1)}>
                <IoIosArrowBack className="logo-arrow"/>
            </div>
            <h1>
                Histórico de preço do crédito em BRL
            </h1>
            <Line  className="chart" options={optionsChart} data={dataChart}/>
            <h1>Perguntas Frequentes</h1>
            <div className="question-container">
                <p>Como os produtos que compro indicam suas pegadas de carbono?</p>
                <IoIosArrowDown  onClick={() => toggleShowQ(showQ1, setShowQ1)} class="arrow-down"/>
            </div>
            {showQ1 &&
            <div className="ans-container">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                </p>
            </div>}

            <div className="question-container">
                <p>Como os produtos que compro indicam suas pegadas de carbono?</p>
                <IoIosArrowDown  onClick={() => toggleShowQ(showQ2, setShowQ2)} class="arrow-down"/>
            </div>
            {showQ2 &&
            <div className="ans-container">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                </p>
            </div>}

            <div className="question-container">
                <p>Como os produtos que compro indicam suas pegadas de carbono?</p>
                <IoIosArrowDown  onClick={() => toggleShowQ(showQ3, setShowQ3)} class="arrow-down"/>
            </div>
            {showQ3 &&
            <div className="ans-container">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                </p>
            </div>}

        </div>
    );
}