import "./TasksList.scss";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import React from "react";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasksList);

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.done && !b.done) return 1;
    if (!a.done && b.done) return -1;
    if (a.dateDone && b.dateDone) {
      return new Date(b.dateDone) - new Date(a.dateDone);
    }
    return 0;
  });

  return (
    <div className="tasks-list" data-testid="tasks-list">
      {sortedTasks.length === 0 && <h4>Brak zadań.</h4>}
      {sortedTasks.map((task) => (
        <Task key={task.id} id={task.id} text={task.text} done={task.done} />
      ))}
    </div>
  );
};

export default TasksList;
