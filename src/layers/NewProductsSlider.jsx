import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "../Components/Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NewProductsSlider() {
  let [items, setItems] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let res = await fetch("/NewProducts.json");
      let data = await res.json();
      setItems(data);
    };
    getData();
  }, []);

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <IoIosArrowForward
        className=" text-white bg-[#00000032] rounded-l-full p-2 cursor-pointer absolute bottom-[50%] translate-y-[50%] right-0 z-50"
        style={{ ...style, display: "block", width: "36px", height: "48px" }} // Customize size and style
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <IoIosArrowBack
        className=" text-white bg-[#00000032] rounded-r-full p-2 cursor-pointer absolute top-[50%] -translate-y-[50%] left-0 z-50"
        style={{ ...style, display: "block", width: "36px", height: "48px" }} // Customize size and style
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow:false,
          prevArrow: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {items.map((items, index) => {
          return (
            <Card
              key={index}
              imgSrc={items.category.image}
              title={items.title}
              regulanPrice={items.price}
              discountPrice={items.discountPercentage}
              rating={items.rating}
              status={items.category.status}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default NewProductsSlider;
