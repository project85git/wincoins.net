import React, { useState } from "react";
import { FaGift } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

const Sidebar = () => {
  // Array of menu items
  const menuItems = [
    { label: "Lobby", icon: "🎰" },

    { label: "Random Game", icon: "🎰" },
    { label: "Bingo", icon: "🔵" },
    { label: "New Games", icon: "🔥" },
    { label: "All Games", icon: "⚙️" },
    { label: "Search", icon: "🔍" },
    { label: "My Profile", icon: "👤" },
    { label: "VIP Transfer Service", icon: "↔️" },
    { label: "RE-VIP", icon: "⭐" },
    { label: "24/7 Customer Help", icon: "🎧" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div  className="scrollbar-stable overflow-y-scroll scrollbar-thin scrollbar-thumb-[#323232] scrollbar-track-[#323232] flex sticky top-0 h-[100vh]">
      {/* Sidebar */}
      <div
    className={`${
      isOpen ? "w-[280px]" : "w-[85px]"
    } bg-[#202024] text-white transition-all p-1 duration-300 h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-[#323232] scrollbar-track-[#323232] scrollbar-stable`}
  >
        {/* Toggle Button */}
        <button
          className={` bg-[#2B2B2F] ${isOpen?"w-[35px]":"w-[80%]"} h-[35px] w-[35px] rounded-[6px] mt-2 ml-2 flex items-center justify-center`}
          onClick={() => setIsOpen(!isOpen)}
        >
         <LuMenu style={{fontSize:"23px",color:"#3B81F6"}} />
        </button>

        {/* Content */}
        <div className="p-2 space-y-2">
          {/* Daily Mission Reward */}
          {isOpen&&<div className="bg-gradient-to-r from-purple-600 to to-green-500 p-2 mt-2 rounded-[5px] flex items-center gap-3">
            <div>
                <FaGift fontSize={"28px"}/>
            </div>
            <div className="w-full">
            <p className="text-sm">0% | Daily Mission Reward</p>
            <div className="bg-[#118E86] h-2 rounded ">
              <div className="bg-blue-500 h-2 rounded w-0"></div>
            </div>
            <p className="text-xs">SC 0.00 / SC 60</p>
            
            </div>
           
           
          </div>}

          {/* WOW Coins */}
          {isOpen&&<div className="bg-[#2B2B2F] flex items-center gap-3 p-2 rounded-md">
            <div className="flex items-center gap-3">
            <p className="w-[25px] flex items-center justify-center font-bold h-[25px] rounded-[50%] text-xs text-[#7583ed] bg-[#003FFF] border-2 border-[#5E72FE]">
                W
              </p>
              <div>
              <p className="text-blue-400 text-xs">WOW Coins</p>
              <p className="text-xs font-bold">150,000.00</p>
              </div>
            </div>
           
          </div>}

          {/* Buy Coins */}
          <button className={`bg-[#F6910F] ${isOpen?"text-sm":"text-xs"} font-bold text-sm py-[10px] px-4 w-full rounded-md`}>
            Buy {isOpen&&<span>Coins</span>}
          </button>

          {/* Menu Items */}
          <nav className="space-y-2">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center text-[#D4D4D8]  space-x-4 hover:bg-[#2B2B2F] duration-500 ease-in-out font-semibold text-sm py-[10px] px-4 w-full rounded-md cursor-pointer"
                >
                  <span>{item.icon}</span>
                  {isOpen && <span>{item.label}</span>}
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle */}
          {/* <div className="mt-4">
            {isOpen ? (
              <div className="flex justify-between">
                <button className="py-1 px-4 bg-gray-700 rounded-md">
                  Light
                </button>
                <button className="py-1 px-4 bg-gray-700 rounded-md">
                  Dark
                </button>
              </div>
            ) : (
              <button className="py-2 px-4 bg-gray-700 rounded-md">
                Dark
              </button>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
