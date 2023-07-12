"use client";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const ManageBookings = () => {
  const [bookings, setBooking] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-[20px] font-bold"></th>
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
                <tr>
                  <th className="text-[18px] font-bold">{index + 1}</th>
                  <td className="text-[18px] font-bold">{booking.name}</td>
                  <td className="text-[18px] font-bold"> {booking.service}</td>
                  <td className="text-[18px] font-bold">{booking.userEmail}</td>
                  <td>
                    <div className="flex gap-4 items-center">
                      <div>
                        <button className="btn">Accept</button>
                      </div>
                      <div>
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
