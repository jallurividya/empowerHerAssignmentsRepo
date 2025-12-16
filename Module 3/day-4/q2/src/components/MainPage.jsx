import React from 'react'
import Content from './Content'
import Navbar from './Navbar'
import Footer from './Footer'

const MainPage = () => {
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <Navbar />
        <Content />
        <Footer />
    </div>
  )
}

export default MainPage