import React, { useState } from "react";

function TodoTable({ date }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleInputChange = (event) => {
    if (event.target.name === "todo") {
      setNewTodo(event.target.value);
    } else if (event.target.name === "content") {
      setNewContent(event.target.value);
    }
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "" && newContent.trim() !== "") {
      const newTask = {
        todo: newTodo,
        content: newContent,
      };
      setTodos([...todos, newTask]);
      setNewTodo("");
      setNewContent("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-table">
      <h2>Todo Table for {date.toDateString()}</h2>
      <div className="form">
        <div>
          <label htmlFor="todo">Todo:</label>
          <input
            type="text"
            id="todo"
            name="todo"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Enter a new task"
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <input
            type="text"
            id="content"
            name="content"
            value={newContent}
            onChange={handleInputChange}
            placeholder="Enter content"
          />
        </div>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((task, index) => (
          <li key={index}>
            <h3>{task.todo}</h3>
            <p>{task.content}</p>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoTable;
