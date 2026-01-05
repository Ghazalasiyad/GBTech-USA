import React from "react";


import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";
import p8 from "../../assets/p8.png";
import p9 from "../../assets/p9.png";
import Footer from "../../Components/Footer/Footer";

const projects = [
  { id: 1, image: p1 },
  { id: 2, image: p2 },
  { id: 3, image: p3 },
  { id: 4, image: p4 },
  { id: 5, image: p5 },
  { id: 6, image: p6 },
  { id: 7, image: p7 },
  { id: 8, image: p8 },
  { id: 9, image: p9 },
];

const WebDevelopment = () => {
  return (
    <>
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <h2 className="text-3xl font-bold mb-3">
          Web <span className="text-orange-500">Development</span>
        </h2>

        <p className="text-gray-500 max-w-xl mb-12">
          copper mug try-hard pitchfork pour-over freegan heirloom
          neutra air plant cold-pressed tacos poke
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-2">
          {projects.map((item) => (
            <div
              key={item.id}
              className="
                bg-white
                rounded-xl
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]
                transition
                p-4
                max-w-[320px]
                mx-auto
              "
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt="showcase"
                className="w-full h-64 object-cover rounded-lg"
              />

              {/* TITLE + RATING */}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-gray-700">
                  showcase website
                </span>

                <span className="text-sm text-orange-500 flex items-center gap-1 font-medium">
                  5.0 <span>★</span>
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                copper mug try-hard pitchfork pour-over freegan heirloom..
              </p>

              {/* BUTTON */}
              <button
                className="
                  mt-6
                  w-full
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  py-2.5
                  rounded-md
                  text-sm
                  font-medium
                "
              >
                view details
              </button>
            </div>
          ))}
        </div>

        {/* SEE MORE */}
        <div className="flex justify-center mt-16">
          <button
            className="
              flex items-center gap-2
              border border-orange-500
              text-orange-500
              px-6 py-2
              rounded-full
              hover:bg-orange-50
              transition
            "
          >
            See more
            <span className="text-lg">›</span>
          </button>
        </div>

      </div>
    </section>


    <Footer/>
    </>
  );
};

export default WebDevelopment;