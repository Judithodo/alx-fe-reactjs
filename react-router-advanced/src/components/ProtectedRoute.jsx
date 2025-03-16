// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth(); // Get the authentication status

  // If the user is authenticated, render the child route, else redirect to the home page
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

// Simulate authentication check (you can replace this with actual logic)
// const isAuthenticated = false; // Set this to `true` to allow access

// const ProtectedRoute = () => {
//   return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
// };

export default ProtectedRoute;
