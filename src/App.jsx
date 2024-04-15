import React, { useState, useEffect } from "react";
import ListTodo from "./components/ListTodo";
import AddTodo from "./components/AddTodo";

const App = () => {
  const initialTodos = [
    { text: "My first todo", completed: false },
    { text: "My second todo", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleTodoChange = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  };

  const addTask = (newTaskText) => {
    const newTodos = [...todos, { text: newTaskText, completed: false }];
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, idx) => idx !== index);
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  };

  const saveToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div>
      <AddTodo onAddTask={addTask} />
      <ListTodo
        todos={todos}
        onTodoChange={handleTodoChange}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
