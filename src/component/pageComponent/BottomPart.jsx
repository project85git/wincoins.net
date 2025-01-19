import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Telegram } from '../../assets/svg/Svg';
import { fetchGetRequest } from '../../apiRequest.js/apiRequest';
import { useNavigate } from 'react-router-dom';

const BottomPart = () => {
    // 
    const {socailMediaData,showSidebar,hideFirstSidebar,halfSidebar,isOpenMobileSidebar}=useSelector((state)=>state?.reusableReducer)
console.log(socailMediaData,"social media data")
const [loading,setLoading]=useState(false)
const [footerData,setFooterData]=useState([])
const [partners,setPaartners]=useState([])
const [payments,setPayments]=useState([])
const [footerText,setFooterText]=useState([])
const [footerCategory,setFooterCatgeory]=useState([])
const [footerLoading,setFooterLoading]=useState(false)
const navigate=useNavigate()
const getFooterData = async () => {
  setLoading(true);
  try {
    let response = await fetchGetRequest(`/api/footer-info/get-footer-info?site_auth_key=${import.meta.env.VITE_API_SITE_AUTH_KEY}`);
    setFooterData(response?.data?.data);
    setPaartners(response?.data?.partners)
    setPayments(response?.data?.payments)
    setFooterText(response?.data?.footer_text)
    setLoading(false)
  } catch (error) {
    console.error("Error getting payment data:", error);
    // toast({
    //   title: error.message || 'Somthing went wrong !',
    //   status: "error",
    //   duration: 2000,
    //   isClosable: true,
    //   position: "top",
    // });

    setLoading(false);
  }
};

 
const FooterCategoryData = async () => {
  setFooterLoading(true);
        try {
          let response = await fetchGetRequest(`/api/navigation/get-all-navigation?site_auth_key=${import.meta.env.VITE_API_SITE_AUTH_KEY}`);
          setFooterCatgeory(response?.data);
          setFooterLoading(false);
        } catch (error) {
          console.error("Error getting payment data:", error);
        //   toast.error(error?.response?.data?.message);
    
        setFooterLoading(false);
        }
      };


useEffect(()=>{
  getFooterData()
  FooterCategoryData()
},[])
  const socailMedia = [
    {
      id: 1,
      title: "FaceBook",
      icon: <FaFacebook  />,
      link:socailMediaData?.facebook
    },
    {
      id: 2,
      title: "Instagram",
      icon: <FaInstagram />,
      link:socailMediaData?.instagram

    },
    {
      id: 3,
      title: "Telegram",
      icon: <FaTelegram />,
      link:socailMediaData?.teligram

    },
    {
      id: 4,
      title: "Twitter",
      icon: <FaTwitter />,
      link:socailMediaData?.twitter

    },
  ];

  const handleKnowUs=(route,data)=>{
    navigate(route, { state: data });

    
  }
  return (
    <footer className="bg-[#202024] w-full ">
     <div className=' max-w-[1500px] w-full m-auto text-gray-400 text-sm pt-8 pb-4 px-6'>

      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left Section */}
        <div className="mb-6  flex  flex-col gap-3 justify-center items-center md:justify-start md:items-start">
        <div className="text-white  flex flex-col items-center justify-center text-2xl font-bold">
            {/* <p className="text-3xl lg:text-4xl">
              W<span className="text-blue-500">O</span>W{" "}
            </p>
            <span className="text-xs lg:text-lg text-white">VEGAS</span> */}
            <img  src={socailMediaData?.site_logo} className='w-[120px] '/>
          </div>
          <div className="flex space-x-4">
           
          {socailMedia?.map((item) => (
              <a
              key={item?.id} 
              href={item?.link} 
              target="_blank" 
              rel="noopener noreferrer" 
            className="cursor-pointer">{item?.icon}</a>
            ))}
            
          </div>
          
          <p className="mb-2 text-xs">
          © 2024 WOW Vegas | All Rights Reserved.
        </p>
        </div>

        {/* Middle Section */}
        <div className="flex gap-[70px] mb-6  text-xs lg:mb-0">
  {Array.from({ length: 3 }, (_, index) => {
    const startIndex = index * (footerCategory?.length/3); // Multiply index by 6 to get the start index
    const endIndex = startIndex + (footerCategory?.length/3); // End index is start index + 6
    const sectionItems = footerCategory.slice(startIndex, endIndex); // Slice the categories

    return ( 
    <div key={index}>
       
        <ul className="space-y-1">
          {sectionItems.map(item => (
            <div key={item.id}>
              <p onClick={()=>handleKnowUs(item?.name,item)} className="duration-700 cursor-pointer ease-in-out hover:text-white">{item?.name}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  })}
  <div>
    </div></div>
    
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-6 pt-4">
      
        <p className="mb-2">
          WOWVegas.com is owned and operated by MW SERVICES LIMITED incorporated and registered in Gibraltar with company number 120828 whose registered office is at 5-9 Main Street, Gibraltar GX11 1AA.
        </p>
        <p className="flex items-center">
          <span className="text-lg mr-2">🔞</span> Persons under the age of 18 are not permitted to create accounts and/or participate in the games.
        </p>
      </div>
     </div>

    </footer>
  );
};

export default BottomPart;
