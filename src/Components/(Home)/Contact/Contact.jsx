import React from "react";
import ContactData from "../ContactData/ContactData";

const Contact = () => {
  return (
    <>
      <div className="bg-[#06332F]  text-white md:w-[1200px] rounded p-12 my-4 mx-auto">
        <div>
          <h2 className="text-purple-700 text-3xl my-4 p-4 text-center">
            Book A Service
          </h2>
        </div>
        <div className=" mx-auto">
          <ContactData />
        </div>
      </div>
    </>
  );
};

export default Contact;
