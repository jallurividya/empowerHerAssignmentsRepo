import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos()
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <div key={todo.id} style={{ marginBottom: "10px" }}>
          <p>
            <strong>{todo.title}</strong> <br />
            Status: {todo.completed ? "Completed ✅" : "Pending ❌"}
          </p>
          <Link to={`/todo/${todo.id}`}>View Details</Link>
          <hr />
        </div>
      ))}
    </div>
  );
};
export default TodoList;
