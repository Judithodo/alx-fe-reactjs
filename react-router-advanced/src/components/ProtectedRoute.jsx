// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Simulate authentication check (you can replace this with actual logic)
const isAuthenticated = false; // Set this to `true` to allow access

const ProtectedRoute = () => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
