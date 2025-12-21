import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoItem = ({ id }) => {
    const {todos, deleteTodo} = useContext(TodoContext)
    const todo = todos.find((t) => t.id===id)

    if(!todo)
        return null

  return (
    <li style={{display:"flex", justifyContent:"space-between", padding:"8px", marginBottom:"10px", border:"1px solid #ccc", borderRadius:"4px"}}>
        <span>{todo.title}</span>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem