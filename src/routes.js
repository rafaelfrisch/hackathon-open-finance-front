import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import HomePage from './pages/Homepage/index'
import Register from './pages/Register';
import LoginPage from './pages/Login/index'
import ClientPage from './pages/ClientPage/index'
import EnviarCreditos from './pages/EnviarCreditos/index'
import ReceberCreditos from './pages/ReceberCreditos/index'
import SacarCreditos from './pages/SacarCreditos/index'
import ProdutosEServicos from './pages/ProdutosEServicos/index'
import ChartPage from './pages/Chart';
import CardsPage from './pages/Cards';
import ProtectedRoute from './privateRoute'

const RoutesPages = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="register" element={<Register/>}/>
            <Route exact path="login" element={<LoginPage />} />
            <Route exact path = "cards" element={
            <ProtectedRoute>
                <CardsPage/>
            </ProtectedRoute>
            }/>
            <Route exact path="client" element={
                <ProtectedRoute>
                    <ClientPage />
                </ProtectedRoute>
            } />
            <Route exact path="enviarCreditos" element={
            <ProtectedRoute>
                <EnviarCreditos/>
            </ProtectedRoute>
             } />
            <Route exact path="receberCreditos" element={
            <ProtectedRoute>
                <ReceberCreditos/>
            </ProtectedRoute>
             } />
            <Route exact path="sacarCreditos" element={
            <ProtectedRoute>
                <SacarCreditos/>
            </ProtectedRoute>
             } />
            <Route exact path="produtosEServicos" element={
            <ProtectedRoute>
                <ProdutosEServicos/>
            </ProtectedRoute>
             } />
            <Route exact path ="chart" element={
            <ProtectedRoute>
                <ChartPage/>
            </ProtectedRoute>
            }/>
        </Routes>
    </BrowserRouter>       
);

export default RoutesPages;