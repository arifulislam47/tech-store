import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import LazyLoad from "react-lazyload";

const MsiGamingMonitor = () => {
  let [items, setItems] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
    const res = await fetch(`/msiGameingMonitor/Monitors.json`);
    const data = await res.json();
    setItems(data.slice(0, 5)); // Adjust the slice as needed
  };
  getData();
  }, []);

  // Intersection Observer Logic

  return (
     <div
      className={`pb-10 `}
    >
      
      <div className="flex">
        <div className="relative w-[232px] h-[350px]">
          <img
            className="w-full h-full object-cover"
            src="/GamingMonitor.png"
            alt="/GamingMonitor.png"
          />
          <h1 className="text-center font-poppins text-[22px] text-white font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Gaming
          Monitors
          </h1>
          <Link
            to={`/`}
            className="absolute bottom-[32px] underline text-white text-13 font-normal font-poppins right-1/2 translate-x-1/2"
          >
            See All Products
          </Link>
        </div>
        <div className="flex">
          {" "}
          {items.map((items, index) => {
            return (
              <Card
                className={`hover:z-50 hover:drop-shadow-lg cursor-pointer`}
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
        </div>
      </div>
    </div>
  );
};

export default MsiGamingMonitor;
