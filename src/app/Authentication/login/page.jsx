"use client";
import Header from "@/Components/(Home)/Header/Header";
import Link from "next/link";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { handleEmailPasswordLogin, user } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form?.email.value;
    const password = form?.password.value;
    const toastId = toast.loading("Loading...");
    handleEmailPasswordLogin(email, password)
      .then((data) => {
        form.reset();
        router.push("/");
        toast.dismiss(toastId);
        toast.success("Login Successfully");
      })
      .catch((err) => {
        toast.error(err.message);
        toast.dismiss(toastId);
      });
  };
  return (
    <div>
      <Header />
      <div>
        <ToastContainer />
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/Assests/login.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                    name="email"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>

                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="divider">OR</div>
                <Link href={"/Authentication/register"}>
                  New To Doc House Please{" "}
                  <button className="btn btn-primary"> Sign Up</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
