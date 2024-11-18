import React, { useState } from "react";
import Container from "../Components/Container";
import Breadcrumbs from "../Components/Breadcrumbs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../Components/Slice/ProductSlice";

const ShoppingCart = () => {
  let count = useSelector((state) => state.Products.value);
  let dispatch = useDispatch();
 
  let [applyDiscountCodeDropdown, setApplyDiscountCodeDropdown] =
    useState(false);
  let [discountCode, setDiscountCode] = useState("");
  const cartItems = [
    {
      id: 1,
      name: "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
      price: 4349.0,
      qty: 1,
      imageUrl: "/account.jpg",
    },
    {
      id: 2,
      name: "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
      price: 4349.0,
      qty: 1,
      imageUrl: "/account.jpg",
    },
  ];
  return (
    <div>
      <Container className={`font-poppins pb-[67px]`}>
        <Breadcrumbs />

        <div className=" flex gap-[35px]">
          <div>
            <div className="grid grid-cols-5 w-[916px] gap-6 border-b border-gray_2 pb-4 font-semibold">
              <div className="col-span-2">Item</div>
              <div>Price</div>
              <div>Qty</div>
              <div>Subtotal</div>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-5 w-[916px] justify-start gap-6 mt-[25px] pb-[25px] border-b border-gray_2"
              >
                <div className=" h-[120px] text-14 flex gap-4 items-center col-span-2">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="  w-[120px] object-cover"
                  />
                  <span className=" text-justify">
                    {item.name.slice(0, 100) + "...."}
                  </span>
                </div>
                <div className=" mt-[7px] font-semibold text-base">
                  ${item.price.toFixed(2)}
                </div>
                <div className="mt-[7px] rounded-[6px] w-[70px] h-[50px] text-14 font-semibold flex items-center bg-gray">
                  <input
                    type=""
                    value={item.qty + count}
                    className=" bg-gray rounded w-12 text-center"
                  />
                  <div className=" text-gray_2 flex flex-col gap-y-1">
                    <MdKeyboardArrowUp
                      onClick={() => dispatch(increment())}
                      className=" cursor-pointer hover:text-black"
                    />
                    <MdKeyboardArrowDown className=" cursor-pointer hover:text-black" />
                  </div>
                </div>
                <div className="mt-[7px] flex gap-5 font-semibold">
                  ${(item.price * item.qty).toFixed(2)}
                  <div className="flex flex-col gap-y-[10px]">
                    <svg
                      className=" cursor-pointer"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="13.4882"
                        cy="13.4884"
                        r="12.4882"
                        fill="white"
                        stroke="#CACDD8"
                        stroke-width="2"
                      />
                      <path
                        d="M9.44177 9.44193L18.2091 18.2093"
                        stroke="#A2A6B0"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M18.2091 9.44193L9.44178 18.2093"
                        stroke="#A2A6B0"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    <svg
                      className=" cursor-pointer"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="13.5"
                        cy="13.5002"
                        r="12.5"
                        fill="white"
                        stroke="#CACDD8"
                        stroke-width="2"
                      />
                      <path
                        d="M8.16298 19.904H8.2377L11.6994 19.5885C12.0786 19.5508 12.4333 19.3837 12.7039 19.1153L20.1752 11.644C20.4652 11.3377 20.6219 10.9288 20.611 10.5071C20.6001 10.0855 20.4225 9.68528 20.1171 9.3943L17.8425 7.1197C17.5456 6.84085 17.1566 6.68085 16.7495 6.67013C16.3423 6.65942 15.9454 6.79874 15.6343 7.06159L8.16298 14.5329C7.89465 14.8035 7.72757 15.1582 7.6898 15.5374L7.33283 18.9991C7.32165 19.1207 7.33743 19.2433 7.37904 19.3581C7.42065 19.4729 7.48708 19.5771 7.57358 19.6632C7.65115 19.7402 7.74314 19.8011 7.84428 19.8424C7.94543 19.8837 8.05373 19.9046 8.16298 19.904ZM16.6886 8.2819L18.9549 10.5482L17.2946 12.167L15.0698 9.9422L16.6886 8.2819ZM9.30029 15.6785L13.974 11.038L16.2154 13.2794L11.5666 17.9282L9.07615 18.1607L9.30029 15.6785Z"
                        fill="#A2A6B0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-6">
              <div className=" flex gap-2 items-center">
                <Link
                  to={`/`}
                  className="px-[27px] py-2 border border-gray_2 text-gray_2 font-semibold text-14 rounded-full"
                >
                  Continue Shopping
                </Link>
                <button className="px-[27px] py-2 bg-black font-semibold text-14 text-white rounded-full">
                  Clear Shopping Cart
                </button>
              </div>
              <div className="space-x-4">
                <button className="px-[27px] py-2 bg-black font-semibold text-14 text-white rounded-full">
                  Update Shopping Cart
                </button>
              </div>
            </div>
          </div>
          {/* Summary */}
          <div>
            {" "}
            <div className="px-[30px] pt-[17px] pb-[26px] bg-gray  ">
              <h2 className="text-[24px] font-semibold">Summary</h2>

              {/* Estimate Shipping and Tax */}
              <div className="">
                <h3 className="mt-[18px] text-xl cursor-pointer">
                  Estimate Shipping and Tax
                </h3>
                <p className="text-14 w-[287px] mt-[12px] text-[#666666]">
                  Enter your destination to get a shipping estimate.
                </p>
              </div>

              {/* Apply Discount Code */}
              <div className=" mt-[20px]">
                <div className=" flex justify-between items-center">
                  <h3 className="cursor-pointer text-xl">
                    Apply Discount Code
                  </h3>
                  <div
                    onClick={() =>
                      setApplyDiscountCodeDropdown(!applyDiscountCodeDropdown)
                    }
                    className="w-5 h-5 cursor-pointer"
                  >
                    <IoIosArrowDown
                      className={`  cursor-pointer transition-all duration-500 ${
                        applyDiscountCodeDropdown ? " rotate-180" : null
                      }`}
                    />
                  </div>
                </div>
                {/* Discount Input */}
                <div
                  className={` sm:flex sm:flex-col transition-all duration-300 ${
                    applyDiscountCodeDropdown
                      ? " mt-[20px] opacity-1 visible"
                      : " h-0 mt-0 opacity-0 invisible"
                  }`}
                >
                  <label
                    className="font-poppins text-13 font-semibold"
                    htmlFor=""
                  >
                    Enter Discount code <span className="text-red">*</span>
                  </label>
                  <input
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className=" uppercase border-[1px] lg:w-[449px] outline-none border-gray_2 px-4 mt-2 font-poppins font-light text-14 py-3 rounded-[4px]"
                    placeholder="Enter Discount Code"
                    type="text"
                  />
                </div>
              </div>

              {/* Summary Details */}
              <div className="border-t w-[446px] border-gray_2 pt-[18px] pb-[26px] mt-[25px]">
                <div className="flex text-14 justify-between items-center font-semibold">
                  <span>Subtotal</span>
                  <span>$13,047.00</span>
                </div>

                <div className="flex font-semibold text-14 justify-between mt-[15px]">
                  <span>Shipping</span>
                  <span>$21.00</span>
                </div>

                <p className="text-sm w-[300px] text-[#6666] mt-[10px]">
                  (Standard Rate - Price may vary depending on the
                  item/destination. TECS Staff will contact you.)
                </p>

                <div className="flex text-14 font-semibold justify-between mt-[15px]">
                  <span>Tax</span>
                  <span>$1.91</span>
                </div>

                <div className="flex text-14 font-semibold justify-between mt-[15px]">
                  <span>GST (10%)</span>
                  <span>$1.91</span>
                </div>
                <div className="flex text-14 justify-between font-semibold text-lg mt-[15px]">
                  <span>Order Total</span>
                  <span>$13,068.00</span>
                </div>
              </div>

              {/* Buttons */}
              <button className="w-full py-[17px] mt-[15px] bg-primary text-14 font-semibold text-white rounded-full">
                Proceed to Checkout
              </button>
              <button className="w-full py-[17px] mt-[15px]  text-14 font-semibold bg-secondary_2 text-black rounded-full flex items-center justify-center">
                Check out with <span className="ml-2">PayPal</span>
              </button>
              <button className="w-full py-[17px] mt-[15px] text-gray_2 text-14 font-semibold border-[3px] border-gray_2 rounded-full text-gray-600">
                Check Out with Multiple Addresses
              </button>

              {/* Promotional Message */}
              <p className="mt-4 text-sm flex justify-center items-center gap-3">
                <img className=" h-5" src="/Zip_logo.png" alt="" />{" "}
                <span className=" w-[3px] bg-[#00AEB8] h-[20px] rounded-full "></span>{" "}
                <span className=" text-[12px] text-[#272560]">
                  <span className=" font-semibold text-[#272560] text-14">
                    own
                  </span>{" "}
                  it now, up to 6 months interest-free{" "}
                  <Link className="underline text-[#272560]">learn more</Link>
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShoppingCart;
