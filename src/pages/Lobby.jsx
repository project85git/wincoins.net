import React from 'react'
import banner from '../assets/images/bonusbanner.jpg'
import AllGameCategory from '../component/pageComponent/AllGameCategory'
import ProviderMapping from '../component/pageComponent/ProviderMapping'
import GameByCategory from '../component/gameComponent/GameByCategory'
import { useSelector } from 'react-redux'
const Lobby = () => {
    const categoryData = useSelector(
        (state) => state?.reusableReducer?.gameCategory
      );
      console.log(categoryData, "cstegoryData");
    
  return (
    <div className='bg-[#18181B] flex flex-col max-w-[1300px] p-4 px-[10px]  w-full'>
        <p className='text-[#F3F4F6] text-sm'>Welcome back, <span className='text-[#5FA5F9] font-bold'>Username!</span></p>
    <div className='mt-5'>
        <div>
            <img src={banner} alt="banner" className='w-[350px] rounded-lg cursor-pointer' />
        </div>

    </div>
    <div className='w-full mt-5'>
        <AllGameCategory/>
    </div>
    <div className='mt-5 w-full'>
        <ProviderMapping/>
    </div>
    <div className='mt-5'>

    {categoryData?.map((item, index) => {
          return (
            <div key={index}  >
              <GameByCategory categoryData={item} />
            </div>
          );
        })}
    </div>

   
    </div>
  )
}

export default Lobby