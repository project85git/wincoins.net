import React, { useState } from "react";
import { FaGift, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setShowSideBar } from "../../redux/reusableData/action";
import { formatText } from "../../utils/utils";
import star from "../../assets/images/star.png";
import { RiUserFill } from "react-icons/ri";
const Sidebar = () => {
  // Array of menu items
  const { showSidebar, hideFirstSidebar, halfSidebar, isOpenMobileSidebar } =
    useSelector((state) => state?.reusableReducer);

  const categoryData = useSelector(
    (state) => state?.reusableReducer?.gameCategory
  );
  const menuItems = [
    { label: "VIP Transfer Service", icon: "🎰" },

    { label: "RE-VIP", icon: "🎰" },
    { label: "24/7 Customer Help", icon: "🔵" },
    { label: "FAQs", icon: "🔥" },
  ];

  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(setShowSideBar(!showSidebar));
  };
  const [activeMode, setActiveMode] = useState("light");

  // Function to handle toggling
  const toggleMode = (mode) => {
    setActiveMode(mode);
  };

  return (
    <div
      style={{ width: isOpenMobileSidebar ? "100%" : "" }}
      className="scrollbar-stable overflow-y-scroll bg-[#202024]  scrollbar-thin scrollbar-thumb-[#323232] scrollbar-track-[#323232] flex sticky top-0 h-[100vh]"
    >
      {/* Sidebar */}

      <div
        style={{ width: isOpenMobileSidebar ? "100%" : "" }}
        className={` 
      
      ${
        showSidebar && !isOpenMobileSidebar ? "w-[280px]" : "w-[85px]"
      } bg-[#202024] text-white  transition-all p-1 duration-300  h-[90vh] lg:h-[100vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#323232] scrollbar-track-[#323232] scrollbar-stable`}
      >
        {/* Toggle Button */}
        {!isOpenMobileSidebar && (
          <button
            className={` bg-[#2B2B2F] ${
              showSidebar ? "w-[35px]" : "w-[80%]"
            } h-[35px] w-[35px] rounded-[6px] mt-2 ml-2 flex items-center justify-center`}
            onClick={handleSidebar}
          >
            <LuMenu style={{ fontSize: "23px", color: "#3B81F6" }} />
          </button>
        )}
        {isOpenMobileSidebar && (
          <div className="text-white w-full flex flex-col items-center justify-center text-2xl font-bold">
            <p className="text-3xl lg:text-4xl">
              W<span className="text-blue-500">O</span>W{" "}
            </p>
            <span className="text-xs lg:text-lg text-white">VEGAS</span>
          </div>
        )}

        {/* Content */}
        <div className="p-2  space-y-2">
          {/* Daily Mission Reward */}
          {showSidebar && (
            <div className="bg-gradient-to-r from-purple-600 to to-green-500 p-2 mt-2 rounded-[5px] flex items-center gap-3">
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
          )}

          {/* WOW Coins */}
          {showSidebar && (
            <div className="bg-[#2B2B2F] flex items-center gap-3 p-2 rounded-md">
              <div className="flex items-center gap-3">
                <p className="w-[25px] flex items-center justify-center font-bold h-[25px] rounded-[50%] text-xs text-[#7583ed] bg-[#003FFF] border-2 border-[#5E72FE]">
                  W
                </p>
                <div>
                  <p className="text-blue-400 text-xs">WOW Coins</p>
                  <p className="text-xs font-bold">150,000.00</p>
                </div>
              </div>
            </div>
          )}

          {/* Buy Coins */}
          <button
            className={`bg-[#F6910F] ${
              showSidebar ? "text-sm" : "text-xs"
            } font-bold text-sm py-[10px] px-4 w-full rounded-md`}
          >
            Buy {showSidebar && <span>Coins</span>}
          </button>

          <div className="bg-[#37373A] h-[1px] w-[100%]"></div>

          {/* Menu Items */}
          <nav className="space-y-2">
            <ul className="space-y-1">
              {categoryData?.slice(0, 5).map((item) => (
                <li
                  key={item._id}
                  className={`flex items-center ${
                    showSidebar ? "" : "justify-center"
                  }  text-[#D4D4D8]  space-x-3 hover:bg-[#2B2B2F] duration-500 ease-in-out  text-sm py-[10px] px-4 w-full rounded-md cursor-pointer`}
                >
                  {/* {item?.icon && ( */}
                  <img
                    src={star}
                    alt={item?.original_name}
                    className="w-[20px] h-[20px] "
                  />
                  {/* )} */}
                  {showSidebar && <span>{formatText(item.original_name)}</span>}
                </li>
              ))}
              <li className="flex items-center text-[#c2c2c9] space-x-3 hover:bg-[#2B2B2F] duration-500 ease-in-out  text-sm py-[10px] px-5 w-full rounded-md cursor-pointer">
                <FaSearch fontSize="18px" />
                {showSidebar && <span>Search</span>}
              </li>
            </ul>
          </nav>
          <div className="bg-[#37373A] h-[1px] w-[100%]"></div>

          <li
            className={`flex items-center ${
              showSidebar ? "" : "justify-center"
            } text-[#D4D4D8]  space-x-3 hover:bg-[#2B2B2F] duration-500 ease-in-out  text-sm py-[10px] px-4 w-full rounded-md cursor-pointer`}
          >
            <RiUserFill style={{ fontSize: "20px" }} />

            {showSidebar && <span>My Profile</span>}
          </li>
          <div className="bg-[#37373A] h-[1px] w-[100%]"></div>

          <nav className="space-y-2 relative h-[100%]  min-h-[300px]">
            <ul className="space-y-1">
              {menuItems?.map((item) => (
                <li
                  key={item._id}
                  className={`flex items-center ${
                    showSidebar ? "" : "justify-center"
                  } text-[#D4D4D8]  space-x-3 hover:bg-[#2B2B2F] duration-500 ease-in-out  text-sm py-[10px] px-4 w-full rounded-md cursor-pointer`}
                >
                  {/* {item?.icon && ( */}
                  <img
                    src={star}
                    alt={item?.original_name}
                    className="w-[20px] h-[20px] "
                  />
                  {/* )} */}
                  {showSidebar && <span>{formatText(item.label)}</span>}
                </li>
              ))}
           
          
            </ul>
            <div
            className={`flex items-center ${
              showSidebar ? "" : "justify-center"
            } text-[#D4D4D8]  space-x-3 hover:bg-[#2B2B2F] duration-500 ease-in-out  text-sm py-[10px] px-5 w-full rounded-md cursor-pointer`}
          >
            <FaSignOutAlt style={{ fontSize: "20px" }} />

            {showSidebar && <span>Logout</span>}
          </div>

            <div
            className={`bg-[#1B1B1F]  absolute  bottom-1   flex justify-between items-center ${
              !showSidebar
                ? "text-sm flex flex-col px-1 gap-1"
                : "text-xs px-4 "
            } py-[6px] w-[94%] rounded-md`}
          >
            <p
              onClick={() => toggleMode("light")}
              className={`text-center p-1 cursor-pointer rounded-[7px] w-full transition-colors duration-300 ${
                activeMode === "light"
                  ? "bg-[#2B2B2F] text-white"
                  : "bg-transparent hover:bg-[#2B2B2F] text-gray-400"
              }`}
            >
              Light
            </p>

            <p
              onClick={() => toggleMode("dark")}
              className={`w-full text-center p-1 cursor-pointer rounded-[7px] transition-colors duration-300 ${
                activeMode === "dark"
                  ? "bg-[#2B2B2F] text-white"
                  : "bg-transparent hover:bg-[#2B2B2F] text-gray-400"
              }`}
            >
              Dark
            </p>
          </div>
            
          </nav>
       

        
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
