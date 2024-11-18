import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import MsiLaptops from "./MsiLaptops";
import MsiDesktop from "./MsiDesktop";

import LazyLoad from "react-lazy-load";
import MsiGamingMonitor from "./MsiGamingMonitor";
import Marquee from "react-fast-marquee";

const BrandProdunct = () => {
  let [items, setItems] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let res = await fetch("/Custome_Build.json");
      let data = await res.json();
      setItems(data.slice(0, 5));
    };
    getData();
  }, []);

  return (
    <div>
      <LazyLoad>
        <div className=" flex  mt-10">
          <div className=" relative w-[232px] h-[350px]">
            <img
              className=" w-full h-full object-cover"
              src="/Custome_builds.png"
              alt="/Custome_Build.json"
            />
            <h1 className=" text-center font-poppins text-[22px] text-white font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Custome Builds
            </h1>
            <Link
              to={`/`}
              className=" absolute bottom-[32px] underline text-white text-13 font-normal font-poppins right-1/2 translate-x-1/2"
            >
              See All Products
            </Link>
          </div>
          <div className=" flex ">
            {" "}
            {items.map((items, index) => {
              return (
                <Card
                  className={` hover:z-50 hover:drop-shadow-lg cursor-pointer`}
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
      </LazyLoad>
      <LazyLoad>
        <MsiLaptops />
      </LazyLoad>

      <LazyLoad>
        <MsiDesktop />
      </LazyLoad>

      <LazyLoad>
        <MsiGamingMonitor />
      </LazyLoad>

      {/* All Brand */}
      <Marquee
        gradient={true}
        pauseOnHover={true}
        autoFill={true}
        className="flex items-center"
      >
        <div>
          <img src="/src/assets/Gigabyte.png" alt="" />
        </div>
        <div>
          <img src="/src/assets/Adata.png" alt="" />
        </div>
        <div>
          <img src="/src/assets/HP.png" alt="" />
        </div>
        <div>
          <img src="/src/assets/Razer.png" alt="" />
        </div>
        <div>
          <img src="/src/assets/Roccat.png" alt="" />
        </div>
        <div>
          <img src="/src/assets/HP.png" alt="" />
        </div>
        <div>
          <img src="/src/assets/Msi.png" alt="" />
        </div>
        <div>
          <img src="/src/assets/tharmaltake.png" alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default BrandProdunct;
