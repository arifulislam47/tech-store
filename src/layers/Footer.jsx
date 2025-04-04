import React from "react";

import { BackgroundBeamsDemo } from "../Components/BackgroundBeamsDemo";
import { BsHeadset } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoPricetag } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <div className=" bg-gray pt-[61px] pb-[40px]">
        <div className=" justify-center sm:flex-col lg:flex-row flex gap-x-[130px] gap-y-[30px]">
          {/* Product Support */}
          <div className="">
            <div className=" bg-primary mx-auto w-[65px] h-[65px] text-white rounded-full text-[25px] flex justify-center items-center">
              <BsHeadset />
            </div>
            <h1 className=" mt-6 text-center font-poppins text-xl font-semibold">
              Product Support
            </h1>
            <p className="max-w-[265px] sm:mx-auto  text-center font-poppins text-gray_2 mt-[13px]">
              Up to 3 years on-site warranty available for your peace of mind.
            </p>
          </div>
          {/* Personal Account */}
          <div className="">
            <div className=" bg-primary mx-auto w-[65px] h-[65px] p-2 text-white rounded-full text-[25px] flex justify-center items-center">
              <FaUserCircle />
            </div>
            <h1 className=" mt-6 text-center font-poppins text-xl font-semibold">
              Personal Account
            </h1>
            <p className="max-w-[265px] sm:mx-auto  text-center font-poppins text-gray_2 mt-[13px]">
              With big discounts, free delivery and a dedicated support
              specialist.
            </p>
          </div>
          {/* Amazing Sarvings */}
          <div className="">
            <div className=" bg-primary mx-auto w-[65px] h-[65px] p-2 text-white rounded-full text-[25px] flex justify-center items-center">
              <IoPricetag />   
            </div>
            <h1 className=" mt-6 text-center font-po ppins text-xl font-semibold">
              Amazing Savings
            </h1>
            <p className="max-w-[265px] sm:mx-auto text-center font-poppins text-gray_2 mt-[13px]">
              Up to 70% off new Products, you can be sure of the best price.
            </p>
          </div>
        </div>
      </div>
      <BackgroundBeamsDemo />
      {/* <div className=" flex justify-between items-end">
      <div>
        <h1 className=" font-poppins text-[38px] font-medium text-white ">
          Sign Up To Our Newsletter.
        </h1>
        <p className=" font-poppins text-[16px] pt-[9px] text-gray">
          Be the first to hear about the latest offers.
        </p>
      </div>

      <div className=" flex gap-[23px] items-center">
        <div>
          {" "}
          <input
            placeholder="Your Email"
            className=" border-[2px] w-[391px] py-[17px] bg-[#fff0] text-white px-4 capitalize border-white rounded-[5px]"
            type="text"
          />
        </div>
        <button className=" px-[50px] py-[18px] rounded-full bg-primary text-white font-poppins text-14">
          Subscribe
        </button>
      </div>
    </div>

    <div className=" pt-[45px] flex justify-between items-start tracking-wide">
      <div>
        <div className=" pb-5 font-poppins text-14 font-bold text-gray_2">
          Information{" "}
        </div>
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`About Us`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`About Zip`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Privacy Policy`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Search`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Terms`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Orders and Returns`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Contact Us`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Advanced Search`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Newsletter Subscription`}
        />
      </div>
      <div>
        <div className=" pb-5 font-poppins text-14 font-bold text-gray_2">
          PC Parts{" "}
        </div>
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`CPUS`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Add On Cards`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Hard Drives (Internal)`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Graphic Cards`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Keyboards / Mice`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Cases / Power Supplies / Cooling`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`RAM (Memory)`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Software`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Speakers / Headsets`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Motherboards`}
        />
      </div>

      <div>
        <div className=" pb-5 font-poppins text-14 font-bold text-gray_2">
          Desktop PCs{" "}
        </div>

        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Custom PCs`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Servers`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`MSI All-In-One PCs`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`HP/Compaq PCs`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`ASUS PCs`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Tecs PCs`}
        />
      </div>
      <div>
        <div className=" pb-5 font-poppins text-14 font-bold text-gray_2">
          Laptops{" "}
        </div>
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Evryday Use Notebooks`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`MSI Workstation Series`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`MSI Prestige Series`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Tablets and Pads`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Netbooks`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Infinity Gaming Notebooks`}
        />
      </div>
      <div>
        <div className=" pb-5 font-poppins text-14 font-bold text-gray_2">
          Address{" "}
        </div>
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Address: 1234 Street Adress City Address, 1234`}
        />
        <div className=" font-poppins text-white text-13">
          {" "}
          Phones:{" "}
          <a
            className=" font-poppins text-[#01A4FF] text-13 "
            href="tel:+05890000111"
          >
            (00) 1234 5678
          </a>
        </div>
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`We are open: Monday-Thursday: 9:00 AM - 5:30 PM`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Friday: 9:00 AM - 6:00 PM`}
        />
        <Li
          className={`pt-4 text-white font-poppins text-13`}
          to={``}
          liText={`Saturday: 11:00 AM - 5:00 PM`}
        />
        <div className=" font-poppins text-white text-13">
          E-mail:{" "}
          <a
            className=" font-poppins text-[#01A4FF] text-13"
            href="mailto:email@example.com"
          >
            shop@email.com
          </a>
        </div>
      </div>
    </div>

    <div className=" mt-[36px] border-t-[1px] border-gray_2 py-[17px] flex justify-between items-center">
      <div className=" flex  gap-4 items-center">
        <Link>
          <RiFacebookBoxFill className=" text-gray_2 text-[35px]" />
        </Link>
        <Link>
          <FaInstagramSquare className=" text-gray_2 text-[30px]" />
        </Link>
      </div>

      
      <div className=" flex gap-4 z-[100]">
        <Link to={``}>
          <img className=" w-12" src="/src/assets/Paypal.png" alt="" />
        </Link>
        <Link to={``}>
          <img className=" w-12" src="/src/assets/Visa.png" alt="" />
        </Link>
        <Link to={``}>
          <img
            className=" w-12"
            src="/src/assets/MasterCard.png"
            alt=""
          />
        </Link>
        <Link to={``}>
          <img className=" w-12" src="/src/assets/Discover.png" alt="" />
        </Link>
        <Link to={``}>
          <img
            className=" w-12"
            src="/src/assets/AmericanEx.png"
            alt=""
          />
        </Link>
      </div>
      <div>
        <p className=" text-gray_2 text-[12px] font-medium">
          Copyright © 2024 Shop Pty. Ltd.
        </p>
      </div>
    </div> */}
    </div>
  );
};

export default Footer;
