"use client";
import { AuthContext } from "@/app/Authentication/AuthProvider/AuthProvider";
import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const ManageBookings = () => {
  const [bookings, setBooking] = useState([]);

  useEffect(() => {
    fetch(`https://dochouse.vercel.app/booking`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  const handleBooking = (booking) => {
    const data = {
      email: booking.userEmail,
      service: booking.service,
      name: booking.name,
    };
    fetch(`https://dochouse.vercel.app/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Service Booked");
      });
  };
  const handleRemoveBooking = (bookings) => {
    fetch(`https://dochouse.vercel.app/booking/${bookings._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const toastId = toast.loading("Loading");
        if (data.deletedCount > 0) {
          toast.dismiss(toastId);
          toast.success("Booking Cancelled");
          const remaining = bookings.filter(
            (booking) => booking._id !== bookings._id
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
        Manage Bookings
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-[20px] font-bold">#</th>
              <th className="text-[20px] font-bold">Name</th>
              <th className="text-[20px] font-bold">Service</th>
              <th className="text-[20px] font-bold">Email </th>
              <th className="text-[20px] font-bold">Actions </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking, index) => {
              return (
                <tr key={index}>
                  <th className="text-[18px] font-bold">{index + 1}</th>
                  <td className="text-[18px] font-bold">{booking.name}</td>
                  <td className="text-[18px] font-bold"> {booking.service}</td>
                  <td className="text-[18px] font-bold">
                    {booking.userEmail || booking.email}
                  </td>
                  <td>
                    <div className="flex gap-4 items-center">
                      <div onClick={() => handleBooking(booking)}>
                        <button className="btn">Accept</button>
                      </div>
                      <div onClick={() => handleRemoveBooking(booking)}>
                        <button>
                          <FaTrash className=" text-red-700 text-[18px]" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
