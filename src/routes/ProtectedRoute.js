import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {

    setToken(localStorage.getItem('token'));
  }, [localStorage.getItem('token')]); 

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
