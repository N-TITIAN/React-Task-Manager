import React, { createContext, useState, useContext, useEffect } from "react";

// You'll need to import your users data or replace this with an API call
import users from "../data/users";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check for saved user in localStorage on initial load
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      const { password, ...userWithoutPassword } = user;
      setCurrentUser(userWithoutPassword);
      localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const register = (username, password, name) => {
    // Check if username already exists
    if (users.some((u) => u.username === username)) {
      return false;
    }
    // In a real application, you would send this data to a backend
    const newUser = {
      id: users.length + 1,
      username,
      password,
      name,
    };
    users.push(newUser);
    login(username, password);
    return true;
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
