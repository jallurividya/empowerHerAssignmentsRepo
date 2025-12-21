import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos } = useContext(TodoContext);

    if(todos.length === 0)
        return <p>No todos yet!</p>

  return (
    <ul style={{listStyle:"none", padding:"0px"}}>
        {todos.map((todo) => (
            <TodoItem key={todo.id} id={todo.id} />
        ))}
    </ul>
  )
}

export default TodoList