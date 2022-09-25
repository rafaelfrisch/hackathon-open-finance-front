import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
    let logged = localStorage.getItem("logged") 
    if( logged == 1 || logged == "1" ){
        alert("Faça o login para acessar essa página")
        return(
            <Route {...rest} render={(props) => (
                <Component {...props} />
            )} />
        )
    }
    
    return(
        <Route {...rest} render={(props) => (
            <Navigate to='/login' />
        )} element={<Navigate to="/" replace />} />
        
    )
}
  
export default PrivateRoute