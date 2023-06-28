"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { BsCalendar2Date } from "react-icons/bs";

import "react-datepicker/dist/react-datepicker.css";

const ContactData = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
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
        <button
          className="btn my-4 bg-[#F7A582] font-bold text-[20px]"
          style={{ width: "100%" }}
        >
          Book Now
        </button>
      </form>
    </>
  );
};

export default ContactData;
