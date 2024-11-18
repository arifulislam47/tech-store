import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";

const MsiLaptops = () => {
  let [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState("GS");

  const getData = async (tab) => {
    const res = await fetch(`/msiGELST_laptop/${tab}.json`);
    const data = await res.json();
    setItems(data.slice(0, 5)); // Adjust the slice as needed
  };

  useEffect(() => {
    getData(activeTab);
  }, [activeTab]);

  const tabs = [
    { id: "GS", label: "MSI GS Series" },
    { id: "GT", label: "MSI GT Series" },
    { id: "GL", label: "MSI GL Series" },
    { id: "GE", label: "MSI GE Series" },
  ];

  return (
    <div className="pb-10">
      <div className=" mt-[35px] flex gap-[26px] font-poppins text-[16px] font-semibold">
        <div className="flex gap-[26px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${
                activeTab === tab.id
                  ? "text-black fontno border-b-2 border-primary"
                  : "text-gray_2 font-semibold"
              } focus:outline-none`}
              onClick={() => {
                setActiveTab(tab.id);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className=" flex  mt-10">
        <div className=" relative w-[232px] h-[350px]">
          <img
            className=" w-full h-full object-cover"
            src="/Msilaptop.png"
            alt="/Custome_Build.json"
          />
          <h1 className=" text-center font-poppins text-[22px] text-white font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            MSI Laptops
          </h1>
          <Link to={'/'} className=" absolute bottom-[32px] underline text-white text-13 font-normal font-poppins right-1/2 translate-x-1/2">
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
    </div>
  );
};

export default MsiLaptops;
