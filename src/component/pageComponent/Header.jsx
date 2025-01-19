
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaSignOutAlt, FaComment } from "react-icons/fa"; 
import { PiShootingStar } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { LuMenu } from "react-icons/lu";
import { setMobileSidebar } from "../../redux/reusableData/action";
import Sidebar from "./Sidebar";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Header = () => {
  const dispatch=useDispatch()
  const location = useLocation();
  const isBeforeLoginPage = location.pathname == "/"
  const navigate = useNavigate();
  const {showSidebar,hideFirstSidebar,halfSidebar,isOpenMobileSidebar}=useSelector((state)=>state?.reusableReducer)
  
  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleSignupRedirect = () => {
    navigate('/sign-up');
  };


const handleMobileSidebar=()=>{
  dispatch(setMobileSidebar(true));

}

const handleCloseMobileSidebar=()=>{
  dispatch(setMobileSidebar(false));

}

  return (
    <div className="w-full bg-[#18181B] flex items-center justify-center overflow-hidden">
      <div className="max-w-[1500px] w-full"> 

      {isBeforeLoginPage ? (
        <div className="flex justify-between w-full items-center bg-[#18181B] p-2">
          <div className="lg:contents hidden">
            <p className="w-full"></p>
          </div>
          <div className="text-white w-full flex flex-col items-center justify-center text-2xl font-bold">
            <p className="text-3xl lg:text-4xl">
              W<span className="text-blue-500">O</span>W{" "}
            </p>
            <span className="text-xs lg:text-lg text-white">VEGAS</span>
          </div>
          <div className="lg:contents hidden">
            <div className="w-full flex items-center justify-center">
              <button
                onClick={handleLoginRedirect}
                className="duration-500 ease-in-out text-white p-3 w-[120px] rounded-[7px] transition"
              >
                Login
              </button>
              <button
                onClick={handleSignupRedirect}
                className="bg-[#16A349] hover:bg-[#16803C] duration-500 ease-in-out text-white p-3 w-[140px] rounded-[7px] transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between bg-[#202024] px-2 lg:px-10 p-1 md:p-2">
          {/* Logo Section */}

       {/* below 1024 px showing  */}
           <div className="lg:hidden contents ">
          <div className="flex items-center    w-full gap-3">
 
          <button
          className={` bg-[#2B2B2F]  h-[35px] w-[35px] rounded-[6px]  ml-2 flex items-center justify-center`}
         
          onClick={handleMobileSidebar}
        >
         <LuMenu style={{fontSize:"23px",color:"#3B81F6"}} />
        </button>

            <div className="bg-[#37373A] h-[30px] w-[2px]"></div>

            <div className="text-blue-500 bg-[#2B2B2F]  p-2 h-[35px] w-[37px] flex items-center justify-center rounded-[8px]">
              <FaComment />
            </div>
          </div>
          </div>


          <div className="text-white  flex flex-col justify-center lg:justify-end  items-center lg:items-start  w-full   text-xl font-bold">
            <p className="text-3xl">
              W<span className="text-blue-500">O</span>W
            </p>
            <span className="text-xs text-white lg:pl-[20px]">VEGAS</span>
          </div>

          {/* Amount Display */}
          <div className="flex items-center   justify-end lg:justify-center w-full gap-2">
            <div className="flex items-center bg-[#2B2B2F] gap-2 sm:w-[200px] h-[36px] justify-between text-white px-2 md:px-4 py-2 rounded-[12px] md:rounded-lg">
              <p className="w-[20px] sm:w-[25px] flex items-center justify-center font-bold h-[20px] sm:h-[25px] rounded-[50%] text-xs text-[#7583ed] bg-[#003FFF] border-2 border-[#5E72FE]">
                W
              </p>
              <span className="text-[10px] sm:text-sm">$150,000.00</span>
            </div>
            <div className=" hidden sm:contents">
            <div className="bg-[#F5960F] p-2 h-[38px] w-[40px] flex items-center justify-center rounded-[10px]">
              <PiShootingStar style={{ color: "white",fontSize:"20px" }} />
            </div>
            </div>
            
          </div>

       {/* above 1024 px showing  */}

         <div className="hidden  lg:contents">
          <div className="flex items-center  justify-end w-full gap-2">
            <div className="text-blue-500 bg-[#2B2B2F] p-2 h-[35px] w-[37px] flex items-center justify-center rounded-[8px]">
              <FaSearch />
            </div>

            <div className="text-blue-500 bg-[#2B2B2F] p-2 h-[35px] w-[37px] flex items-center justify-center rounded-[8px]">
              <FaUser />
            </div>

            <div className="text-blue-500 bg-[#2B2B2F] mr-2 p-2 h-[35px] w-[37px] flex items-center justify-center rounded-[8px]">
              <FaSignOutAlt />
            </div>

            <div className="bg-[#37373A] h-[30px] w-[2px]"></div>

            <div className="text-blue-500 bg-[#2B2B2F] ml-2 p-2 h-[35px] w-[37px] flex items-center justify-center rounded-[8px]">
              <FaComment />
            </div>
            </div>
          </div>
        </div>
      )}

      {isOpenMobileSidebar&&<div className="flex  ">
     <div className="fixed z-50  duration-500 ease-in-out w-[75%] sm:w-[40%] opacity-1  top-0">
        <Sidebar/>
        <div
        onClick={handleCloseMobileSidebar}
         className="w-[25%]  sm:w-[60%] h-[100vh] bg-opacity-75 backdrop-blur-[10px] fixed right-0 top-0 z-[10000]">
          <div className="w-full flex items-center  mt-3 ml-3">
          <button
           
            className={`transform bg-[#242427] text-blue-500  h-[40px] w-[40px] flex items-center justify-center rounded-[6px] shadow-lg z-10`}
          >
            <MdKeyboardArrowLeft fontSize={"30px"} />
          </button>
          </div>
        </div>


      </div>
      </div>
      }
    </div>
    </div>

  );
};

export default Header;

