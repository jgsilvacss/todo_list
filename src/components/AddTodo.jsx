import React, { useState } from "react";

const AddTodo = ({ onAddTask }) => {
  const [newTaskText, setNewTaskText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(newTaskText);
    setNewTaskText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
