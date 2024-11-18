import React, { useEffect, useState } from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import Container from "../Components/Container";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LuDot } from "react-icons/lu";
import { useAuth } from "../../src/AuthContext";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import HoverDivs from "../Components/HoverEffect";
import HoverEffect from "../Components/HoverEffect";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setIsLogin, isLogin, setLoggedInUser, setUserImg } = useAuth();
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Enter your email and password", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        className: "text-[13px]",
      });
      return;
    }

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLogin(true);

        // Success toast notification
        toast.success("Login Successful!", {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            email: user.email,
            profileImageUrl: "/account.jpg",
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        if (errorCode === "auth/invalid-credential") {
          toast.error("Invalid email or password", {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            className: "text-[13px]",
          });
        } else if (errorCode === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.", {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            className: "text-[13px]",
          });
        } else if (errorCode === "auth/user-not-found") {
          toast.error("Invalid email or password", {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            className: "text-[13px]",
          });
        }
      });
  };

  return (
    <div className="pb-[58px]">
      <Container>
        <Breadcrumbs />
        {/* Registerd Customers */}
        <div className=" lg:flex-row flex sm:flex-col justify-center gap-[34px]">
          {/* Sign in */}
          <div className=" lg:w-[564px] sm:w-auto py-[37px] lg:px-[58px] sm:px-[18px] bg-gray">
            <h1 className=" text-xl font-poppins font-semibold text-black">
              Registered Customers
            </h1>
            <p className=" mt-[17px] text-14 font-poppins font-light text-black">
              If you have an account, sign in with your email address.
            </p>

            {/* Email Or Phone number */}
            <div className=" mt-[20px] sm:flex sm:flex-col">
              <label className="font-poppins text-13 font-semibold" htmlFor="">
                Email Or Password <span className="text-red">*</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-[1px] lg:w-[449px] outline-none border-gray_2 px-4 mt-2 font-poppins font-light text-14 py-3 rounded-[4px]"
                placeholder="Your Email Or Phone Number"
                type="email"
                required
              />
            </div>

            {/* Password */}
            <div className=" mt-[20px] sm:flex sm:flex-col">
              <label className="font-poppins text-13 font-semibold" htmlFor="">
                Pasword <span className="text-red">*</span>
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-[1px] lg:w-[449px] outline-none border-gray_2 px-4 mt-2 font-poppins font-light text-14 py-3 rounded-[4px]"
                placeholder="Your Password"
                type="password"
                required
              />
            </div>
            {/* Login Button */}
            <div className=" mt-[30px] flex gap-[23px] items-center">
              <button>
                {" "}
                <Link
                  onClick={handleLogin}
                  className=" font-poppins font-semibold text-14 text-white rounded-full bg-primary py-[15.5px] px-[45.5px]"
                >
                  Sign In
                </Link>
              </button>
              <p className=" text-14 font-normal font-poppins text-primary">
                <Link>Forgot Your Password?</Link>
              </p>
            </div>
          </div>

          {/* <>?</> <>?</> <>?</> <>?</> <>?</> <>?</> <>?</> <>?</> <>?</> <>?</> <>?</> <>?</> <>?</> <>?</> <>?</> <>?</> <>?</> */}

          {/* New Customer? */}
          <div className=" lg:w-[564px] sm:w-auto py-[37px] lg:px-[58px] sm:px-[18px] bg-gray">
            <h1 className=" text-xl font-poppins font-semibold text-black">
              New Customer?{" "}
            </h1>
            <p className=" mt-[17px] text-14 font-poppins font-light text-black">
              Creating an account has many benefits:{" "}
            </p>
            <ul className=" pt-9">
              <li className=" flex items-center justify-start">
                <LuDot />
                Check out faster
              </li>
              <li className=" flex items-center justify-start">
                <LuDot /> Keep more than one address
              </li>
              <li className=" flex items-center justify-start">
                <LuDot /> Track orders and more
              </li>
            </ul>
            <button className="mt-[37px] font-poppins font-semibold text-14 text-white rounded-full bg-primary py-[15.5px] px-[45.5px]">
              {" "}
              <Link>Create An Account</Link>
            </button>
          </div>
        </div>
        <ToastContainer />
        
      </Container>
    </div>
  );
};

export default Login;
