
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaSignOutAlt, FaComment } from "react-icons/fa"; 
import { PiShootingStar } from "react-icons/pi";

const Header = () => {
  const isAuth = localStorage.getItem('isUserAuth');
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleSignupRedirect = () => {
    navigate('/sign-up');
  };

  return (
    <div className="w-full bg-[#18181B]">
      {!isAuth ? (
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
        <div className="flex items-center justify-between bg-[#202024] px-10 p-2">
          {/* Logo Section */}
          <div className="text-white flex flex-col items-center justify-center text-xl font-bold">
            <p className="text-2xl lg:text-3xl">
              W<span className="text-blue-500">O</span>W
            </p>
            <span className="text-xs text-white">VEGAS</span>
          </div>

          {/* Amount Display */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#2B2B2F] w-[200px] h-[40px] justify-between text-white px-4 py-2 rounded-lg">
              <p className="w-[25px] flex items-center justify-center font-bold h-[25px] rounded-[50%] text-xs text-[#7583ed] bg-[#003FFF] border-2 border-[#5E72FE]">
                W
              </p>
              <span className="text-sm">$150,000.00</span>
            </div>
            <div className="bg-[#F5960F] p-2 h-[38px] w-[40px] flex items-center justify-center rounded-[10px]">
              <PiShootingStar style={{ color: "white",fontSize:"20px" }} />
            </div>
          </div>

          {/* Icon Buttons Section using React Icons */}
          <div className="flex items-center gap-2">
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
      )}
    </div>
  );
};

export default Header;

