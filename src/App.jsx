import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/pageComponent/Header'
import AllRoute from './allRoute/AllRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col w-full '>
      <div className='w-full'>
      <Header/>
      </div>
      <div>
      <AllRoute/>

      </div>

    </div>
  )
}

export default App
