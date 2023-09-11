import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <button className="badge mx-auto text-center my-4 md:w-[400px] badge-outline badge-primary p-6">
        <Link href={"/"}>Home</Link>
      </button>
      <h2 className="text-3xl text-center my-6 text-purple-600">
        All Medical Service We Provide
      </h2>
      <div className="grid md:grid-cols-3 md:w-[800px] mx-auto mb-4 gap-4 ">
        <div>
          <button className="btn  bg-[#F7A582] btn-outline w-[200px]">
            Cavity Protection
          </button>
        </div>
        <div>
          <button className="btn btn-primary btn-outline w-[200px]">
            Cosmetic Density
          </button>
        </div>
        <div>
          <button className="btn btn-info btn-outline w-[200px]">
            Oral Surgery
          </button>
        </div>
        <div>
          <button className="btn btn-primary btn-outline w-[200px]">
            Pediatrics
          </button>
        </div>
        <div>
          <button className="btn btn-secondary btn-outline w-[200px]">
            Emergency medicine
          </button>
        </div>
        <div>
          <button className="btn btn-primary btn-outline w-[200px]">
            Urology
          </button>
        </div>
        <div>
          <button className="btn btn-warning btn-outline w-[200px]">
            Surgery
          </button>
        </div>
        <div>
          <button className="btn btn-primary btn-outline  w-[200px]">
            Gynecology
          </button>
        </div>
        <div>
          <button className="btn btn-warning btn-outline w-[200px]">
            Cardiology
          </button>
        </div>
        <div>
          <button className="btn btn-primary btn-outline w-[200px]">
            Internal medicine
          </button>
        </div>
        <div>
          <button className="btn btn-secondary btn-outline w-[200px]">
            Family medicine
          </button>
        </div>
        <div>
          <button className="btn btn-warning btn-outline w-[200px]">
            Urgent care
          </button>
        </div>
        <div>
          <button className="btn btn-info btn-outline w-[200px]">
            Intensive care medicine
          </button>
        </div>
        <div>
          <button className="btn btn-warning btn-outline w-[200px]">
            Surgery
          </button>
        </div>
        <div>
          <button className="btn btn-secondary btn-outline w-[200px]">
            Physical therapy
          </button>
        </div>
        <div>
          <button className="btn btn-primary btn-outline w-[200px]">
            Neurology
          </button>
        </div>
        <div>
          <button className="btn btn-info btn-outline w-[200px]">
            Cardiology
          </button>
        </div>
        <div>
          <button className="btn btn-secondary btn-outline w-[200px]">
            Oncology
          </button>
        </div>
        <div>
          <button className="btn btn-primary btn-outline w-[200px]">
            Dermatology
          </button>
        </div>
        <div>
          <button className="btn btn-warning btn-outline w-[200px]">
            Psychiatry
          </button>
        </div>
        <div>
          <button className="btn btn-info btn-outline w-[200px]">
            Ophthalmology
          </button>
        </div>
        <div>
          <button className="btn btn-warning btn-outline w-[200px]">
            Endocrinology
          </button>
        </div>
        <div>
          <button className="btn btn-primary btn-outline w-[200px]">
            Nephrology
          </button>
        </div>
        <div>
          <button className="btn btn-info btn-outline w-[200px]">
            Gastroenterology
          </button>
        </div>
        <div>
          <button className="btn btn-secondary btn-outline w-[200px]">
            Hematology
          </button>
        </div>
        <div>
          <button className="btn btn-warning btn-outline w-[200px]">
            Radiology
          </button>
        </div>
        <div>
          <button className="btn btn-primary btn-outline w-[200px]">
            General surgery
          </button>
        </div>
        <div>
          <button className="btn btn-info btn-outline w-[200px]">
            Neurosurgery
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
