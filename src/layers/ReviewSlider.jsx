import React, { useEffect } from "react";
import Slider from "react-slick";

export default function ReviewSlider() {
  let [items, setItems] = React.useState([]);

  useEffect(() => {
    let getData = async () => {
      let res = await fetch("/Review/Review.json");
      let data = await res.json();
      setItems(data); // Use the data as needed for your Instagram feed component.
    };
    getData();
  }, []);
  var settings = {
    Arrow: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div
        style={{
          position: "relative",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul className=" absolute right-0 -bottom-[25px]" style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
      className=" rounded-full text-[0px] bg-gray_2 p-[5px] "
        style={{
          
          color: "blue",
        }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    <Slider {...settings}>
      {items.map((items, i) => {
        return (
          <div className=" relative" key={i}>
            <p className="px-8 font-poppins text-justify ">{items.review}</p>
            <p className=" text-right pt-[15px] font-poppins pr-6">{"-" + items.user}</p>
          </div>
        );
      })}
    </Slider>
  );
}
