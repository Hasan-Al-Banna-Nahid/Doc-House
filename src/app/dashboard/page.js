import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaHome } from "react-icons/fa";

const page = ({ children }) => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {children}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-[22px] h-full bg-[#121C43] text-[#8e44ad] font-bold">
            <li>
              <Image
                width={150}
                height={150}
                src={
                  "/Assests/d307e4100735935.Y3JvcCw4MDgsNjMyLDAsMA-removebg-preview.png"
                }
              />
            </li>
            <div className="divide my-6  border border-red-700"></div>

            <li className="hover:text-[#ecf0f1]">
              <Link href={"/dashboard/appointment"}>
                <FaCalendarAlt className="mx-2" />
                My Appointment
              </Link>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <div className="divide  border border-blue-700 my-6"></div>
            <li className="hover:text-[#ecf0f1]">
              <Link href={"/"}>
                <FaHome className="mx-2" />
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
