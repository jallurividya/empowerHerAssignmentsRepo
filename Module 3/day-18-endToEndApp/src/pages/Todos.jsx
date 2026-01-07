import { useState, useEffect } from "react";
import Sidebar from "../components/layout/Sidebar";
import TodoList from "../components/todos/TodoList";
import AddTodo from "../components/todos/AddTodo";
import { useAuth } from "../context/AuthContext";
import * as todoService from "../services/todo.service";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Todos() {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [refreshFlag, setRefreshFlag] = useState(false);

  // Load todos from Firestore
  const loadTodos = async () => {
    if (!user) return;
    try {
      const data = await todoService.getTodos(user.uid);
      setTodos(data);
    } catch (err) {
      console.error("Error loading todos:", err);
    }
  };

  // Reload todos when user or refreshFlag changes
  useEffect(() => {
    loadTodos();
  }, [user, refreshFlag]);

  const refreshTodos = () => setRefreshFlag((prev) => !prev);

  return (
    <>
      <Navbar />
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <Sidebar todos={todos} selectedId={selectedId} setSelectedId={setSelectedId} />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Filter Buttons */}
          <div className="flex gap-2 mb-4">
            {["all", "completed", "pending"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded ${filter === f
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Add Todo Input */}
          <AddTodo refresh={refreshTodos} />

          {/* Todo List */}
          <TodoList todos={todos} filter={filter} refresh={refreshTodos} selectedId={selectedId} setSelectedId={setSelectedId} />
        </div>
      </div>
      <Footer />
    </>
  );
}