import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
    const [title, setTitle] = useState("")
    const { addTodo } = useContext(TodoContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(title)
        setTitle("")
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>

            <input type='text' placeholder='Enter todo' value={title}
                onChange={(e) => setTitle(e.target.value)} style={{ padding: "8px", width: "70%" }} />

            <button type='submit' style={{ padding: "8px 12px", marginLeft: "5px" }}>Add</button>
        </form>
    )
}

export default AddTodo