
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BlogBg from "../../assets/blogbg.png"; 
import { CheckCircle, Smile, Hourglass } from "lucide-react";
import Footer from "../../Components/Footer/Footer";
import office1 from "../../assets/office1.png";
import office2 from "../../assets/office2.png";
import office3 from "../../assets/office3.png";


const Blogs = () => {
  const data = [
  {
    image: office1,
    time: "today 12:30 pm",
  },
  {
    image: office2,
    time: "today 12:30 pm",
  },
  {
    image: office3,
    time: "today 12:30 pm",
  },
];
  return (
    <>
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={BlogBg}
        alt="Blogs and Updates"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0b3a4a]/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl px-10 md:px-16 lg:px-20">
          <h4 className="text-[#f47621] text-3xl font-semibold mb-4 mt-50">
            Blogs And Updates
          </h4>

          <p className="text-white max-w-xl leading-relaxed text-lg font-normal md:text-base mb-6">
            copper mug try-hard pitchfork pour-over freegan heirloom neutra
            air plant cold-pressed tacos poke beard tote bag. heirloom echo
            park mlkshk tote bag selvage hot chicken authentic turmeric
            truffaut hexagon try-hard chambray.
          </p>

          <button className="inline-flex items-center gap-3 bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-orange-600 transition">
            more details
            <span className="bg-white text-[#f47621] p-2 rounded-full">
              <FaArrowRight size={12} />
            </span>
          </button>
        </div>
      </div>
    </section>

    {/* Counter Section */}
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Item */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-50 mb-4">
              <svg
                className="w-7 h-7 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Completed Projects</p>
            <h2 className="text-5xl font-bold text-orange-500 mt-2">500+</h2>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-50 mb-4">
              <svg
                className="w-7 h-7 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <path d="M9 9h.01M15 9h.01" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Satisfied Clients</p>
            <h2 className="text-5xl font-bold text-orange-500 mt-2">800+</h2>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-50 mb-4">
              <svg
                className="w-7 h-7 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 2h12v6l-6 4-6-4z" />
                <path d="M6 22h12" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Jobs Pending</p>
            <h2 className="text-5xl font-bold text-[#f47621] mt-2">50k</h2>
          </div>

        </div>

        <div className="mt-16 border-t border-orange-100" />
      </div>
    </section>




{/* Companies Section */}
  <section className="w-full bg-white ">
      <div className="max-w-6xl mx-auto px-4">

        {/* CARDS */}
        <div className="space-y-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 bg-[#fafafa] rounded-xl px-8 py-10 min-h-[260px]"
            >
              {/* LEFT IMAGE */}
              <div className="md:w-[300px] w-full flex-shrink-0">
                <img
                  src={item.image}
                  alt="office"
                  className="w-full h-[220px] object-cover rounded-lg"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1 relative flex flex-col">
                {/* TIME */}
                <span className="absolute top-0 right-0 text-xs text-gray-400">
                  {item.time}
                </span>

                <p className="text-sm text-gray-500 mb-1">
                  We are Working with international
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Companies
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                  copper mug try-hard pitchfork pour-over freegan heirloom neutra
                  air plant cold-pressed tacos poke beard tote bag. heirloom echo
                  park milkshk tote bag selvage hot chicken authentic tumeric
                  truffaut hexagon try-hard chambray.
                </p>

                {/* PUSH BUTTON TO BOTTOM */}
                <div className="mt-auto text-right pt-6">
                  <button className="text-sm text-[#f47621] font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Learn more <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEE MORE BUTTON */}
        <div className="flex justify-center mt-10 mb-20">
          <button className="px-7 py-2.5 border border-[#f47621]  text-[#f47621] rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition">
            See more ↓
          </button>
        </div>

      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Blogs;
