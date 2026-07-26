// src/components/PublicRoutes.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext';

export default function PublicRoutes() {
  const { user } = useAuth();

  // Agar user already logged-in hai, to Login page par mat jaane do
  if (user) {
    return <Navigate to="/" replace />; // Ya tumhara main app page path
  }

  return <Outlet />;
}