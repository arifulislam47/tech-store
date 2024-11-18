import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";

const MsiDesktop = () => {
  let [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState("Infinute Series");
  
  const sectionRef = useRef(null);

  const getData = async (tab) => {
    const res = await fetch(`/msi_Desktop/${tab}.json`);
    const data = await res.json();
    setItems(data.slice(0, 5)); // Adjust the slice as needed
  };

  useEffect(() => {
    getData(activeTab);
  }, [activeTab]);

  // Intersection Observer Logic
 

  const tabs = [
    { id: "Infinute Series", label: "MSI Infinute Series" },
    { id: "Triden", label: "MSI Triden" },
    { id: "GL Series", label: "MSI GL Series" },
    { id: "Nightblade", label: "MSI Nightblade" },
  ];

  return (
    <div
      ref={sectionRef}
      className={`pb-10`}
    >
      <div className="flex gap-[26px] font-poppins text-[16px] font-semibold">
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
      <div className="flex mt-10">
        <div className="relative w-[232px] h-[350px]">
          <img
            className="w-full h-full object-cover"
            src="/MsiDesktop.png"
            alt="/Custome_Build.json"
          />
          <h1 className="text-center font-poppins text-[22px] text-white font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Desktops
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

export default MsiDesktop;
