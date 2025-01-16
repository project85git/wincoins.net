import React, { useEffect, useRef } from "react";

const Carousel = () => {
  const logos = [
    "3 OAKS GAMING",
    "Netgaming",
    "ROGUE",
    "RUBYPLAY",
    "SC",
    "EVOPLAY",
    "Golden Rock",
    "HABANERO",
    "asda",
    "ertsdgf",
    "hrtgrfdg",
    "rhtrhrth",
    "hrthfgdfgf",
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const itemWidth = 140 + 8; // Width of item + space between items (adjust as needed)
    let currentIndex = 0;
    let scrollDirection = 1; // 1 for forward, -1 for backward

    const scrollStep = () => {
      const maxIndex = logos.length - Math.floor(carousel.clientWidth / itemWidth);

      if (currentIndex >= maxIndex) {
        scrollDirection = -1; // Reverse direction
      } else if (currentIndex <= 0) {
        scrollDirection = 1; // Forward direction
      }

      currentIndex += scrollDirection;
      carousel.scrollTo({
        left: currentIndex * itemWidth,
        behavior: "smooth",
      });
    };

    const interval = setInterval(scrollStep, 2000); // Move one index every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [logos.length]);

  return (
    <div
      ref={carouselRef}
      className="flex w-[92%]  max-w-[1400px] space-x-2 overflow-x-scroll scrollbar-hide"
    >
      {logos.map((logo, index) => (
        <div
          key={index}
          className="transition-transform duration-500 ease-in-out  lg:w-[180px] h-[80px] flex flex-col items-center justify-center rounded-[10px] bg-[#202024] text-white font-semibold shadow-md"
        >
            <p className="w-[180px]"></p>
          {logo}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
