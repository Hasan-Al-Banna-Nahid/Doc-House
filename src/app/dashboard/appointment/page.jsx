"use client";
import React, { useEffect, useState } from "react";

const Appointment = () => {
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
              <th className="font-bold text-[20px]">#</th>
              <th className="font-bold text-[20px]">doctor</th>
              <th className="font-bold text-[20px]">time</th>
              <th className="font-bold text-[20px]">Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => {
              return (
                <>
                  <tr>
                    <th className="font-bold text-[20px]">{index}</th>
                    <td className="font-bold text-[20px]">{booking.doctor}</td>
                    <td className="font-bold text-[20px]">
                      {booking.time} Specialist
                    </td>
                    <td className="font-bold text-[20px]">{booking.Date}</td>
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
