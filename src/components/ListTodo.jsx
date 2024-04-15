import React from "react";

const ListTodo = ({ todos, onTodoChange, onDeleteTask }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ul key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onTodoChange(index)}
          />
          {todo.text}
          <button onClick={() => onDeleteTask(index)}>Delete</button>
        </ul>
      ))}
    </ul>
  );
};

export default ListTodo;
