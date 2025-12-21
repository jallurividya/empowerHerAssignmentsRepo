import React, { createContext, useState } from 'react'

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        if (!title.trim())
            return
        const newTodo = { id: Date.now(), title }
        setTodos([...todos, newTodo])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id))
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider