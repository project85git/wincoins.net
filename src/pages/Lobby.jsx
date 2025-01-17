import React from 'react'
import banner from '../assets/images/bonusbanner.jpg'
import AllGameCategory from '../component/pageComponent/AllGameCategory'
const Lobby = () => {
  return (
    <div className='bg-[#18181B] flex flex-col max-w-[1400px] p-4 px-[30px]  w-full'>
        <p className='text-[#F3F4F6] text-sm'>Welcome back, <span className='text-[#5FA5F9] font-bold'>Username!</span></p>
    <div className='mt-5'>
        <div>
            <img src={banner} alt="banner" className='w-[350px] rounded-lg cursor-pointer' />
        </div>

    </div>
    <div className='w-full mt-5'>
        <AllGameCategory/>
    </div>
    </div>
  )
}

export default Lobby