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


// import { useEffect, useState } from "react";
// import { useAuth } from "../../context/AuthContext";
// import * as todoService from "../../services/todo.service";
// import TodoItem from "./TodoItem";
// import UpdateTodoModal from "./UpdateTodoModal";

// export default function TodoList({ filter }) {
//   const { user } = useAuth();
//   const [todos, setTodos] = useState([]);
//   const [editTodo, setEditTodo] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const loadTodos = async () => {
//     if (!user) return;
//     setLoading(true);
//     try {
//       const data = await todoService.getTodos(user.uid);
//       setTodos(data);
//     } catch (err) {
//       console.error("Failed to load todos:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user) loadTodos();
//   }, [user]);

//   const filteredTodos = todos.filter((t) => {
//     if (filter === "completed") return t.completed;
//     if (filter === "pending") return !t.completed;
//     return true;
//   });

//   return (
//     <main className="flex-1 p-6">
//       <div className="space-y-4">
//         {loading ? (
//           <p>Loading todos...</p>
//         ) : filteredTodos.length === 0 ? (
//           <p>No todos available</p>
//         ) : (
//           filteredTodos.map((todo) => (
//             <TodoItem
//               key={todo.id}
//               todo={todo}
//               refresh={loadTodos}
//               onEdit={setEditTodo}
//             />
//           ))
//         )}
//       </div>

//       {editTodo && (
//         <UpdateTodoModal
//           todo={editTodo}
//           close={() => setEditTodo(null)}
//           refresh={loadTodos}
//         />
//       )}
//     </main>
//   );
// }
