import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router'
import Home from './pages/Home'
import Sobre from './pages/Sobre'

export default function App() {
  return (
    <div id='container'>
      <h1>Sejam bem vindos ao react</h1>
      <nav>
        <Link to='/' >Home</Link>
        <Link to='/sobre' >Sobre</Link>
      </nav>
      <hr />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
      </Routes>
    </div>
  )
}
