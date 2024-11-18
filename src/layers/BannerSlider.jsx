import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

export default function BannerSlider() {

  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowForward
        className=" text-white bg-[#ffffff32] rounded-l-full sm:w-[15px] md:w-[36px] md:h-[48px] sm:h-[40px] p-2 sm:p-[2px] cursor-pointer absolute bottom-[50%] translate-y-[50%] right-0 z-50"
        style={{ ...style, display: "block", }} // Customize size and style
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowBack
      
        className=" text-white bg-[#ffffff32] rounded-r-full sm:w-[15px] md:w-[36px] md:h-[48px] sm:h-[40px] p-2 sm:p-[2px] cursor-pointer absolute top-[50%] -translate-y-[50%] left-0 z-50"
        style={{ ...style, display: "block",  }} // Customize size and style
        onClick={onClick}
      />
    );
  }

  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrow: true,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
   
  };

  return (
    <Slider className="-z-10" {...settings}>
      <div>
        <img src="/Home_PageImg/banner01.png" alt="/HomePageImg/banner01.png" />
      </div>
      <div>
        <img src="/Home_PageImg/banner01.png" alt="/HomePageImg/banner01.png" />
      </div>
    </Slider>
  );
}
