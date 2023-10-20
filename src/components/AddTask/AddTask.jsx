import "./AddTask.scss";
import Button from "../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../reducers/tasksListSlice";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask({ id: uuidv4(), text: text }));
    event.target.reset();
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <input
          className="add-input"
          required
          type="text"
          placeholder="Wpisz nazwę zadania"
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" text="Dodaj" />
      </form>
    </div>
  );
};

export default AddTask;
