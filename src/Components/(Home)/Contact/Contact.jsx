"use client";
import React, { useState } from "react";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Contact = () => {
  const [startDate, setStartDate] = useState(new Date());
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
          <form>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <label className="input-group">
                  <span className="bg-slate-600">Email</span>
                  <input
                    type="text"
                    placeholder="info@site.com"
                    className="input input-bordered"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <label className="input-group">
                  <span className="bg-slate-600">Name</span>
                  <input
                    type="text"
                    placeholder="Hasan Al Banna"
                    className="input input-bordered"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Phone</span>
                </label>
                <label className="input-group">
                  <span className="bg-slate-600">Mobile</span>
                  <input
                    type="number"
                    placeholder="+8801896085259"
                    className="input input-bordered"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Doctor Name</span>
                </label>
                <label className="input-group">
                  <span className="bg-slate-600">Doctor</span>
                  <input
                    type="text"
                    placeholder="Mr. Nahid "
                    className="input input-bordered"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <label className="input-group">
                  <span className="bg-slate-600 input input-bordered w-96">
                    Date <BsCalendar2Date className="text-2xl ms-4" />
                  </span>

                  <DatePicker
                    className="w-[1px]"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Time</span>
                </label>
                <label className="input-group">
                  <span className="bg-slate-600">Time</span>
                  <input
                    type="text"
                    placeholder="7:00 PM"
                    className="input input-bordered"
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
