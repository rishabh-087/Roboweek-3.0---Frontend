import { createContext, useState, useContext } from 'react';
import axios from 'axios'; // Make sure to install axios

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (userData) => {
    try {
      const response = await axios.post('/api/login', userData); // Replace with your API endpoint
      setUser(response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const signup = async (userData, password) => {
    try {
      const response = await axios.post('/api/signup', { ...userData, password }); // Replace with your API endpoint
      setUser(response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {
      throw new Error('Signup failed');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 