"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import Link from "next/link";

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
        <p className="my-4 font-semibold">
          Our Best's Doctor For Everyone's Good Health
        </p>
        <div>
          <div className="grid md:grid-cols-3 gap-6 w-[1300px] mx-auto text-slate-900">
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
                        <Rating start={0} stop={doctor.rating} />
                      </p>
                      <p>Feni : {doctor.chamber}</p>
                      <p>Appointment : {doctor.appointmentTime}</p>
                      <p>Fees : ${doctor.price}</p>
                      <div className="card-actions w-full ">
                        {" "}
                        <Link href={`/doctor/${doctor._id}`}>
                          <button className="btn btn-primary btn-outline mr-2 w-[350px] ">
                            Book Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="w-96 mx-auto text-center my-8">
        <button className="badge badge-outline badge-primary p-4 mx-auto w-96">
          View All Doctor
        </button>
      </div>
    </div>
  );
};

export default Doctors;
