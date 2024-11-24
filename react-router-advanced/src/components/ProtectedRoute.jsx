import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './useAuth'; // Assuming you have a useAuth hook

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute; 
