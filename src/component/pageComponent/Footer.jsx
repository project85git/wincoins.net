import React from 'react'
import GlobalButton from '../mainComponent/GlobalButton'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate=useNavigate()
const isAuth =localStorage.getItem('isUserAuth')

    const handleLoginRedirect=()=>{
        navigate('/login')
        
    }
    const handleSignUpRedirect=()=>{
        navigate('/sign-up')
        
    }
  
  return (
    <div className='w-full'>
{!isAuth?<div className='flex items-center fixed bg-[#18181B] shadow-2xl p-4 bottom-0 w-full justify-between gap-4'>
        <GlobalButton borderRadius="6px" height={"45px"} fontWeight="700" width="100%" bgColor="#3B81F6" text="Login" onClick={handleLoginRedirect}  />
        <GlobalButton  borderRadius="6px" height={"45px"} fontWeight="700" width="100%" bgColor="#16A349" text="Sign Up" onClick={handleSignUpRedirect}  />

        </div>:""}
        
    </div>
  )
}

export default Footer