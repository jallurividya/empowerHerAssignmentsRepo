import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => setTodos(data.slice(0, 10)))
    }, [])
    function handleLogout() {
        localStorage.removeItem("isLogged")
        navigate("/login")
    }
    return (
        <>
            <h2>Todos list</h2>
            <button onClick={handleLogout}>Logout</button>
            {todos.map(todo => (
                <div
                    key={todo.id}
                    onClick={() => navigate(`/todos/${todo.id}`)}
                    className='todoItem'
                >
                    <p>{todo.title}</p>
                </div >
            ))}
        </>
    )
}
export default Todos