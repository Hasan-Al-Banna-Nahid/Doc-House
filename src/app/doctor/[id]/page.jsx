import loadSingleBlogData from "@/utils/loadSingleBlogData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Doctor = async ({ params }) => {
  //   const {
  //     doctorName,
  //     img,
  //     designation,
  //     price,
  //     rating,
  //     chamber,
  //     appointmentTime,
  //     about,
  //     service,
  //     workExperience,
  //     award,
  //     specialization,
  //   } = await loadSingleBlogData(params.id);
  const data = await loadSingleBlogData(params.id);
  return (
    <div>
      <button className="badge mx-auto text-center my-4 md:w-[400px] badge-outline badge-primary p-6">
        <Link href={"/"}>Home</Link>
      </button>
      <div>
        <div className="md:flex md:w-[800px] mx-auto justify-center items-center gap-4 bg-slate-400 rounded-lg p-6 my-6">
          <div>
            {/* <Image
              src={
                "/Assests/Doctors/portrait-smiling-handsome-male-doctor-man.jpg"
              }
              width={400}
              height={400}
              alt="Doctor Image"
              className="border-4"
            /> */}
          </div>
          <div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {data.doctorName}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
