import TodoItem from "./TodoItem";
import UpdateTodoModal from "./UpdateTodoModal";
import { useState } from "react";

export default function TodoList({ todos = [], filter, refresh }) {
  const [editTodo, setEditTodo] = useState(null);

  const filteredTodos = todos.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div className="mt-4 space-y-3">
      {filteredTodos.length === 0 && (
        <p className="text-gray-400">No todos found</p>
      )}

      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          refresh={refresh}
          onEdit={setEditTodo}
        />
      ))}

      {editTodo && (
        <UpdateTodoModal
          todo={editTodo}
          close={() => setEditTodo(null)}
          refresh={refresh}
        />
      )}
    </div>
  );
}
