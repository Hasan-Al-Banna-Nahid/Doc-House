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

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const router = useRouter();
  const { handleEmailPasswordSignUp } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const toastId = toast.loading("Loading...");
    handleEmailPasswordSignUp(email, password).then((data) => {
      form.reset();
      toast.dismiss(toastId);
      toast.success("User Created Successfully");
      router.push("/Authentication/login");
    });
    if (password !== confirmPassword) {
      setErrorMessage("Password Did Not Match");
      return;
    }
    await axiosSecure
      .post("/user", { data: { name: name, email: email } })
      .then((data) => {});
  };
  return (
    <div>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <ToastContainer />
        <div className="hero-content flex-col lg:flex-row">
          <img
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
                    className="input input-bordered"
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
                    className="input input-bordered"
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
                    className="input input-bordered"
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
                    className="input input-bordered"
                    name="confirmPassword"
                    required
                    {...register("confirmPassword", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
                <div className="divider">OR</div>
                <Link href={"/Authentication/login"}>
                  Already Have An Account Please{" "}
                  <button className="btn btn-primary"> Login</button>
                </Link>
              </div>

              {errors.exampleRequired && <span>This field is required</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
