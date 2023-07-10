"use client";
import Footer from "@/Components/(Home)/Footer/Footer";
import Header from "@/Components/(Home)/Header/Header";
import Image from "next/image";

import React, { useState } from "react";
import Calendar from "react-calendar";

const Appointment = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Header />
      <form>
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image
                width={2000}
                height={2000}
                src="/Assests/empty-modern-teethcare-stomatology-hospital-office-with-nobody-it-equipped-with-dental-intruments-ready-orthodontist-healthcare-treatment-tooth-radiography-images-display.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />

              <div className="bg-base-300 p-6 rounded">
                <h2 className="text-2xl font-bold text-blue-500">
                  Select A Date For Appointment
                </h2>
                <Calendar
                  className="text-slate-900"
                  onChange={onChange}
                  value={value}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-4">
          <h2 className="text-orange-500 font-bold mb-4">
            Available Services on &nbsp; {Date()}
          </h2>
          <h2 className="text-3xl text-slate-900 font-bold">
            Please Select A Service
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 my-6 mx-auto w-[800px]">
          <div>
            <div className="flex items-center gap-2">
              <div>
                <Image width={100} height={100} src={"/Assests/body.jpg"} />
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
              <div className="flex items-center gap-2">
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
              <div className="flex items-center gap-2">
                <div>
                  <Image width={100} height={100} src={"/Assests/body.jpg"} />
                </div>
                <div>
                  <h2 className="font-bold">
                    Teeth <br /> Cleaning
                  </h2>
                  <button className="btn btn-success">Book</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center gap-2">
                <div>
                  <Image width={100} height={100} src={"/Assests/body.jpg"} />
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
              <div className="flex items-center gap-2">
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
              <div className="flex items-center gap-2">
                <div>
                  <Image width={100} height={100} src={"/Assests/body.jpg"} />
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
