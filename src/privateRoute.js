import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
    let local = localStorage.getItem("logged")
    if (!(local == 1) || !(local == "1")) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
  
export default ProtectedRoute