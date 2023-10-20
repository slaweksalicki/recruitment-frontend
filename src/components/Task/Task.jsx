import "./Task.scss";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../../reducers/tasksListSlice";
import { useState } from "react";

const Task = ({ id, text, done }) => {
  const [exit, setExit] = useState(false);

  const dispatch = useDispatch();

  const handleStatusChange = () => {
    dispatch(completeTask(id));
  };

  const handleDeleteTask = () => {
    setExit(true);

    setTimeout(() => {
      dispatch(deleteTask(id));
    }, "400");
  };

  return (
    <div
      className={`task ${done ? "task-done" : ""} task-enter ${
        exit ? "task-exit" : ""
      }`}
    >
      <div className="task-status" onClick={handleStatusChange}>
        {done ? (
          <CheckCircleOutlineOutlinedIcon className="task-done" />
        ) : (
          <CircleOutlinedIcon className="task-notdone" />
        )}
      </div>
      <span className={`task-text${done ? " linethrough" : ""}`}>{text}</span>
      <ClearOutlinedIcon className="task-delete" onClick={handleDeleteTask} />
    </div>
  );
};

export default Task;
