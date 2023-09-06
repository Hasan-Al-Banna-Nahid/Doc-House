"use client";
import React from "react";
import {
  FaClock,
  FaLocationArrow,
  FaPhoneAlt,
  FaSearchLocation,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="flex md:w-[400px] bg-[#07332F] p-12 rounded-lg text-[20px] text-white">
          <div>
            <FaClock className="text-4xl ms-4" />
          </div>
          <div className="p-4">
            <h2>Opening Hours</h2>
            <p>Open 9.00 am to 5.00pm Everyday</p>
          </div>
        </div>
        <div>
          <div className="flex bg-[#F7A582] p-12 rounded-lg text-[20px] ">
            <div>
              <FaLocationArrow className="text-4xl ms-4" />
            </div>
            <div className="p-4">
              <h2>Our Location</h2>
              <p>Chittagong</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex bg-[#07332F] p-12 rounded-lg text-[20px] text-white">
            <div>
              <FaPhoneAlt className="text-4xl ms-4" />
            </div>
            <div className="p-4">
              <h2>Contact US</h2>
              <p>+8801896085259</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
