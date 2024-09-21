import React from "react";
import { useTasks } from "../../../contexts/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { taskList } = useTasks();

  return (
    <div>
      <h2>Task List</h2>
      {taskList.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
