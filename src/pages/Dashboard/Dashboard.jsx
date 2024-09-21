import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import DarkModeToggle from "../../components/DarkModeToggle";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <p>Dashboard</p>
      <h1>Welcome, {currentUser.name}</h1>
      <DarkModeToggle />
      <button onClick={logout}>Logout</button>
      <TaskFilter />
      <TaskList />
      <TaskForm />
    </div>
  );
};

export default Dashboard;
