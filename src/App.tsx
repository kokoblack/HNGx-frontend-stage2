import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/atom ui/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Card/>
    </div>
  )
}

export default App
