import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>

        <Sidebar />

        <Display />

         <Player/>
      </div>

    </div>
    </>
  ) 
}

export default App
