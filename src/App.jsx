import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/pageComponent/Header'
import AllRoute from './allRoute/AllRoute'
import Footer from './component/pageComponent/Footer'
import { useLocation } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  const isHeaderFooterShow =
    location.pathname !== "/login" &&
    location.pathname !== "/sign-up" &&
    location.pathname !== "/reset-password";
console.log(isHeaderFooterShow,"isHeaderFooterShow")
  return (
    <div className='flex flex-col  w-full '>
      {isHeaderFooterShow&&<div className='w-full'>
      <Header/>
      </div>}
      <div className='w-[100%] flex items-center justify-center'>
      <AllRoute/>

      </div>

      {isHeaderFooterShow&&<div className='lg:hidden contents'>
        <Footer/>
      </div>}

    </div>
  )
}

export default App
