import React, { useEffect } from "react";
import BannerSlider from "../layers/BannerSlider";
import Container from "../Components/Container";
import NewProductsSlider from "../layers/NewProductsSlider";
import { Link } from "react-router-dom";
import BrandProdunct from "../layers/BrandProdunct";
import InstaNews from "../layers/InstaNews";
import ReviewSlider from "../layers/ReviewSlider";
import { useAuth } from "../../src/AuthContext";

const Home = () => {
  const { setIsLogin, setLoggedInUser, setUserImg } = useAuth();

  useEffect(() => {
    // img url save in local storage (Arif)
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser); // Parse once and use it
      setLoggedInUser(parsedUser);
      setUserImg(parsedUser.profileImageUrl); // Use parsedUser instead of loggedInUser
      setIsLogin(true);
    }
  }, [setUserImg]);

  return (
    <div className=" pb-14">
      <Container>
        <div className="lg:mt-0 sm:mt-[12px]">
          <BannerSlider />
        </div>
        <div className=" mt-[37px]">
          {/* Like Title */}
          <div className=" flex justify-between items-center text-13 font-poppins">
            <h1 className=" font-poppins text-[22px] font-semibold">
              New Products
            </h1>
            <Link to={`/product catalog`} className=" text-primary underline">
              See All New Products{" "}
            </Link>
          </div>
          {/* Product Slider */}
          <div className=" sm:w-auto md:w-auto">
            <NewProductsSlider />
          </div>
        </div>

        <div className="font-poppins bg-[#F5F7FF] flex justify-center items-center gap-3 mt-[18px]">
          {" "}
          <div className="py-[21px]">
            <img src="/Zip_logo.png" alt="" />
          </div>
          <span className=" h-[23px] w-[3px] bg-[#00AEB8] rounded-full"></span>
          <p className=" text-xl font-normal text-[#272560]">
            <span className=" font-semibold text-[20px]">own</span> it now, up
            to 6 months interest free{" "}
            <Link className=" underline text-14">learn more</Link>
          </p>
        </div>

        {/* Brand_Products */}
        <BrandProdunct />

        {/* Follow us on Instagram for News, Offers & More */}
        <div>
          <h1 className=" mt-[42px] font-poppins text-[22px] font-semibold">
            Follow us on Instagram for News, Offers & More
          </h1>{" "}
          {/* Instagram_Feed */}
          <InstaNews />
        </div>

        {/* Review Part */}
        <div className=" relative w-[1160px] h-[300px] pt-[60px] bg-gray mx-auto mt-[58px] pl-[191px] pr-[119px]">
          {/* Review Slider */}
          <ReviewSlider />
          <button className="absolute left-[119px] top-[60px]">
            <img src="/icon.png" alt="" />
          </button>
          <button className="absolute left-[119px] top-[70%] px-[26px] py-2 rounded-full border font-poppins text-primary">
            Leave Us A Review
          </button>
        </div>

        {/* Support */}
      </Container>
    </div>
  );
};

export default Home;
