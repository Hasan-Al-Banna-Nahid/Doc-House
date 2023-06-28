"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaLocationArrow, FaDollarSign, FaCalendarAlt } from "react-icons/fa";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="my-4 font-bold text-2xl">Our Expert Doctors</h2>
        <p className="my-4 font-medium">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa{" "}
          <br />
          quae ab illo inve ntore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </p>
        <div>
          <div className="grid md:grid-cols-3 gap-6 w-[1300px] mx-auto">
            {doctors &&
              doctors.map((doctor) => {
                return (
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <Image
                        width={200}
                        height={200}
                        src={
                          "/Assests/Doctors/smiling-doctor-with-strethoscope-isolated-grey-removebg-preview.png"
                        }
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{doctor.doctorName}</h2>
                      <p>{doctor.designation}</p>
                      <p>
                        <Rating start={0} stop={doctor.rating} readonly />
                      </p>
                      <p>Feni : {doctor.chamber}</p>
                      <p>Appointment : {doctor.appointmentTime}</p>
                      <p>Fees : ${doctor.price}</p>
                      <div className="card-actions w-full">
                        <button className="btn btn-primary btn-outline w-full">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
