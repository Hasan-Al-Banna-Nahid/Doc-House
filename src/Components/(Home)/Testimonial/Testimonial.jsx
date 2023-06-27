"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft, FaArrowUp } from "react-icons/fa";

import "swiper/css/bundle";
import "swiper/css/navigation";

import { Autoplay, EffectFade, Navigation } from "swiper";
import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";
import { useRouter } from "next/router";
const Testimonial = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("Testimonial.json", { cache: "force-cache" })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
      <div className="text-center my-6">
        <h2 className="text-3xl font-bold my-4">What Our Patient Say</h2>
        <p className="text-xl my-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium <br />
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve{" "}
          <br />
          ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
      {loading && (
        <h2 className="text-center text-2xl text-red-700">Loading...</h2>
      )}
      <div>
        <Swiper
          navigation={true}
          autoplay
          loop
          modules={[Navigation, Autoplay, EffectFade]}
          className="mySwiper"
        >
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
                      <FaQuoteLeft className="text-3xl text-orange-600 sm:me-4" />
                    </div>
                  </div>
                  <p className="font-bold text-center my-4">
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
