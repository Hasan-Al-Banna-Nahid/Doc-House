"use client";

import Header from "@/Components/(Home)/Header/Header";
import loadSingleBlogData from "@/utils/loadSingleBlogData";
import React, { useState } from "react";
import Rating from "react-rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const doctor = async ({ params }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const data = await loadSingleBlogData(params.id);

  return (
    <>
      <Header />
      <div className="container">
        {data.map((data) => {
          return (
            <>
              <div className="bg-base-300">
                <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row">
                    <img
                      src="/Assests/Doctors/smiling-doctor-with-strethoscope-isolated-grey-removebg-preview.png"
                      className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                      <h1 className="text-5xl font-bold">{data.doctorName}</h1>
                      <p className="py-6">{data.designation}</p>
                      <Rating start={0} stop={data.rating} />
                      <p className="py-6">{data.chamber}</p>
                      <div className="flex gap-4">
                        <div>
                          <button className="btn btn-outline btn-primary">
                            {data.specialization[0]}
                          </button>
                        </div>
                        <div>
                          <button className="btn btn-outline btn-primary">
                            {data.specialization[1]}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <>
                <Tabs
                  className="w-[800px] mx-auto mb-6"
                  selectedIndex={tabIndex}
                  onSelect={(index) => setTabIndex(index)}
                >
                  <TabList className=" text-slate-950 ">
                    <Tab>Overview</Tab>
                    <Tab>Location</Tab>
                    <Tab>Reviews</Tab>
                    <Tab>Business Hours</Tab>
                  </TabList>

                  <TabPanel>
                    <h2 className="text-2xl my-2 font-bold text-orange-600">
                      About The Doctor
                    </h2>
                    <p className="text-[18px]">{data.about}</p>
                    <div className="grid md:grid-cols-2">
                      <div>
                        <h2 className="text-2xl my-2 font-bold text-orange-600">
                          Award
                        </h2>
                        <li className="text-[18px]">{data.award}</li>
                      </div>
                      <div>
                        {" "}
                        <h2 className="text-2xl my-2 font-bold text-orange-600">
                          Work & Experience
                        </h2>
                        <li className="text-[18px]">{data.workExperience}</li>
                      </div>
                      <div>
                        <h2 className="text-2xl my-2 font-bold text-orange-600">
                          Service
                        </h2>
                        <li className="text-[18px]">{data.workExperience}</li>
                      </div>
                      <div>
                        <h2 className="text-2xl my-2 font-bold text-orange-600">
                          Specialization
                        </h2>
                        <li className="my-4 text-[18px]">
                          {data.specialization[0]}
                        </li>
                        <li className="text-[18px]">
                          {data.specialization[1]}
                        </li>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div>
                      <h2 className="text-2xl my-2 font-bold text-orange-600">
                        Chamber
                      </h2>
                      <li className="text-[18px]">{data.chamber}</li>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div>
                      <h2 className="text-2xl my-2 font-bold text-orange-600">
                        Reviews
                      </h2>
                      <Rating start={0} stop={data.rating} />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div>
                      <h2 className="text-2xl my-2 font-bold text-orange-600">
                        Appointment Time
                      </h2>
                      <li className="text-[18px]">{data.appointmentTime}</li>
                    </div>
                  </TabPanel>
                </Tabs>
              </>
            </>
          );
        })}
      </div>
    </>
  );
};
