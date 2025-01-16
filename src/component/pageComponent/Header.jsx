import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate=useNavigate()
    const handleLoginRedirect=()=>{
        navigate('/login')
    }
    const handleSignupRedirect=()=>{
        navigate('/sign-up')
    }
  return (
    <div className="w-full bg-[#18181B]">
      <div class="flex justify-between w-full items-center bg-[#18181B] p-2">
        <div className="lg:contents hidden">
          <p className="w-full  "></p>
        </div>
        <div class="text-white w-full  flex flex-col items-center justify-center  text-2xl font-bold">
          <p className=" text-3xl lg:text-4xl">
            W<span className="text-blue-500">O</span>W{" "}
          </p>
          <span class="text-xs lg:text-lg text-white">VEGAS</span>
        </div>
        <div className="lg:contents hidden">
          <div className="w-full flex items-center justify-center ">
            <button onClick={handleLoginRedirect} class=" duration-500 ease-in-out text-white  p-3 w-[120px] rounded-[7px] transition">
              Login
            </button>
            <button onClick={handleSignupRedirect}  class="bg-[#16A349] hover:bg-[#16803C] duration-500 ease-in-out text-white  p-3 w-[140px] rounded-[7px] transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
