import React from "react";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import ContactData from "../ContactData/ContactData";

const Contact = () => {
  return (
    <>
      <div className="bg-[#06332F] flex justify-center text-white w-[1200px] rounded p-12 my-4 mx-auto">
        <div>
          <h2 className="font-bold text-[26px] my-4 text-blue-500">
            Contact With Us
          </h2>
          <p className="font-bold text-[20px] my-4 mr-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
            <br />
            accusantium doloremque laudantium,
            <br /> totam rem aperiam, eaque ipsa <br />
            quae ab illo inve ntore veritatis et quasi.
          </p>
          <p className="font-bold text-[20px] my-4  text-red-500">
            <FaPhoneAlt className="my-2" /> +8801896085259
          </p>
          <p className="font-bold text-[20px] my-4  text-purple-500">
            <FaLocationArrow /> Feni,Bangladesh
          </p>
        </div>
        <div>
          <ContactData />
        </div>
      </div>
    </>
  );
};

export default Contact;
