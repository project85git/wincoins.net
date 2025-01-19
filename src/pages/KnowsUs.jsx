import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const KnowsUs = () => {

    const location = useLocation();
    const data = location.state; // This will contain the data sent from the previous component

    useEffect(()=>{
        console.log(data,"data")
    },[location])


    const contactUsData=data?.data[0]
    console.log(contactUsData?.qna,"contactUsData")
  return (
    <div className='flex flex-col w-[90%] md:w-[60%] text-white py-3 md:my-10 m-auto  gap-2'>

  <p className='text-[white] text-2xl underline'>{contactUsData?.title}</p>
  <p className='text-[white]  text-sm'>{contactUsData?.description}</p>

   {contactUsData?.qna?.map((item)=>{
    return <ul>
        <li className='text-lg' key={item.id}>{item.question}</li>
        <p
          className="text-gray-400 text-[12px] leading-7 font-semibold mt-0"
          dangerouslySetInnerHTML={{ __html:item.answer }}
        />

    </ul>
   })}
    </div>
  )
}

export default KnowsUs