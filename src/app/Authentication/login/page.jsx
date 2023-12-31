"use client";
import Header from "@/Components/(Home)/Header/Header";
import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";

const Login = () => {
  const {
    handleEmailPasswordLogin,
    handleGoogleLogin,
    user,
    handleResetPassword,
  } = useContext(AuthContext);
  const emailRef = useRef();
  const router = useRouter();
  const handleRouteToSignUp = () => {
    router.push("/Authentication/register");
  };
  const GoogleLogin = () => {
    handleGoogleLogin().then((result) => {
      if (result.user) {
        router.push("/");
      }
    });
  };
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
        console.log(data);
      })
      .catch((err) => {
        toast.error(err.message);
        toast.dismiss(toastId);
      });
  };
  const ResetPassword = () => {
    const email = emailRef.current.value;
    handleResetPassword(email)
      .then(() => {
        alert("Check Your Email");
      })
      .catch((err) => {
        console.log(err);
        return;
      });
    if (!email) {
      alert("Please Type Your Email for Reset Password");
    }
  };

  return (
    <div>
      <Header />
      <div>
        <ToastContainer />
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              width={800}
              height={800}
              src="/Assests/login.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Email</span>
                    </label>

                    <input
                      ref={emailRef}
                      type="text"
                      placeholder="Your Email"
                      className="w-96 input input-bordered font-bold"
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
                      className="input input-bordered font-bold"
                      name="password"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </div>
              </form>
              <button onClick={ResetPassword} className="link btn">
                Reset Password
              </button>
              <div className="divider text-slate-900">OR</div>
              <div className="form-control">
                <div
                  onClick={GoogleLogin}
                  className=" my-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded p-4"
                >
                  {" "}
                  Continue With{" "}
                  <button className="font-bold">
                    <FaGoogle className="text-[26px] text-[#F4B400] mt-2" />
                  </button>
                </div>
                <div onClick={handleRouteToSignUp} className="text-slate-900">
                  New To Doc House Please{" "}
                  <button className="btn btn-primary"> Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
