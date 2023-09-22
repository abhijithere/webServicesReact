import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/services' Component={Services} />
        <Route exact path='/contact' Component={Contact} />
      </Routes>
    </>
  )
}

export default App
