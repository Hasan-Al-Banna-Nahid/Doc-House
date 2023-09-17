"use client";
import { AuthContext } from "@/app/Authentication/AuthProvider/AuthProvider";
import { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactData = () => {
  const { user } = useContext(AuthContext);
  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const doctor = form.doctor.value;
    const time = form.time.value;
    const date = form.date.value;
    const service = form.service.value;
    const datas = {
      email,
      name,
      phone,
      doctor,
      time,
      date,
      service,
      userEmail: user?.email,
    };
    const toastId = toast.loading("Loading");
    if (user) {
      const res = await fetch(
        `https://dochouse-iamnahid591998-gmailcom.vercel.app/booking`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(datas),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data) {
        form.reset();
        toast.dismiss(toastId);
        toast.success("Your Appointment is Successfully Booked");
      }
    } else {
      toast.dismiss(toastId);
      toast("You Have To login first For Book An Appointment");
    }
  };
  return (
    <>
      <form onSubmit={handleBooking}>
        <ToastContainer />
        <div className="grid md:grid-cols-2 mx-auto md:w-[800px] gap-6 text-slate-800">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Your Email</span>
            </label>
            <label className="input-group">
              <span className="bg-slate-600">Email</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered"
                name="email"
                required
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Your Name</span>
            </label>
            <label className="input-group">
              <span className="bg-slate-600">Name</span>
              <input
                type="text"
                placeholder="Hasan Al Banna"
                className="input input-bordered"
                name="name"
                required
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Your Phone</span>
            </label>
            <label className="input-group">
              <span className="bg-slate-600">Mobile</span>
              <input
                type="number"
                placeholder="+8801896085259"
                className="input input-bordered"
                name="phone"
                required
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Doctor Name</span>
            </label>
            <label className="input-group">
              <span className="bg-slate-600">Doctor</span>
              <input
                type="text"
                placeholder="Mr. Nahid "
                className="input input-bordered text-slate-800"
                name="doctor"
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Service</span>
            </label>
            <label className="input-group">
              <span className="bg-slate-600">Service</span>
              <input
                type="text"
                placeholder="Orthopedic"
                className="input input-bordered text-slate-800"
                name="service"
                required
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Date</span>
            </label>
            <label className="input-group">
              <span className="bg-slate-700">Date</span>
              <input
                type="date"
                placeholder="01-01-2023"
                className="input input-bordered text-slate-800"
                name="date"
                required
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Time</span>
            </label>
            <label className="input-group">
              <span className="bg-slate-600">Time</span>
              <input
                type="text"
                placeholder="7:00 PM"
                className="input input-bordered text-slate-800"
                name="time"
                required
              />
            </label>
          </div>
        </div>
        <button
          className="btn my-4 md:w-full bg-[#F7A582] font-bold text-[20px]"
          // style={{ width: "100%" }}
        >
          Book Now
        </button>
      </form>
    </>
  );
};

export default ContactData;
