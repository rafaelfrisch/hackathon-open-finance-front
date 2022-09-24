import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/Homepage/index'

const RoutesPages = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </BrowserRouter>       
);

export default RoutesPages;