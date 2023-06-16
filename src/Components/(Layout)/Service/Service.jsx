import Image from "next/image";
import React from "react";
import doctor from "../../../../public/Assests/Doctors/portrait-smiling-handsome-male-doctor-man.jpg";
import teeth from "../../../../public/Assests/fbai_pbu0_160610.jpg";

const Service = () => {
  return (
    <div>
      <div className="flex">
        <div className="my-[100px] ">
          <Image width={600} height={1200} src={doctor} placeholder="blur" />
        </div>
        <div className="my-14 p-6">
          <div>
            <h2 className="text-2xl my-4 font-bold">Our Service</h2>
            <p className="text-xl my-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
              <br />
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa{" "}
              <br />
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex gap-4">
              <div>
                <button className="btn  bg-[#F7A582] btn-outline">
                  Cavity Protection
                </button>
              </div>
              <div>
                <button className="btn btn-primary btn-outline">
                  Cosmetic Density
                </button>
              </div>
              <div>
                <button className="btn btn-info btn-outline">
                  Oral Surgery
                </button>
              </div>
            </div>
            <div className="my-4">
              <Image src={teeth} width={400} height={300} placeholder="blur" />
            </div>
            <div>
              <h2 className="text-2xl my-4 font-bold">
                Electro Gastrology Therapy
              </h2>
              <p className="my-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium <br />
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inve <br />
                ntore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Sed ut perspiciatis unde omnis iste natus error{" "}
              </p>
              <p className="mb-4">
                Sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque <br />
                ipsa quae ab illo inve ntore veritatis et quasi architecto
                beatae vitae <br />
                dicta sunt explicabo.
              </p>
              <button className="btn  bg-[#F7A582] btn-outline">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
