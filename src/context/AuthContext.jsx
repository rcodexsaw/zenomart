import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('zeno_current_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 1. REGISTER FUNCTION
  const register = (fullName, email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem('zeno_registered_users')) || [];

    const userExists = existingUsers.some((u) => u.email.toLowerCase() === email.toLowerCase());

    if (userExists) {
      return { 
        success: false, 
        message: 'An account with this email address already exists. Please sign in.' 
      };
    }

    const newUser = { fullName, email, password };
    existingUsers.push(newUser);
    localStorage.setItem('zeno_registered_users', JSON.stringify(existingUsers));

    const loggedInUser = { name: fullName, email };
    setUser(loggedInUser);
    localStorage.setItem('zeno_current_user', JSON.stringify(loggedInUser));

    return { success: true };
  };

  // 2. LOGIN FUNCTION
  const login = (email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem('zeno_registered_users')) || [];

    const foundUser = existingUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: 'Invalid email or password. Please check your credentials or create a new account.',
      };
    }

    const loggedInUser = { name: foundUser.fullName, email: foundUser.email };
    setUser(loggedInUser);
    localStorage.setItem('zeno_current_user', JSON.stringify(loggedInUser));

    return { success: true };
  };

  // 3. LOGOUT FUNCTION
  const logout = () => {
    setUser(null);
    localStorage.removeItem('zeno_current_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);