"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer  md:p-10 bg-base-300 text-slate-900 ">
        <div>
          <Image
            width={100}
            height={100}
            src={
              "/Assests/d307e4100735935.Y3JvcCw4MDgsNjMyLDAsMA-removebg-preview.png"
            }
          />
          <p className="font-semibold my-4 text-[18px]">
            Doc House.
            <br />
            Providing reliable Medical Solution since 1992
          </p>
          <button className="btn w-96 bg-[#F7A582] btn-outline">
            <Link href={"/appointment"}>Appointment</Link>
          </button>
        </div>
        {/* Links */}
        <div className="grid md:grid-cols-3 gap-6 mx-auto">
          <div>
            <h2 className="text-[20px] text-slate-950 font-bold my-4">
              Quick Links
            </h2>
            <ul className="text-[18px] py-4">
              <li className="my-2">About Us</li>
              <li className="my-2">Service</li>
              <li className="my-2">Doctors</li>
              <li className="my-2">Departments</li>
              <li className="my-2">Online Payment</li>
              <li className="my-2">Contact Us</li>
              <li className="my-2">My Account</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] text-slate-950 font-bold my-4">
              Doc House Services
            </h2>
            <ul className="text-[18px] py-4">
              <li className="my-2">Pediatric Clinic</li>
              <li className="my-2">Diagnosis Clinic</li>
              <li className="my-2">Cardiac Clinic</li>
              <li className="my-2">Laboratory Analysis</li>
              <li className="my-2">Gynecological Clinic</li>
              <li className="my-2">Personal Counseling</li>
              <li>Dental Clinic</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] text-slate-950 font-bold my-4">
              Working Hours
            </h2>
            <ul className="text-[16px] py-4">
              <li className="my-2">Monday - 10 am to 7 pm</li>
              <li className="my-2">Tuesday - 10 am to 7 pm</li>
              <li className="my-2">Wednesday - 10 am to 7 pm</li>
              <li className="my-2">Thursday - 10 am to 7 pm</li>
              <li className="my-2">Friday - 10 am to 7 pm</li>
              <li className="my-2">Saturday - 10 am to 7 pm</li>
              <li>Sunday - 10 am to 7 pm</li>
            </ul>
          </div>
        </div>
        {/* Links */}

        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col mx-auto text-center  gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
