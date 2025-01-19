import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/pageComponent/Header'
import AllRoute from './allRoute/AllRoute'
import Footer from './component/pageComponent/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import Sidebar from './component/pageComponent/Sidebar'
import { fetchGetRequest } from './apiRequest.js/apiRequest'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGameCategory, fetchProviderData, fetchSocialMediaData, paymentCurrencyData, singleUserDetails } from './redux/reusableData/action'
import BottomPart from './component/pageComponent/BottomPart'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  const isAuth =localStorage.getItem('isUserAuth')
const [loading,setLoading]=useState(false)
const {showSidebar,hideFirstSidebar,halfSidebar,isOpenMobileSidebar}=useSelector((state)=>state?.reusableReducer)
  const navigate=useNavigate()

const dispatch=useDispatch()
const getCatgoryList = async () => {
  try {
    const response = await fetchGetRequest(
      `/api/game-navigation/get-all-game-navigation?site_auth_key=${
        import.meta.env.VITE_API_SITE_AUTH_KEY
      }`
    );
    const data = response.data;
    const filter = response.data.filter((category) => category.status);
    dispatch(fetchGameCategory(filter));
  
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

const fetchUserDetails = async () => {
  try {
    const response = await fetchGetRequest(`/api/user/get-single-user?site_auth_key=${import.meta.env.VITE_API_SITE_AUTH_KEY}`);
    dispatch(singleUserDetails(response?.data));
    localStorage.setItem('SingleUserDetails', JSON.stringify(response?.data))

    if (response?.data?.is_blocked === true) {
      dispatch(logout());
    }
   
  } catch (error) {
    
  }
};
  const getSocailMedia = async () => {
    setLoading(true);
    try {
      let response = await fetchGetRequest(
        `/api/setting/get-setting/342h2b4j2bn2?site_auth_key=${
          import.meta.env.VITE_API_SITE_AUTH_KEY
        }`
      );

      setLoading(false);
      dispatch(fetchSocialMediaData(response?.data));
    } catch (error) {
      console.error("Error getting payment data:", error);
      setLoading(false);
    }
  };
  const getAllPaymentCurrency = async () => {
    try {
      let response = await fetchGetRequest(
        `/api/auto-payment/get-passimo-pay-currencies?site_auth_key=${
          import.meta.env.VITE_API_SITE_AUTH_KEY
        }`
      );
      const data = response?.data;
      dispatch(paymentCurrencyData(data));
    } catch (error) {
      console.error("Error getting payment data:", error);
      //   toast.error(error?.response?.data?.message);
    }
  };

  const getAllCasinoProvider = async () => {
    let url = `/api/secondary-provider/get-provider?limit=200&status=true&site_auth_key=${
      import.meta.env.VITE_API_SITE_AUTH_KEY
    }`;

    try {
      let response = await fetchGetRequest(url);
      const data = response.data;
      const receivedData = response?.data;
      dispatch(fetchProviderData(receivedData));
    } catch (error) {
      console.log(error);
    }
  };


useEffect(()=>{
  getCatgoryList()
  getAllCasinoProvider()
  getAllPaymentCurrency()
  getSocailMedia()
  fetchUserDetails()
  
},[])

const isHeaderFooterShow =
location.pathname !== "/" &&
  location.pathname !== "/login" &&
  location.pathname !== "/sign-up" &&
  location.pathname !== "/reset-password";


  const isLoginAndReigiter =location.pathname !== "/login" &&location.pathname !== "/sign-up" &&
    location.pathname !== "/reset-password";

  return (
    <div className=' lg:flex '>
     {(isHeaderFooterShow)&& <div className={` hidden lg:contents ${showSidebar?"w-[19.5%]":""} `}>
        <Sidebar/>
      </div>}
      <div className={`  ${(showSidebar&&isHeaderFooterShow)?"lg:w-[80%]":"w-full"} `}>
      <div className=''>
      {isLoginAndReigiter&&<Header/>}
      </div>
      <div className='w-[100%] flex items-center justify-center'>
      <AllRoute/>

      </div>
    <div className='lg:hidden contents'>
       {isLoginAndReigiter&& <Footer/>}
      </div>
     {isLoginAndReigiter&& <div className='w-full'>
        <BottomPart/>
      </div>}
      </div>


      

    </div>
  )
}

export default App
