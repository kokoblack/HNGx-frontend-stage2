import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/atom ui/Card'
import Logo from './components/atom ui/Logo'
import Hero from './components/micro ui/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Card/>
      {/* <Logo/> */}
      <Hero/>
    </div>
  )
}

export default App
