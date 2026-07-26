// src/components/ProtectedRoutes.jsx (ya jahan bhi ye file hai)
import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoutes() {
  const { user } = useAuth();

  // Agar user logged in nahi hai, to direct Login page ('/login') par redirect kar do
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}