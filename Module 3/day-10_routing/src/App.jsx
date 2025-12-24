import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Todos from './Todos'
import NotFound from './NotFound'
const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/aboutus">About</Link>
        <Link to="/todos">Todos</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App