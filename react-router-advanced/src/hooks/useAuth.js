// src/hooks/useAuth.js
import { useState } from 'react';

const useAuth = () => {
  // Simulate user authentication state (for demonstration purposes)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // You can toggle authentication state for testing purposes
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
};

export default useAuth;
