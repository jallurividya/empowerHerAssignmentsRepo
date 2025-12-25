import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Todos from './Pages/Todos'
import ProtectRoute from './ProtectRoute'
import TodoDetails from './Pages/TodoDetails'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todos" element={
          <ProtectRoute>
            <Todos />
          </ProtectRoute>
        }/>
        <Route path='/todos/:todoId' element={
          <ProtectRoute>
            <TodoDetails />
          </ProtectRoute>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App