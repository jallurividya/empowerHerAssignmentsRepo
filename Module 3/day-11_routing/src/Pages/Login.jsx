import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    function handleLogin() {
        if (!email || !password) {
            setError("All fields are required")
            return
        }
        if (email === "admin@gmail.com" && password === "admin@123") {
            navigate("/todos")
            localStorage.setItem("isLogged", "true")
        }
        else {
            setError("Invalid email or password")
        }
    }
    return (
        <div className='loginPage'>
            <div className='loginCard'>
                <h2>Login Page</h2>
                <input type="email" value={email} placeholder='enter a valid email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} placeholder='Enter the password' onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
                {error && <p>{error}</p>}
            </div>
        </div>
    )
}

export default Login