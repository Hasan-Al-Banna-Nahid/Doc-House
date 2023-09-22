"use client";
import React, { useContext, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";
import { AuthContext } from "@/app/Authentication/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import profileImage from "../../../../public/Assests/avatar.jpg";
import Image from "next/image";

const Header = () => {
  const [isDarkMood, setIsDarkMood] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    const toastId = toast.loading("Loading...");
    logOut();
    toast.dismiss(toastId);
    toast.success("Log Out Successfully");
    localStorage.removeItem("access-token");
  };
  const handleToggle = () => {
    setIsDarkMood((isDarkMood) => !isDarkMood);
  };

  const darkMood = () => {
    document.body.style.backgroundColor = "#2d3436";
    document.body.style.color = "#f5f6fa";
  };
  const lightMood = () => {
    document.body.style.backgroundColor = "#ecf0f1";
    document.body.style.color = "black";
  };

  return (
    <div>
      <ToastContainer />
      <div className="navbar text-[#6c5ce7] font-bold  fixed bg-transparent z-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              id="navbar"
            >
              <li className="text-[20px]">
                <Link href={"/"}> Home</Link>
              </li>
              <li className="text-[20px]">
                <Link href={"/"}>About</Link>
              </li>
              {user && (
                <li className="text-[20px]">
                  <Link href={"/appointment"}>Appointment</Link>
                </li>
              )}
              {user && (
                <li className="text-[20px]">
                  <Link href={"/dashboard"}> Dashboard</Link>
                </li>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Doc House</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[20px]">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-[20px]">
              <Link href={"/"}> About</Link>
            </li>
            {user && (
              <li className="text-[20px]">
                <Link href={"/appointment"}> Appointment</Link>
              </li>
            )}

            <li>
              <div onClick={handleToggle} className="shadow-2xl ">
                {!isDarkMood ? (
                  <button onClick={darkMood}>
                    {" "}
                    <FaSun className="text-2xl" />
                  </button>
                ) : (
                  <button onClick={lightMood}>
                    {" "}
                    <FaMoon className="text-2xl" />
                  </button>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={user?.photoURL || profileImage} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">
                    {user?.name || user?.displayName}
                  </span>
                </a>
              </li>
              <li>{user && <Link href={"/dashboard"}> Dashboard</Link>}</li>
              <li>
                <a>Settings</a>
              </li>

              <li>
                {user ? (
                  <button onClick={handleLogOut} className="btn">
                    Logout
                  </button>
                ) : (
                  <Link href={"/Authentication/login"} className="btn">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
