"use client";
import Footer from "@/Components/(Home)/Footer/Footer";
import Header from "@/Components/(Home)/Header/Header";
import Image from "next/image";

import React, { useState } from "react";
import "./style.css";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const Appointment = () => {
  const [value, onChange] = useState(new Date());
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  return (
    <div>
      <Header />
      <form className="min-w-max">
        <div>
          <div className="hero min-h-screen min-w-max bg-base-200">
            <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
              <div>
                <Image
                  width={2000}
                  height={2000}
                  src="/Assests/empty-modern-teethcare-stomatology-hospital-office-with-nobody-it-equipped-with-dental-intruments-ready-orthodontist-healthcare-treatment-tooth-radiography-images-display.jpg"
                  className="max-w-sm mx-auto rounded-lg shadow-2xl"
                />
              </div>

              <div className="bg-base-300 p-6 rounded">
                <h2 className="text-2xl font-bold text-blue-500">
                  Select A Date For Appointment
                </h2>

                <InlineWidget
                  className="calendly-inline-widget"
                  styles={{ minWidth: "500px", height: "300px" }}
                  url="https://calendly.com/iamnahid591998/zoom-meeting"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-slate-500 p-4 rounded-lg my-4 min-w-max">
          <h2 className="text-orange-500 font-bold mb-4">
            Available Services on &nbsp;
            {new Date().getDate()} {" / "} {new Date().getMonth() + 1} {" / "}{" "}
            {new Date().getFullYear()}
          </h2>
          <h2 className="text-3xl text-slate-900 font-bold">
            Please Select A Service
          </h2>
        </div>
        <div className="grid bg-base-300 service p-4 rounded-lg md:grid-cols-3 sm:grid-cols-2 gap-6 my-6 mx-auto md:w-[800px]">
          <div>
            <div className="flex justify-center items-center gap-2">
              <div>
                <Image width={100} height={100} src={"/Assests/4033 (2).png"} />
              </div>
              <div>
                <h2 className="font-bold">
                  Teeth <br /> Orthodontics
                </h2>

                <button className="btn btn-success">Book</button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-center items-center gap-2">
                <div>
                  <Image width={100} height={100} src={"/Assests/body.jpg"} />
                </div>
                <div>
                  <h2 className="font-bold">
                    Cosmetic <br /> Dentisty
                  </h2>
                  <button className="btn btn-success">Book</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-center items-center gap-2">
                <div>
                  <Image
                    width={100}
                    height={100}
                    src={"/Assests/gastric-removebg-preview.png"}
                  />
                </div>
                <div>
                  <h2 className="font-bold">Surgery</h2>
                  <button className="btn btn-success">Book</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-center items-center gap-2">
                <div>
                  <Image
                    width={100}
                    height={100}
                    src={
                      "/Assests/medicine-bottle-spilling-colorful-pills-depicting-addiction-risks-generative-ai.jpg"
                    }
                  />
                </div>
                <div>
                  <h2 className="font-bold">
                    Cavity <br /> Protection
                  </h2>
                  <button className="btn btn-success">Book</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-center items-center gap-2">
                <div>
                  <Image width={100} height={100} src={"/Assests/body.jpg"} />
                </div>
                <div>
                  <h2 className="font-bold">
                    Pediatric <br /> Dental
                  </h2>
                  <button className="btn btn-success">Book</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-center items-center gap-2">
                <div>
                  <Image
                    width={100}
                    height={100}
                    src={"/Assests/4033 (2).png"}
                  />
                </div>
                <div>
                  <h2 className="font-bold">
                    Oral <br /> Surgery
                  </h2>
                  <button className="btn btn-success">Book</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="min-w-max">
        <Footer />
      </div>
    </div>
  );
};
export default Appointment;
