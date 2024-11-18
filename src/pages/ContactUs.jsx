import React, { useState } from "react";
import Container from "../Components/Container";
import Breadcrumbs from "../Components/Breadcrumbs";
import { FaRegClock } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { FaPhoneFlip } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid"; // Importing UUID for unique ID generation
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const db = getDatabase();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validPhone = /^\d{10,15}$/;
  const navigate = useNavigate();

  const submit = () => {
    const userId = uuidv4();

    // Validate
    if (!name || !email || !phoneNumber || !message) {
      toast.error("Please fill up all the fields!", {
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
    } else if (!validEmail.test(email)) {
      toast.error("Please enter a valid email address!", {
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
    } else if (!validPhone.test(phoneNumber)) {
      toast.error("Please enter a valid phone number", {
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
    } else {
      toast.success(
        "Thank you for contacting us! We'll get back to you soon.!",
        {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
          className: " text-[18px]",
        }
      );

      const writeUserData = (userId, navigate) => {
        set(ref(db, "users/" + userId), {
          username: name,
          email: email,
          message: message,
          phonenumber: phoneNumber,
        })
          .then(() => {
            setTimeout(() => {
              navigate("/");
            },3000);
          })
          .catch((error) => {
            console.error("Error saving data: ", error);
          });
      };
      writeUserData(userId, navigate);
    }
  };

  return (
    <div>
      <Container>
        <Breadcrumbs />
        <div className="font-poppins sm:text-[12px] lg:text-[16px] font-light sm:space-y-[5px] lg:space-y-[10px]">
          <p>We love hearing from you, our Shop customers.</p>
          <p>
            Please contact us and we will make sure to get back to you as soon
            as we possibly can.
          </p>
        </div>

        {/* Collect user details */}
        <div className="mt-10 pb-[123px]">
          <div className="flex sm:flex-col lg:flex-row mt-[25px] lg:justify-between">
            <div>
              <div className="sm:space-y-[20px] lg:sm:space-y-[0px] lg:flex lg:gap-[30px]">
                {/* Name */}
                <div className="flex flex-col relative">
                  <label
                    className="font-poppins text-13 font-semibold"
                    htmlFor=""
                  >
                    Your Name <span className="text-red">*</span>
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-[1px] lg:w-[449px] outline-none border-gray_2 px-4 mt-2 font-poppins font-light text-14 py-3 rounded-[4px]"
                    placeholder="Your Name"
                    type="text"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col relative">
                  <label
                    className="font-poppins text-13 font-semibold"
                    htmlFor=""
                  >
                    Your Email <span className="text-red">*</span>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-[1px] lg:w-[449px] outline-none border-gray_2 px-4 mt-2 font-poppins font-light text-14 py-3 rounded-[4px]"
                    placeholder="Your Email"
                    type="email"
                  />
                </div>
              </div>

              {/* Phone number */}
              <div className="flex flex-col mt-[20px] relative">
                <label
                  className="font-poppins text-13 font-semibold"
                  htmlFor=""
                >
                  Your Phone Number <span className="text-red">*</span>
                </label>
                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border-[1px] lg:w-[449px] outline-none border-gray_2 px-4 mt-2 font-poppins font-light text-14 py-3 rounded-[4px]"
                  placeholder="Your Phone Number"
                  type="text"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col mt-[20px] relative">
                <label
                  className="font-poppins text-13 font-semibold"
                  htmlFor=""
                >
                  What’s on your mind? <span className="text-red">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full sm:h-[145px] lg:h-[236px] mt-2 border-[1px] border-gray_2 rounded-[4px] p-[17px] focus:outline-none resize-none"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={submit}
                className="bg-primary text-white px-[48px] py-[15px] sm:mb-[24px] mt-[20px] rounded-full transition-all duration-200"
              >
                Submit
              </button>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-gray-50 px-[38px] py-[31px]  bg-gray  mx-auto">
                {/* Address Section */}
                <div className="flex mb-6">
                  <GoLocation className="lg:text-[25px] sm:text-[20px] text-black mr-4" />
                  <div>
                    <h3 className="lg:text-xl sm:text-[14px] font-semibold">
                      Address:
                    </h3>
                    <p className="sm:text-[11px] lg:text-[13px]">
                      1234 Street Address City Address, 1234
                    </p>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="flex  mb-6">
                  <div className="lg:w-[25px] sm:w-[20px] center mr-4 lg:h-[25px] sm:h-[20px] rounded-full lg:border-[3px] sm:border-[1px]">
                    <FaPhoneFlip className=" text-[12px]" />
                  </div>
                  <div>
                    <h3 className="lg:text-xl sm:text-[14px] font-semibold">
                      Phone:
                    </h3>
                    <p className="sm:text-[11px] lg:text-[13px]">
                      (00)1234 5678
                    </p>
                  </div>
                </div>

                {/* Open Hours Section */}
                <div className="flex  mb-6">
                  <FaRegClock className="lg:text-[25px] sm:text-[21px] text-black mr-4" />
                  <div>
                    <h3 className="lg:text-xl sm:text-[14px] font-semibold">
                      We are open:
                    </h3>
                    <p className="sm:text-[11px] lg:text-[13px]">
                      Monday - Thursday: 9:00 AM - 5:30 PM <br />
                      Friday: 9:00 AM - 6:00 pxPM <br />
                      Saturday: 11:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex items-start">
                  <div className="lg:w-[25px] sm:w-[20px] center mr-4 lg:h-[25px] sm:h-[20px] rounded-full lg:border-[3px] sm:border-[1px]">
                    <SiGmail className=" text-[12px]" />
                  </div>
                  <div>
                    <h3 className="lg:text-xl sm:text-[14px] font-semibold">
                      E-mail:
                    </h3>
                    <a
                      href="mailto:shop@email.com"
                      className="text-primary hover:underline sm:text-[11px] lg:text-[13px]"
                    >
                      shop@email.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
