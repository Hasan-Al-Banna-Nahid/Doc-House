"use client";
import Header from "@/Components/(Home)/Header/Header";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import { updateCurrentUser } from "firebase/auth";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const router = useRouter();
  const handleRouteToLogin = () => {
    router.push("/Authentication/login");
  };
  const {
    handleEmailPasswordSignUp,
    handleGoogleLogin,
    setLoading,
    updateUserProfile,
    user,
  } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const GoogleLogin = async () => {
    const toastId = toast.loading("Loading...");
    handleGoogleLogin().then((result) => {
      toast.dismiss(toastId);
      toast.success("User Login Successfully");
      fetch("https://dochouse.vercel.app/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: result.user.name,
          email: result.user.email,
        }),
      });
      updateUserProfile(user, result.user.name, result.user.PhotoURL);
      router.push("/");
    });
  };
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photo = form.photo.value;
    const designation = form.designation.value;
    const datas = { email, name, designation };
    handleEmailPasswordSignUp(email, password)
      .then((data) => {
        const toastId = toast.loading("Loading...");
        form.reset();
        toast.dismiss(toastId);
        toast.success("User Created Successfully");
        router.push("/Authentication/login");
        fetch("https://dochouse.vercel.app/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ datas }),
        });
      })
      .catch((err) => {
        const toastId = toast.loading("Loading...");
        toast.dismiss(toastId);
        toast.error(err.message);
      });
    updateUserProfile(user, name, photo);
    if (password !== confirmPassword) {
      const toastId = toast.loading("Loading...");
      toast.dismiss(toastId);
      setErrorMessage("Password Did Not Match");
      return;
    }
    // await axiosSecure.post("/user");
  };

  return (
    <div>
      <ToastContainer />
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            width={800}
            height={800}
            src="/Assests/register.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Name</span>
                  </label>
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered font-bold"
                    required
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered font-bold"
                    required
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Photo</span>
                  </label>
                  {errors.photo && (
                    <span className="text-red-600">Photo is required</span>
                  )}
                  <input
                    type="file"
                    className="input input-bordered"
                    required
                    name="photo"
                    {...register("photo", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  {errors.password && (
                    <span className="text-red-600">
                      1.Password Must Have 8 Characters long & Not exceed 20
                      Character
                      <br /> 2.One Uppercase & One Lowercase letter Required{" "}
                      <br /> 3.Must Have One Special Character <br /> 4.Must be
                      Includes Number{" "}
                    </span>
                  )}
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered font-bold"
                    name="password"
                    required
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                      minLength: 8,
                      pattern:
                        /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].)/i,
                    })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Confirm Password
                    </span>
                  </label>

                  <span className="text-red-600">{errorMessage}</span>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered font-bold"
                    name="confirmPassword"
                    required
                    {...register("confirmPassword", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Designation</span>
                  </label>

                  <span className="text-red-600">{errorMessage}</span>
                  <select
                    {...register("designation", {
                      required: true,
                    })}
                    name="designation"
                    id=""
                  >
                    <option value="doctor">Doctor</option>
                    <option value="nurse">Nurse</option>
                    <option value="administration">Administration</option>
                    <option value="lab">Lab</option>
                    <option value="account">Account</option>
                  </select>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
                <div className="divider text-slate-900">OR</div>
              </div>

              {errors.exampleRequired && <span>This field is required</span>}
            </form>
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
              <div onClick={handleRouteToLogin} className="text-slate-900">
                Already Have An Account Please{" "}
                <button className="btn btn-primary"> Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
