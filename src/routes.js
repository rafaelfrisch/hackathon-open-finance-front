import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import HomePage from './pages/Homepage/index'
import Register from './pages/Register';
import LoginPage from './pages/Login/index'
import ClientPage from './pages/ClientPage/index'

const RoutesPages = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register/>}/>
            <Route exact path="login" element={<LoginPage />} />
            <Route exact path="client" element={<ClientPage />} />
        </Routes>
    </BrowserRouter>       
);

export default RoutesPages;