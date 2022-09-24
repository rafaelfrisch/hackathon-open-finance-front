import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/Homepage/index'
import Register from './pages/Register';

const RoutesPages = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>       
);

export default RoutesPages;