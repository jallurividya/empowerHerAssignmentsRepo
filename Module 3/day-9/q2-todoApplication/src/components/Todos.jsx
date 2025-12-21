import React from 'react'
import TodoContext from '../context/TodoContext'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const Todos = () => {
  return (
    <TodoContext>
        <div style={{maxWidth:"500px", margin:"50px auto", textAlign:"center"}}>
            <h2>Todo Application</h2>
            <AddTodo />
            <TodoList />
        </div>
    </TodoContext>
  )
}

export default Todos