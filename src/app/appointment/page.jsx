"use client";
import Footer from "@/Components/(Home)/Footer/Footer";
import Header from "@/Components/(Home)/Header/Header";
import Image from "next/image";

import React, { useState } from "react";
import "./style.css";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import ContactData from "@/Components/(Home)/ContactData/ContactData";
import { ToastContainer, toast } from "react-toastify";

const Appointment = () => {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState("");
  const [event, setEvent] = useState("");

  const handleEventScheduled = (e) => {
    setEvent(e.data.payload);
    console.log("onEventScheduled");

    fetch("https://dochouse.vercel.app/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // Fixed typo here
      body: JSON.stringify({ ZOOM: date, event }),
    })
      .then((response) => {
        // Handle the response from the backend if needed
        if (response.ok) {
          toast.success("Event data sent successfully to the backend.");
        } else {
          toast.error("Failed to send event data to the backend.");
        }
      })
      .catch((error) => {
        console.error("Error sending event data:", error);
      });
  };

  // Use the useCalendlyEventListener hook with the event listener
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: (e) => {
      setDate(e.data.payload);
      console.log("onDateAndTimeSelected");
    },
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: handleEventScheduled,
  });

  return (
    <div>
      <ToastContainer />
      <Header />
      <form className="mx-auto">
        <div>
          <div className="hero min-h-screen bg-base-200">
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
        <div>
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
        </div>
        <div className="text-center bg-slate-500 p-4 rounded-lg my-4 ">
          <h2 className="text-orange-500 font-bold mb-4">
            Available Services on &nbsp;
            {new Date().getDate()} {" / "} {new Date().getMonth() + 1} {" / "}{" "}
            {new Date().getFullYear()}
          </h2>
          <h2 className="text-3xl text-slate-900 font-bold">
            Please Select A Service
          </h2>
        </div>
        <div className="grid bg-base-300 service p-4 rounded-lg md:grid-cols-3  gap-6 my-6 mx-auto ">
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

      <Footer />
    </div>
  );
};
export default Appointment;
