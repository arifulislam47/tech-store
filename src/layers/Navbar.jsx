import React, { useEffect, useRef, useState } from "react";
import Container from "../Components/Container";
import { FaBars, FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown, MdOutlineLocationOn } from "react-icons/md";
import Li from "../Components/Li";
import { IoCall, IoCloseSharp, IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { GoLocation } from "react-icons/go";
import { BiSolidCheckCircle } from "react-icons/bi";
import { useAuth } from "../AuthContext";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  let [openTime, setOpenTime] = useState(false);
  let [openUserDropdown, setOpenUserDropdown] = useState(false);
  let cateRef = useRef(null);
  let userDropdown = useRef(null);
  let search = useRef(null);
  let smMemuBar = useRef(null);
  let [inputVisible, setInputVisible] = useState(false);
  let [smMenuBarOpen, setSmMenuBarClose] = useState(false);

  let [inputValue, setInputValue] = useState("");
  let [products, setProducts] = useState([]);

  const auth = getAuth();
  const { isLogin, setIsLogin, userImg } = useAuth();

  const handleLogout = async () => {
    setIsLogin(false);
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
    localStorage.removeItem("loggedInUser");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cateRef.current && !cateRef.current.contains(e.target)) {
        setOpenTime(false);
      }
      if (userDropdown.current && !userDropdown.current.contains(e.target)) {
        setOpenUserDropdown(false);
      }
      if (search.current && !search.current.contains(e.target)) {
        setInputValue("");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    let getData = async () => {
      let res = await fetch("/MsiSeries.json");
      let data = await res.json();
      setProducts(data); // Set the whole data array to products
    };
    getData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <div
        className={`fixed z-[98]  w-full h-dvh bg-black backdrop-blur-sm bg-opacity-30 transition-all duration-700 ease-in-out ${
          openTime || openUserDropdown
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />
      <div className="bg-black py-4">
        <Container className={``}>
          <div className="flex sm:relative sm:justify-end lg:justify-between sm:gap-[23px] items-center">
            <div className=" sm:flex md:hidden rounded-t-[50%] absolute bg-primary w-[64px]  h-[50px] items-center justify-center -top-1 left-0">
              <Link to={"/"}>
                <img src="logo.svg" alt="" />
              </Link>
            </div>

            <div>
              <div className=" text-white font-poppins md:text-sm sm:text-[11px]   font-semibold flex items-center gap-1">
                <div>
                  <span className=" text-gray_2">Mon-Thu:</span>{" "}
                  <span>9:00 AM - 5:30 PM</span>
                </div>
                <div ref={cateRef} className=" relative">
                  <MdKeyboardArrowDown
                    onClick={() => {
                      setOpenTime(!openTime);
                    }}
                    className=" text-xl cursor-pointer"
                  />
                  <div>
                    {openTime && (
                      <div className="z-[100] font-poppins border-[1px]  border-gray_2  absolute md:-left-9 sm:-right-[91px] top-7 sm:w-[350px] md:w-[262px] bg-white text-black pt-[17px]  ">
                        {/* Opening Hours */}

                        <div className="sm:pl-[68px] md:pl-[11px] py-[11px] border-b-[1px] border-gray_2 flex gap-[12px]">
                          <div className=" text-primary">
                            <LuClock3 className=" text-[25px]" />
                          </div>
                          <div className=" space-y-[5px]">
                            <h2 className=" text-sm font-normal">
                              We are open:
                            </h2>
                            <p className="text-black">
                              <span className="font-bold text-gray_2">
                                Mon–Thu:
                              </span>
                              <span className="ml-2">9:00 AM – 5:30 PM</span>
                            </p>
                            <p className="text-gray-600">
                              <span className="font-bold text-gray_2">Fr:</span>
                              <span className="ml-2">9:00 AM – 6:00 PM</span>
                            </p>
                            <p className="text-gray-600">
                              <span className="font-bold text-gray_2">
                                Sat:
                              </span>
                              <span className="ml-2">11:00 AM – 5:00 PM</span>
                            </p>
                          </div>
                        </div>

                        {/* Address Section */}
                        <div className="sm:pl-[68px] md:pl-[11px] py-[11px] border-b-[1px] border-gray_2 flex gap-[12px]">
                          <div className=" text-primary">
                            <GoLocation className="text-[25px]" />
                          </div>
                          <div>
                            <h2 className="text-sm font-normal">
                              Address: 1234 Street Address,
                            </h2>
                            <p className=" font-normal">City Address, 1234</p>
                          </div>
                        </div>

                        {/* Contact Info Section */}
                        <div className="sm:pl-[68px] md:pl-[11px] py-[11px] font-normal">
                          <p className=" font-normal text-black">
                            Phones:{" "}
                            <a
                              href="tel:+0012345678"
                              className="text-primary hover:underline"
                            >
                              (00) 1234 5678
                            </a>
                          </p>
                          <p className="font-normal text-black">
                            E-mail::{" "}
                            <a
                              href="mailto:shop@email.com"
                              className="text-primary hover:underline"
                            >
                              shop@email.com
                            </a>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className=" text-white  text-sm sm:hidden md:block font-semibold gap-2 items-center flex">
              <span className="text-gray_2">
                Visit our showroom in 1234 Street Adress City Address, 1234
              </span>{" "}
              <Link
                to={"/contact us"}
                className="underline text-white text-sm font-semibold"
              >
                {" "}
                Contact Us
              </Link>
            </div>
            <Link
              to={"/contact us"}
              className="underline text-white text-sm md:hidden font-semibold"
            >
              {" "}
              Contact Us
            </Link>

            <div className=" sm:hidden md:flex text-white text-sm font-semibold flex items-center gap-4">
              <span>
                <span className=" text-gray_2">Call Us:</span> (00) 1234 5678
              </span>{" "}
              <div className=" flex gap-2 text-base">
                {" "}
                <Link>
                  <FaFacebookSquare />
                </Link>{" "}
                <Link>
                  <RiInstagramFill />
                </Link>
              </div>{" "}
            </div>
          </div>
        </Container>
      </div>

      <div className="border-b-[1.8px] sm:bg-primary md:bg-white border-b-gray_2">
        <Container>
          {/* menu */}
          <div
            className={` absolute z-[100] bg-gray sm:top-[115px] w-[50%] h-dvh py-4 px-4 transition-all duration-700 ease-in-out ${
              smMenuBarOpen ? "left-0" : "left-[-51%]"
            }`}
          >
            <div className=" z-[100] bg-gray flex flex-col gap-[25px] ">
              <div>
                <div className="">
                  <Li
                    className={` font-poppins font-semibold text-14 text-black`}
                    liText={`Laptops`}
                  />
                </div>
              </div>
              <Li
                className={` font-poppins font-semibold text-14 text-black`}
                liText={`Desktop PCs`}
              />
              <Li
                className={` font-poppins font-semibold text-14 text-black`}
                liText={`Networking Devices`}
              />
              <Li
                className={` font-poppins font-semibold text-14 text-black`}
                liText={`Printers & Scanners`}
              />
              <Li
                className={` font-poppins font-semibold text-14 text-black`}
                liText={`PC Parts`}
              />
              <Li
                className={` font-poppins font-semibold text-14 text-black`}
                liText={`All Other Products`}
              />
              <Li
                className={` font-poppins font-semibold text-14 text-black`}
                liText={`Repairs`}
              />
              <Link className=" text-center hover:bg-primary hover:text-white border-[2px] border-primary py-[8px] px-[26px] rounded-full text-14 text-primary font-semibold ">
                Our Deals
              </Link>
            </div>
          </div>
          <div className="md:py-4 sm:py-3 flex items-center lg:justify-between sm:justify-between relative border-b-gray">
            <div className=" sm:hidden lg:block">
              <Link to={"/"}>
                <img src="/logo.png" alt="" />
              </Link>
            </div>
            {/* Sm menu bar icon */}
            <div>
              <div className=" text-white text-xxl">
                {smMenuBarOpen ? (
                  <IoCloseSharp
                    onClick={() => setSmMenuBarClose(!smMenuBarOpen)}
                    className=" z-[100]"
                  />
                ) : (
                  <FaBars onClick={() => setSmMenuBarClose(!smMenuBarOpen)} />
                )}
              </div>
            </div>
            {!inputVisible && (
              <div className=" sm:hidden lg:block relative">
                <div className=" flex gap-[25px] items-center">
                  <div>
                    <div className=" relative">
                      <Li
                        className={` font-poppins font-semibold text-14 text-black`}
                        liText={`Laptops`}
                      />
                      {/* mega menu */}
                      <div className=" z-[50] absolute top-[115%] left-0 p-[30px] bg-green"></div>
                    </div>
                  </div>
                  <Li
                    className={` font-poppins font-semibold text-14 text-black`}
                    liText={`Desktop PCs`}
                  />
                  <Li
                    className={` font-poppins font-semibold text-14 text-black`}
                    liText={`Networking Devices`}
                  />
                  <Li
                    className={` font-poppins font-semibold text-14 text-black`}
                    liText={`Printers & Scanners`}
                  />
                  <Li
                    className={` font-poppins font-semibold text-14 text-black`}
                    liText={`PC Parts`}
                  />
                  <Li
                    className={` font-poppins font-semibold text-14 text-black`}
                    liText={`All Other Products`}
                  />
                  <Li
                    className={` font-poppins font-semibold text-14 text-black`}
                    liText={`Repairs`}
                  />
                  <Link className=" border-[2px] border-primary py-[8px] px-[26px] rounded-full text-14 text-primary font-semibold ">
                    Our Deals
                  </Link>
                </div>
              </div>
            )}

            {/* search */}
            <div className=" flex items-center lg:gap-[20px] sm:gap-[4px]">
              <div ref={search} className={` relative `}>
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  className={` transition-all duration-500 bg-gray outline-none ${
                    inputVisible
                      ? "w-[1100px] py-[7px] pl-8 pr-[50px]"
                      : " hidden "
                  } rounded-full capitalize`}
                  placeholder="Search entiere store here..."
                  type="text"
                />
                <IoSearchOutline
                  className={` absolute ${
                    !inputVisible ? "hidden" : ""
                  } bottom-[50%] translate-y-1/2 cursor-pointer text-xxl translate-x-1/2 hover:bg-white rounded-full p-1 w-8 h-8 right-[25px]`}
                />

                {/* Search by filter */}

                <div>
                  {inputValue && (
                    <div className=" grid grid-cols-5 gap-4 p-[16px] top-[150%] left-0 absolute z-[50] w-full bg-white rounded-md">
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                          <div
                            key={product.id}
                            className=" cursor-pointer border-gray_2 border rounded-lg overflow-hidden p-2"
                          >
                            <div className=" flex gap-2">
                              <div className=" w-[40px]">
                                <img src={product.category.image} alt="" />
                              </div>
                              <div>
                                <h2 className=" font-poppins text-13">
                                  {product.title}
                                </h2>

                                <div
                                  className={` top-[2px] text-[11px] flex items-center gap-1 font-poppins font-normal ${
                                    product.category.status === "in stock"
                                      ? "text-green"
                                      : product.category.status ===
                                        "check availability"
                                      ? "text-red"
                                      : null
                                  } left-[32.5px]`}
                                >
                                  {product.category.status === "in stock" ? (
                                    <BiSolidCheckCircle />
                                  ) : product.category.status ===
                                    "check availability" ? (
                                    <IoCall className=" p-[1.5px] w-[9.5px] h-[9.5px] text-white !bg-red rounded-full" />
                                  ) : null}{" "}
                                  {product.category.status}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-center col-span-full">
                          No products found
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div>
                {inputVisible ? (
                  <div className="text-xxl w-10 h-10 hover:bg-gray cursor-pointer p-2 rounded-full flex justify-center items-center">
                    <IoCloseSharp
                      className=" text-primary"
                      onClick={() => setInputVisible(!inputVisible)}
                    />
                  </div>
                ) : (
                  <div className="sm:hidden lg:block text-xxl w-10 h-10 hover:bg-gray cursor-pointer p-2 rounded-full flex justify-center items-center">
                    <IoSearchOutline
                      onClick={() => setInputVisible(!inputVisible)}
                    />
                  </div>
                )}
              </div>
              <div className="text-xxl w-10 h-10 lg:hover:bg-gray cursor-pointer p-2 rounded-full flex justify-center items-center">
                <FiShoppingCart className=" sm:text-white lg:text-black" />
              </div>

              {isLogin ? (
                <div
                  ref={userDropdown}
                  onClick={() => setOpenUserDropdown(!openUserDropdown)}
                  className="w-[36px] relative  h-[36px] rounded-full  cursor-pointer"
                >
                  {" "}
                  <div className="w-[36px] h-[36px] rounded-full overflow-hidden cursor-pointer">
                    <img
                      src={userImg || "/blankProfile.png"} // Use a default image if userImg is empty
                      className="object-cover"
                      alt="User Profile"
                    />
                  </div>
                  {openUserDropdown && (
                    <div className="z-[100] absolute top-[154%] text-black left-full translate-x-[-100%] px-[35px] py-[26px] w-[232px] bg-gray">
                      <Li
                        className={
                          "font-poppins transition-all w-full py-1 hover:scale-[1.1] duration-300 hover:pl-1 hover:font-semibold font-medium text-14 "
                        }
                        liText={"My Account"}
                      />
                      <Li
                        className={
                          "font-poppins transition-all w-full py-1 hover:scale-[1.1] duration-300 hover:pl-1 hover:font-semibold font-medium text-14"
                        }
                        liText={"My Wish List (0)"}
                      />
                      <Li
                        className={
                          "font-poppins transition-all w-full py-1 hover:scale-[1.1] duration-300 hover:pl-1 hover:font-semibold font-medium text-14"
                        }
                        liText={"Compare (0)"}
                      />
                      <Li
                        className={`font-poppins transition-all w-full py-1 hover:scale-[1.1] duration-300 hover:pl-1 hover:font-semibold font-medium text-14`}
                        liText={"Create an Account"}
                      />
                      <div
                        onClick={handleLogout}
                        className={
                          "font-poppins text-primary transition-all hover:scale-[1.1] w-full py-1 duration-300 hover:pl-1 hover:font-semibold font-medium text-14"
                        }
                      >
                        {isLogin ? "Log Out" : null}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex gap-3">
                  <Link
                    to={"/customer login"}
                    className="font-poppins font-semibold text-14 bg-primary text-white lg:px-3 py-1 rounded-full"
                  >
                    Log In
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
