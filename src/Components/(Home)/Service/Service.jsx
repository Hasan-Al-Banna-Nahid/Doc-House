"use client";
import Image from "next/image";
import React, { useState } from "react";
import doctor from "../../../../public/Assests/4033 (2).png";
import DigestiveSystem from "../../../../public/Assests/gastric-removebg-preview.png";
import "./Service.css";

const Service = () => {
  return (
    <div>
      <div>
        <div className="md:my-14 p-6 text-center">
          <div>
            <h2 className="text-4xl  text-purple-600 my-4 font-bold">
              Our Service
            </h2>
            <p className="md:text-xl my-4 text-slate-800">
              We Provide All Types Of Medical Service.
            </p>
            <div className="grid md:grid-cols-3 gap-4 ">
              <div>
                <button className="btn  bg-[#F7A582] btn-outline w-[200px]">
                  Cavity Protection
                </button>
              </div>
              <div>
                <button className="btn btn-primary btn-outline w-[200px]">
                  Cosmetic Density
                </button>
              </div>
              <div>
                <button className="btn btn-info btn-outline w-[200px]">
                  Oral Surgery
                </button>
              </div>
              <div>
                <button className="btn btn-primary btn-outline w-[200px]">
                  Pediatrics
                </button>
              </div>
              <div>
                <button className="btn btn-secondary btn-outline w-[200px]">
                  Emergency medicine
                </button>
              </div>
              <div>
                <button className="btn btn-primary btn-outline w-[200px]">
                  Urology
                </button>
              </div>
              <div>
                <button className="btn btn-warning btn-outline w-[200px]">
                  Surgery
                </button>
              </div>
              <div>
                <button className="btn btn-primary btn-outline  w-[200px]">
                  Gynecology
                </button>
              </div>
              <div>
                <button className="btn btn-warning btn-outline w-[200px]">
                  Cardiology
                </button>
              </div>
            </div>
            <div>
              <button className="badge-outline badge-warning my-6 badge p-6">
                View All Service
              </button>
            </div>
            <div>
              <div className="my-4">
                <Image
                  width={400}
                  height={300}
                  src={DigestiveSystem}
                  placeholder="blur"
                  className="mx-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl text-center my-4 font-bold">
                  Electro Gastrology Therapy
                </h2>

                <button className="btn mx-auto  bg-[#F7A582] btn-outline">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
