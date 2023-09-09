"use client";
import React from "react";
import "./HeroSection.css";
import Image from "next/image";
import HeroImage from "../../../../public/medicine-capsules-global-health-with-geometric-pattern-digital-remix.jpg";
import Doctor1 from "../../../../public/Assests/Doctors/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture-removebg-preview.png";
import Doctor2 from "../../../../public/Assests/Doctors/successful-medical-team-removebg-preview.png";
import Doctor3 from "../../../../public/Assests/Doctors/smiling-doctor-with-strethoscope-isolated-grey-removebg-preview.png";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <Image
        width={1800}
        unoptimized={false}
        height={400}
        placeholder="blur"
        className="heroImage"
        src={HeroImage}
      />
      <div className="flex heroContent items-center justify-center absolute top-[400px] left-[150px]">
        <div className="titleInfo">
          <h2 className="text-7xl title my-6 text-[#2c2c54]">
            Your Best Medical <br /> Help Center
          </h2>
          <p className="text-[26px] subtitle my-6 text-slate-800">
            Lorem Ipsum is simply dummy text they are printing typesetting has
            been the industry’s stardard.
          </p>
          <button className="btn btn-outline btn-secondary sm:my-4">
            All Service
          </button>
        </div>
        <div className="flex gap-8">
          <div className="absolute -top-[130px] right-[200px] ">
            <Image
              src={Doctor1}
              unoptimized={false}
              width={400}
              height={400}
              placeholder="blur"
              className="border-slate-800 bg-white border-[20px] doc1"
            />
          </div>
          <div className="z-20">
            <Image
              src={Doctor2}
              unoptimized={false}
              width={600}
              height={600}
              placeholder="blur"
              className="border-slate-800 bg-white  border-[20px] doc2"
            />
          </div>
          <div className="z-20">
            <Image
              src={Doctor3}
              unoptimized={false}
              width={600}
              height={600}
              placeholder="blur"
              className="border-slate-800 bg-white  border-[20px] z-10 doc3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
