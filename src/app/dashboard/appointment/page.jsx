"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaWallet } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Appointment = () => {
  const [bookings, setBooking] = useState([]);
  useEffect(() => {
    fetch("https://dochouse.vercel.app/booking")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  const handleRemoveBooking = (booking) => {
    fetch(`https://dochouse.vercel.app/booking/${booking._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const toastId = toast.loading("Loading");
        if (data.deletedCount > 0) {
          toast.dismiss(toastId);
          toast.success("Booking Cancelled");
          const remaining = bookings.filter(
            (booking) => booking._id !== booking._id
          );
          setBooking(remaining);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <ToastContainer />
      <h2 className="text-3xl text-center my-8 font-bold text-blue-800">
        Appointment
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-base-300 rounded">
            {bookings && (
              <tr>
                <th className="font-bold text-[20px]">#</th>
                <th className="font-bold text-[20px]">doctor</th>
                <th className="font-bold text-[20px]">time</th>
                <th className="font-bold text-[20px]">Service</th>
                <th className="font-bold text-[20px]">Date</th>
                <th className="font-bold text-[20px]">Actions</th>
              </tr>
            )}
          </thead>
          <tbody>
            {bookings &&
              bookings.map((booking, index) => {
                return (
                  <>
                    <tr>
                      <th className="font-bold text-[18px]">{index + 1}</th>
                      <td className="font-bold text-[18px]">
                        {booking.doctor}
                      </td>
                      <td className="font-bold text-[18px]">{booking.time}</td>
                      <td className="font-bold text-[18px]">
                        {booking.service}
                      </td>
                      <td className="font-bold text-[18px]">{booking.date}</td>
                      <td className="font-bold text-[22px]">
                        <div className="flex gap-4">
                          <div>
                            <a>
                              <button className="text-[18px]">
                                {" "}
                                <FaWallet className="text-blue-600" />
                              </button>{" "}
                            </a>
                          </div>
                          <div onClick={() => handleRemoveBooking(booking)}>
                            <button className="text-[18px] text-red-700">
                              <FaTrashAlt />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Appointment;
