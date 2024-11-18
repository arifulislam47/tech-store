"use client";
import React, { useRef, useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import Li from "./Li";
import Container from "./Container";
import { TextRevealCardPreview } from "./TextRevealCardPreview";
import { FloatingDockDemo } from "./FloatingDockDemo";

export function BackgroundBeamsDemo() {
  let [informationIsActive, setInformationIsActive] = useState(true);
  let [pcPartsIsActive, setPcPartsIsActive] = useState(false);

 
  return (
    <div className=" bg-[#000000e9] pt-[47px] w-full rounded-md relative ">
      <BackgroundBeams />
      <Container className={`sm:px-[25px]`}>
        {/* lg design */}
        <div className=" sm:hidden lg:block relative">
          <div className=" flex sm:flex-col lg:flex-row  sm:gap-y-[15px] lg:justify-between items-center">
            <div>
              <h1 className=" font-poppins text-[38px] font-medium text-white ">
                {/* Sign Up To Our Newsletter. */}
                <TextRevealCardPreview />
              </h1>
              <p className=" font-poppins lg:text-[16px] sm:text-[12px] sm:text-center lg:text-start pt-[9px] text-gray">
                Be the first to hear about the latest offers.
              </p>
            </div>

            <div className=" flex sm:gap-[13px] lg:gap-[23px] items-center">
              <div>
                {" "}
                <input
                  placeholder="Your Email"
                  className=" border-[2px] sm:w-[186px] lg:w-[391px] py-[17px] bg-[#fff0] sm:text-[12px] lg:text-[14px] text-white px-4 capitalize border-white rounded-[5px]"
                  type="text"
                />
              </div>
              <button className=" lg:px-[50px] sm:px-[30px]  lg:py-[18px] sm:py-[12px] rounded-full bg-primary text-white font-poppins text-14">
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
              <div>
                {" "}
                <Link>
                  <FaInstagramSquare className=" text-gray_2 text-[30px]" />
                </Link>
              </div>
            </div>
            {/* Component in Aui */}
            <FloatingDockDemo/>
           
            <div>
              <p className=" w-[176px] text-gray_2 text-[12px] font-medium">
                Copyright © 2024 Shop Pty. Ltd.
              </p>
            </div>
          </div>
        </div>

        {/* Sm Design */}
        <div className=" lg:hidden sm:block">
          <div>
            {/* Min_Div */}
            <div  className=" relative">
              <div className=" flex justify-between items-center pb-5 font-poppins text-14 font-bold text-gray_2">
                Information{" "}
                <div
                  onClick={() => setInformationIsActive(!informationIsActive)}
                >
                  icon
                </div>
              </div>
              {informationIsActive ? (
                <div>
                  {" "}
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
              ) : (
                ""
              )}
            </div>
            <div className=" relative">
              <div className=" flex justify-between items-center pb-5 font-poppins text-14 font-bold text-gray_2">
                PC Parts{" "}
                <div
                  onClick={() => setInformationIsActive(!informationIsActive)}
                >
                  icon
                </div>
              </div>
              {informationIsActive ? (
                <div>
                  {" "}
                  <div>
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
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
