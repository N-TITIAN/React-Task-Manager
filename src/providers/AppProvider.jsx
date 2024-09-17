import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { TaskProvider } from "../contexts/TaskContext";
import { ThemeProvider } from "../contexts/ThemeContext";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <TaskProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </TaskProvider>
    </AuthProvider>
  );
};

export default AppProvider;
