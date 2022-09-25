import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import HomePage from './pages/Homepage/index'
import Register from './pages/Register';
import LoginPage from './pages/Login/index'
import ClientPage from './pages/ClientPage/index'
import EnviarCreditos from './pages/EnviarCreditos/index'
import ChartPage from './pages/Chart';
import CardsPage from './pages/Cards';

const RoutesPages = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="register" element={<Register/>}/>
            <Route exact path="login" element={<LoginPage />} />
            <Route exact path="client" element={<ClientPage />} />
            <Route exact path="enviarCreditos" element={<EnviarCreditos />} />
            <Route exact path ="chart" element={<ChartPage/>}/>
            <Route exact path = "cards" element={<CardsPage/>}/>
        </Routes>
    </BrowserRouter>       
);

export default RoutesPages;