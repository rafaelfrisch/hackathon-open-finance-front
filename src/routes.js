import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import HomePage from './pages/Homepage/index'
import Register from './pages/Register';
import LoginPage from './pages/Login/index'

const RoutesPages = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register/>}/>
            <Route exact path="login" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>       
);

export default RoutesPages;