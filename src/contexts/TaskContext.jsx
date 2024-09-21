import React, { createContext, useState, useContext } from "react";
import tasks from "../data/task";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(tasks);

  const addTask = (task) => {
    setTaskList([...taskList, { ...task, id: Date.now() }]);
  };

  const updateTask = (updatedTask) => {
    setTaskList(
      taskList.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ taskList, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
