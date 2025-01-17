import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ProviderMapping = ({ apiProviderName }) => {
  const allprovider = useSelector((state) => state?.reusableReducer?.gameProvider);
  const navigate = useNavigate();
  const providerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const scrollOffset = 300; // Set a small scroll offset

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
    navigate(
      `/game-by-provider/${encodeData(item.provider_name)}/${encodeData(item.provider_id)}/${encodeData(apiProviderName)}`
    );
  };

  return (
    <div className="w-[100%] relative mt-3">
      <div className="flex items-center justify-between w-[100%]">
        <p className="text-white text-sm font-medium">
          {`Game Provider`} ({allprovider?.length})
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleScrollLeft}
            disabled={isLeftDisabled}
            className={`transform bg-[#242427] text-white p-[10px] w-[55px] flex items-center justify-center rounded-[6px] shadow-lg z-10 ${
              isLeftDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            onClick={handleScrollRight}
            disabled={isRightDisabled}
            className={`transform bg-[#242427] text-white p-[10px] w-[55px] flex items-center justify-center rounded-[6px] shadow-lg z-10 ${
              isRightDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <MdKeyboardArrowRight />
          </button>
          {allprovider.length > 6 && (
            <p
              onClick={() => navigate(`/game-provider/${encodeData(apiProviderName)}`)}
              className="transform text-sm bg-[#242427] text-[#A1A1AA] p-[10px] px-6 flex items-center justify-center rounded-[6px] shadow-lg z-10"
            >
              {`View all`}
            </p>
          )}
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          ref={providerRef}
          className="flex overflow-scroll w-[100%] mt-0 category-scroll items-center h-[100px] gap-2"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          {allprovider?.map((item) => (
            <div
              key={item?._id}
              onClick={() => handleNavigateProvider(item)}
              className="min-w-[170px] w-[170px] bg-[#202024] cursor-pointer h-[80px] duration-300 ease-in-out flex items-center justify-center py-3 rounded-[12px] shadow-lg"
            >
              {item?.image_url ? (
                <img src={item?.image_url} alt="" className="w-[80px]" />
              ) : (
                <p className="text-[14px] uppercase font-semibold">{item?.provider_name}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProviderMapping;
