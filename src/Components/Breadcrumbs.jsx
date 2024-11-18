import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom"; // Use this if you're using react-router

const Breadcrumbs = () => {
  // Get the current pathname
  const pathname = window.location.pathname;

  // Split the pathname into individual parts and decode them
  const pathParts = pathname
    .split("/")
    .filter((part) => part)
    .map((part) => decodeURIComponent(part));

  return (
    <div className="font-poppins text-[12px] text-black ">
      <ul className="flex items-center gap-1  py-[21px]">
        {/* Home Link */}
        <li>
          <Link
            to="/"
            className="font-poppins text-[12px] text-black hover:underline"
          >
            Home
          </Link>
          {/* Separator */}
        </li>
        <IoIosArrowForward className=" text-black" />
        {/* Dynamic Path Links */}
        {pathParts.map((part, index) => {
          // Build the path to link to the breadcrumb
          const path = `/${pathParts.slice(0, index + 1).join("/")}`;
          // Check if it's the last part of the path (current page)
          const isLast = index === pathParts.length - 1;

          return (
            <li key={index} className="flex items-center">
              {/* Conditional rendering for last breadcrumb */}
              {!isLast ? (
                <>
                  <Link to={path} className="text-primary hover:underline">
                    {part.charAt(0).toUpperCase() +
                      part.slice(1).replace(/-/g, " ")}
                  </Link>
                  {/* Separator */}
                </>
              ) : (
                <span className="text-primary cursor-none">
                  {part.charAt(0).toUpperCase() +
                    part.slice(1).replace(/-/g, " ")}
                </span>
              )}
            </li>
          );
        })}
       
      </ul>
      <div className=" font-poppins sm:text-[18px] lg:text-[32px] font-semibold pb-[25px]"> 
          {pathParts.map((part, index) => {
            return (
              <span key={index} className="">
                {part.charAt(0).toUpperCase() +
                  part.slice(1).replace(/-/g, " ")}
              </span>
            );
          })}
        </div>
    </div>
  );
};

export default Breadcrumbs;
