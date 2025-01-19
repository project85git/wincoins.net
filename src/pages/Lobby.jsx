import React, { useEffect } from "react";
import banner from "../assets/images/bonusbanner.jpg";
import AllGameCategory from "../component/pageComponent/AllGameCategory";
import ProviderMapping from "../component/pageComponent/ProviderMapping";
import GameByCategory from "../component/gameComponent/GameByCategory";
import { useSelector } from "react-redux";
import { FaGift } from "react-icons/fa";
const Lobby = () => {
  const isAuth = localStorage.getItem("isUserAuth");

  const categoryData = useSelector(
    (state) => state?.reusableReducer?.gameCategory
  );
  console.log(categoryData, "cstegoryData");
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);
  return (
    <div className="bg-[#18181B] flex flex-col max-w-[1300px] p-6 px-[10px]  w-full">
      <p className="text-[#F3F4F6] text-sm">
        Welcome back,{" "}
        <span className="text-[#5FA5F9] font-bold">Username!</span>
      </p>
      <div className="mt-5 w-full">
        <div className="w-full">
          <img
            src={banner}
            alt="banner"
            className=" w-full sm:w-[350px] rounded-lg cursor-pointer"
          />
        </div>
      </div>
      <div className=" contents md:hidden">
      <div className="bg-gradient-to-r from-purple-600 to to-green-500 p-2 text-white rounded-[5px] mt-5 flex items-center gap-3">
              <div>
                <FaGift fontSize={"28px"} />
              </div>
              <div className="w-full">
                <p className="text-sm">0% | Daily Mission Reward</p>
                <div className="bg-[#118E86] h-2 rounded ">
                  <div className="bg-blue-500 h-2 rounded w-0"></div>
                </div>
                <p className="text-xs">SC 0.00 / SC 60</p>
              </div>
            </div>
      </div>
     
      <div className="w-full mt-5">
        <AllGameCategory />
      </div>
      <div className="mt-5 w-full">
        <ProviderMapping />
      </div>
      <div className="mt-5">
        {categoryData?.map((item, index) => {
          return (
            <div key={index}>
              <GameByCategory categoryData={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lobby;
