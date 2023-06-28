import React from "react";

const handleBookingAPI = async () => {
  const res = await fetch("http://localhost:5000/booking");
  const data = await res.json();
  return data;
};

export default handleBookingAPI;
