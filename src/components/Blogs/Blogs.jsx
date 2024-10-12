import React, { useEffect } from "react";
import Img1 from "../../assets/blog1.jpg";
import Img2 from "../../assets/blog2.jpg";
import Img3 from "../../assets/blog3.jpg";
import Img4 from "../../assets/blog4.webp";
import Img5 from "../../assets/blog5.jpg";
import Img6 from "../../assets/blog6.png";
import Img7 from "../../assets/img7.jpg";
import Img8 from "../../assets/img8.jpeg";
import Img9 from "../../assets/img9.png";
import img10 from "../../assets/dgm.webp";
import img11 from "../../assets/ANIMAT1.gif";
import img12 from "../../assets/admin-service.jpg";


import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Our Services
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="rounded-lg p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img1}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3 -mb-2 border-t mt-3">
              <h1 className=" text-center text-xl font-bold">
                Web Design & Development
              </h1>

            </div>
          </div>
          <div
            id="card"
            className="rounded-lg p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img2}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3 -mb-2 border-t mt-3">
              <h1 className=" text-center text-xl font-bold">
                Academic Solutions
              </h1>

            </div>
          </div>
          <div
            id="card"
            className="rounded-lg p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img5}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3 -mb-2 border-t mt-3">
              <h1 className=" text-center text-xl font-bold">
                Blockchain Development & NFTs.
              </h1>

            </div>
          </div>
          <div
            id="card"
            className="rounded-lg p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img3}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3 -mb-2 border-t mt-3">
              <h1 className=" text-center text-xl font-bold">
                Software Development
              </h1>

            </div>
          </div>
          <div
            id="card"
            className="rounded-lg p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img4}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3 -mb-2 border-t mt-3">
              <h1 className=" text-center text-xl font-bold">
                Bot Development
              </h1>
            </div>
          </div>
          <div
            id="card"
            className="rounded-lg p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img6}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3 -mb-2 border-t mt-3">
              <h1 className=" text-center text-xl font-bold">
                Game Development
              </h1>
            </div>
          </div>
          <div
            id="card"
            className="rounded-lg p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img7}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3 -mb-2 border-t mt-3">
              <h1 className=" text-center text-xl font-bold">
                E-Commerce Development
              </h1>
            </div>
          </div>
          <div
            id="card"
            className="rounded-lg p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img8}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3 -mb-2 border-t mt-3">
              <h1 className=" text-center text-xl font-bold">
                Graphic Design
              </h1>
            </div>
          </div>
          <div
            id="card"
            className="rounded-lg p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img9}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3 -mb-2 border-t mt-3">
              <h1 className=" text-center text-xl font-bold">
                Mobile App Design & Development
              </h1>
            </div>
          </div>
          <div
            id="card"
            className="rounded-lg p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={img10}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3 -mb-2 border-t mt-3">
              <h1 className=" text-center text-xl font-bold">
                Digital MArketing & SEO
              </h1>
            </div>
          </div>
          <div
            id="card"
            className="rounded-lg p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={img11}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3 -mb-2 border-t mt-3">
              <h1 className=" text-center text-xl font-bold">
                Video & Animation
              </h1>
            </div>
          </div>
          <div
            id="card"
            className="rounded-lg p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={img12}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3 -mb-2 border-t mt-3">
              <h1 className=" text-center text-xl font-bold">
                Admistrative Services
              </h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
