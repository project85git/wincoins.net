import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { fetchGetRequest } from "../../apiRequest.js/apiRequest";
import { formatText } from "../../utils/utils";

const GameByCategory = ({ categoryData }) => {
  const allprovider = useSelector((state) => state?.reusableReducer?.gameProvider);
  
  const navigate = useNavigate();
  const providerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const scrollOffset = 300; // Set a small scroll offset






  const [games, setGame] = useState([]);

  const fetchGames = async () => {

    try {
      const response = await fetchGetRequest(
        `/api/secondary-game/get-game-by-game-category?game_category=${categoryData?.original_name.toLowerCase()}&status=true&limit=60&site_auth_key=${
          import.meta.env.VITE_API_SITE_AUTH_KEY
        }`
      );

      setGame(response?.data);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);




  useEffect(() => {
    const handleScrollCheck = () => {
      if (providerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = providerRef.current;
        setIsLeftDisabled(scrollLeft <= 0);
        setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
      }
    };

    if (providerRef.current) {
      providerRef.current.addEventListener("scroll", handleScrollCheck);
      handleScrollCheck(); // Initial check
    }

    return () => {
      if (providerRef.current) {
        providerRef.current.removeEventListener("scroll", handleScrollCheck);
      }
    };
  }, []);

  const handleScrollLeft = () => {
    if (providerRef.current) {
      providerRef.current.scrollBy({
        left: -scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (providerRef.current) {
      providerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - providerRef.current.offsetLeft;
    scrollLeft.current = providerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - providerRef.current.offsetLeft;
    const walk = x - startX.current; // Calculate the distance moved
    providerRef.current.scrollLeft = scrollLeft.current - walk; // Scroll the container
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };




  const handleNavigateProvider = (item) => {
    // navigate(
    //   `/game-by-provider/${encodeData(item.provider_name)}/${encodeData(item.provider_id)}/${encodeData(apiProviderName)}`
    // );
  };

  return (
    <div className="w-[100%] relative mt-5">
      <div className="flex items-center justify-between w-[100%]">
        <p className="text-white text-sm font-medium">
           {formatText(categoryData?.original_name)} ({games?.length})
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleScrollLeft}
            disabled={isLeftDisabled}
            className={`transform bg-[#242427] text-white p-[8px] md:p-[10px] px-2 md:px-6 w-[40px] md:w-[55px] flex items-center justify-center rounded-[6px] shadow-lg z-10 ${
              isLeftDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            onClick={handleScrollRight}
            disabled={isRightDisabled}
            className={`transform bg-[#242427] text-white p-[8px] md:p-[10px] px-2 md:px-6 w-[40px] md:w-[55px] flex items-center justify-center rounded-[6px] shadow-lg z-10 ${
              isRightDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <MdKeyboardArrowRight />
          </button>
          {allprovider.length > 6 && (
            <p
            //   onClick={() => navigate(`/game-provider/${encodeData(apiProviderName)}`)}
            className="transform text-xs md:text-sm bg-[#242427] text-[#A1A1AA] p-[4px] md:p-[10px] px-4 md:px-6 flex items-center justify-center rounded-[6px] shadow-lg z-10"

            >
              {`View all`}
            </p>
          )}
        </div>
      </div>
      <div className="relative ">
        <div
          ref={providerRef}
          className="flex overflow-scroll w-[100%]  mt-4 category-scroll items-center  gap-2"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          {games?.map((item) => (
            <div
              key={item?._id}
              onClick={() => handleNavigateProvider(item)}
              className=" min-w-[118px] md:min-w-[155px] w-[260px]  relative cursor-pointer  duration-300 ease-in-out flex items-center justify-center  "
            >
              <div className='hover:opacity-50 z-5 w-full   h-full relative '>
              <img style={{borderRadius:"4px"}} src={item.image_url} alt={item.game_name} className="w-[100%] h-[160px] md:h-[200px] " />
            </div>

              {/* <button className="bg-[#1D4FD9] text-sm text-white  py-2 px-4 translate-y-5 opacity-100 group-hover:translate-y-0 transition duration-300">
                Play Now
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameByCategory;
