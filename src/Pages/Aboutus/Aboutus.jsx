import React from "react";
import AboutImg from "../../assets/aboutbg.png";
import aboutImg from "../../assets/about1.png"; 
import Footer from "../../Components/Footer/Footer";

import { FaArrowRight, FaHandshake, FaChartLine } from "react-icons/fa";
import MissionTimeline from "../../Components/MissionTimeline/MissionTimeline.jsx";
import FaqSection from "../../Components/FaqSection/FaqSection.jsx";
import StatsCounter from "../../Components/StatsCounter/StatsCounter.jsx";

const AboutUs = () => {
  return (
    <>
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={AboutImg}
        alt="About Company"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Slightly lighter Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
     <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl px-20 md:px-16">
          <h4 className="text-[#f47621] text-4xl font-semibold mb-3">
            About company
          </h4>

          <p className="text-white max-w-2xl leading-relaxed text-lg font-normal md:text-base mb-6">
            copper mug try-hard pitchfork pour-over freegan heirloom neutra
            air plant cold-pressed tacos poke beard tote bag. heirloom echo
            park mlkshk tote bag selvage hot chicken authentic turmeric
            truffaut hexagon try-hard chambray.
          </p>

          <button className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-orange-600 transition">
            more details
           <span className="bg-white text-[#f47621] p-2 rounded-full">
                          <FaArrowRight size={12} />
                        </span>
          </button>
           
        </div>
      </div>
    </section>


{/* second section */}

    <section className="w-full bg-white py-16 sm:py-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    
    {/* LEFT IMAGE */}
    <div className="relative flex justify-center">
      {/* Orange shape */}
      <div className="absolute -bottom-6 -left-6 w-72 h-72 sm:w-[420px] sm:h-[420px] bg-[#f57c20] rounded-[60%_40%_55%_45%] -z-10"></div>

      {/* Image */}
      <img
        src={aboutImg}
        alt="About"
        className="object-cover w-full max-w-xs sm:max-w-md lg:max-w-none"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="text-center lg:text-left">
      {/* Small badge */}
      <span className="inline-block mb-4 font-normal rounded-full bg-[#363636] px-4 py-1 text-lg text-white">
        about our company
      </span>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-semibold leading-snug text-[#363636] mb-4">
        Your Ultimate <span className="text-[#f57c20]">Solution</span>
        <br />
        For Your <span className="text-[#f57c20]">Product</span>
      </h2>

      {/* Description */}
      <p className="text-[#363636] max-w-xl mx-auto lg:mx-0 text-base sm:text-lg font-normal mb-8">
        copper mug try-hard pitchfork pour-over freegan heirloom
        neutra air plant cold-pressed tacos poke beard tote bag.
        heirloom echo park mlkshk tote bag selvage hot chicken
        authentic turmeric truffaut hexagon try-hard chambray.
      </p>

      {/* Stats */}
      <div className="mb-8">
        <StatsCounter />
      </div>

      {/* Button */}
      {/* Button */}
<div className="flex justify-center">
  <button className="flex items-center gap-3 rounded-full bg-[#f57c20] px-6 py-3 text-white font-medium hover:bg-orange-600 transition">
    more details
    <span className="bg-white text-[#f47621] p-2 rounded-full">
      <FaArrowRight size={12} />
    </span>
  </button>
</div>

    </div>
  </div>
</section>

    <MissionTimeline/>
    <FaqSection/>
    <Footer/>
    </>
  );
};

export default AboutUs;
 









