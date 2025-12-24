import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data.slice(0, 10)))
    }, [])
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Todos List</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                {todos.map(todo => (
                    <div key={todo.id} style={{ padding: "10px", border: "1px solid black", borderRadius: "2px", marginBottom: "5px" }}>
                        {todo.title} <br /> {todo.completed ? "✅ Done" : "❌ Not Done"}
                    </div>
                ))}

            </div>
        </>
    )
}

export default Todos