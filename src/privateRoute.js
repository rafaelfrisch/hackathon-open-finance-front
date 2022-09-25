import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import LoginPage from './pages/Login/index'

const PrivateRoute = ({ element: Component, ...rest }) => {
    let logged = localStorage.getItem("logged") 
    if( logged == 1 || logged == "1" ){
        return(
            <Route {...rest} element={Component} />
        )
    }
    
    return(
        <Route {...rest} element={LoginPage} />
        
    )
}
  
export default PrivateRoute