import React, { useEffect } from "react";
import { fetchGetRequest } from "../../apiRequest.js/apiRequest";
import { useSelector } from "react-redux";
import { formatText } from "../../utils/utils";
import star from '../../assets/images/star.png';

const AllGameCategory = () => {
  const categoryData = useSelector(
    (state) => state?.reusableReducer?.gameCategory
  );
  

  const handleFilterByCategory = () => {};

  return (
    <div>
      <div className={`w-full bg-[#202024] category-scroll overflow-scroll   flex gap-2  p-[6px] md:p-2 rounded-[10px] `}>
        {categoryData?.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => handleFilterByCategory(item?.name)}
              className={`cursor-pointer   text-[#A1A1AA] min-w-[120px] hover:text-[white] duration-500 ease-in-out  flex items-center gap-2 ${index==0?"bg-[#2A2A2F]":""}  rounded-[6px] px-2 p-1  text-xs md:text-sm`}
            >
              {/* {item?.icon && ( */}
                <img
                  // src={item.icon}
                  src={star}
                  alt={item?.original_name}
                  className="w-[20px] h-[20px] "
                />
              {/* )} */}
              <p className="">{formatText(item.original_name)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllGameCategory;
