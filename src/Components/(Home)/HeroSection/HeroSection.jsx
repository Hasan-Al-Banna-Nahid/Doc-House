import React from "react";
import "./HeroSection.css";
import Image from "next/image";
import HeroImage from "../../../../public/Assests/12.jpg";

const HeroSection = () => {
  return (
    <div className="heroSection ">
      <Image
        width={1800}
        unoptimized={false}
        height={400}
        placeholder="blur"
        className="heroImage"
        src={HeroImage}
      />
      <h2 className="text-6xl text-center title">
        Your Best Medical <br /> Help Center
      </h2>
    </div>
  );
};

export default HeroSection;
