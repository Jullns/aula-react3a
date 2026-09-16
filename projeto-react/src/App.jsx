import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='container'>
      <h1>Sejam bem vindos ao react</h1>
    </div>
  )
}
