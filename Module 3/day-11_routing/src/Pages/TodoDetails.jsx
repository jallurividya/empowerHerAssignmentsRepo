import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const TodoDetails = () => {
    const { todoId } = useParams()
    const [todo, setTodo] = useState(null)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [todoId])
    if (!todo) {
        return <h3>Loading...</h3>
    }
    return (
        <>
            <h2>Todo Details</h2>
            <p><strong>Todo ID:</strong> {todo.id}</p>
            <p><strong>Title:</strong> {todo.title}</p>
            <p>
                <strong>Status:</strong>{" "}
                {todo.completed ? "Completed ✅" : "Not Completed ❌"}
            </p>
        </>
    )
}
export default TodoDetails
