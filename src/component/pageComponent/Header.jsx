import React from 'react'

const Header = () => {
  return (
    <div className='w-full'>

    <div class="flex justify-between w-full items-center bg-gray-900 p-2">
        <p className='w-full '></p>
    <div class="text-white w-full  flex flex-col items-center justify-center  text-2xl font-bold">
        <p className='text-4xl'>W<span className="text-blue-500">O</span>W </p><span class="text-white">VEGAS</span>
    </div>
    <div className='w-full flex items-center justify-center '>
        <button class=" duration-500 ease-in-out text-white  p-3 w-[120px] rounded-[7px] transition">Login</button>
        <button  class="bg-[#16A349] hover:bg-[#16803C] duration-500 ease-in-out text-white  p-3 w-[140px] rounded-[7px] transition">Sign Up</button>
    </div>
</div>
</div>


  )
}

export default Header