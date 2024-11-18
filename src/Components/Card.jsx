import React, { useState } from "react";
import { BiSolidCheckCircle } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";
import { Image } from "antd";

const Card = ({
  imgSrc,
  title,
  regulanPrice,
  discountPrice,
  rating,
  status,
  className,
}) => {
  let [adtoCart, setAdtoCart] = useState(false);
  return (
    <div
      onMouseEnter={() => setAdtoCart(true)}
      onMouseLeave={() => setAdtoCart(false)}
      className={` ${className} w-[234px] relative bg-white  group transition-all duration-300  px-[25px] pt-[25px]`}
    >
      <div
        className={`absolute top-[2px] flex items-center text-13 gap-1 font-poppins font-normal ${
          status === "in stock"
            ? "text-green"
            : status === "check availability"
            ? "text-red"
            : null
        } left-[32.5px]`}
      >
        {status === "in stock" ? (
          <BiSolidCheckCircle />
        ) : status === "check availability" ? (
          <IoCall className=" p-[2px] w-[12.5px] h-[12.5px] text-white !bg-red rounded-full" />
        ) : null}{" "}
        {status}
      </div>
      <div className="w-fullo text-center mx-auto h-[142px]">
        {" "}
        <Image src={imgSrc} alt={imgSrc}/>
      </div>

      <div className=" font-poppins mt-[10px] w-full">
        <div className=" flex gap-[10px] items-center">
          <div className=" flex gap-[2.16px]">

            {rating >= 1 ? (
              <MdOutlineStar className="text-xl text-[#ffae00]" />
            ) : rating < 1 ? (
              <MdOutlineStar className="text-xl text-gray_2" />
            ) : (
              <MdOutlineStar className="text-xl text-gray_2" />
            )}

            {rating == 1.5 ? (
              <MdOutlineStarHalf className="text-xl text-[#ffae00]" />
            ) : rating >= 2 ? (
              <MdOutlineStar className="text-xl text-[#ffae00]" />
            ) : (
              <MdOutlineStar className="text-xl text-gray_2" />
            )}

            {rating == 2.5 ? (
              <MdOutlineStarHalf className="text-xl text-[#ffae00]" />
            ) : rating >= 3 ? (
              <MdOutlineStar className="text-xl text-[#ffae00]" />
            ) : (
              <MdOutlineStar className="text-xl text-gray_2" />
            )}

            {rating == 3.5 ? (
              <MdOutlineStarHalf className="text-xl text-[#ffae00]" />
            ) : rating >= 4 ? (
              <MdOutlineStar className="text-xl text-[#ffae00]" />
            ) : (
              <MdOutlineStar className="text-xl text-gray_2" />
            )}

            {rating == 4.5 ? (
              <MdOutlineStarHalf className="text-xl text-[#ffae00]" />
            ) : rating >= 5 ? (
              <MdOutlineStar className="text-xl text-[#ffae00]" />
            ) : (
              <MdOutlineStar className="text-xl text-gray_2" />
            )}

          </div>
          <div>
            <h1 className=" text-sm text-gray_2">Review {rating}</h1>
          </div>
        </div>
        <div className="mt-[10px] text-center text-13 text-black">
          <h1 className="font-normal text-left">{title}</h1>
        </div>
        <div className="mt-[10px]">
          <h1 className=" text-14 font-poppins line-through text-gray_2">
            {regulanPrice && <div> {"$" + regulanPrice}</div>}
          </h1>
          <h1 className=" text-xl font-poppins text-black font-semibold">
            {discountPrice && <div> {"$" + discountPrice}</div>}
          </h1>
        </div>
      </div>

      <div
        className={`mt-[10px] hidden ${
          adtoCart ? "opacity-100" : "opacity-0"
        }transition-all flex gap-3 items-center duration-300 border-[2px] border-primary py-[8px] px-[26px] rounded-full text-14 text-primary cursor-pointer text-center font-semibold `}
      >
        <div>
          <FiShoppingCart className=" text-xl justify-center" />
        </div>{" "}
        <div>Add To Cart</div>
      </div>
    </div>
  );
};

export default Card;
