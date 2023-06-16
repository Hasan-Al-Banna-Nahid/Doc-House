"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import Image from "next/image";

const Testimonial = () => {
  //   const [data, loading] = useTestimonial();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("Testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  if (loading) {
    <h2>Loading...</h2>;
  }
  return (
    <div>
      <div className="text-center my-6">
        <h2 className="text-3xl font-bold">What Our Patient Say</h2>
        <p className="text-xl">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium <br />
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve{" "}
          <br />
          ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id} className="my-12 container mx-auto">
                <div>
                  <div className="flex justify-center items-center gap-6">
                    <div>
                      <Image
                        width={200}
                        height={200}
                        className="rounded-[100%]"
                        src={item.image}
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{item.name}</h2>
                      <h2 className="text-xl">{item.profession}</h2>
                    </div>
                    <div>
                      <FaQuoteLeft className="text-3xl" />
                    </div>
                  </div>
                  <p className="font-semibold text-center my-4">
                    Lorem Ipsum has been the industry’s standard dummy text ever
                    since the <br />
                    1500s, when an unknow printer tool a galley of type and
                    scrambled it to <br />
                    make type specimen book has survived not only five
                    centurines.
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
