
import React from "react";
import bgImage from "../../assets/jobsbg.png"; 
import Footer from "../../Components/Footer/Footer";
const Jobs = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto px-4 py-16 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Content */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Finance Manager
          </h1>

          <p className="text-gray-600 mb-6">
            copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. heirloom echo park
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">job details</h3>
              <p className="text-gray-600 leading-relaxed">
                copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. heirloom echo
                park mlkshk tote bag selvage hot chicken authentic turmeric
                truffaut hexagon try-hard chambray.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">expertise</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag.
              </p>
              <p className="text-gray-600 leading-relaxed">
                mlkshk tote bag selvage hot chicken authentic turmeric truffaut
                hexagon try-hard chambray.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">qualifications</h3>
              <p className="text-gray-600 leading-relaxed">
                copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. heirloom echo
                park mlkshk tote bag selvage hot chicken authentic turmeric
                truffaut hexagon try-hard chambray.
              </p>
            </div>
          </div>

          <button className="mt-8 bg-[#f47621]  text-white px-20 py-3 rounded-md text-sm font-medium transition">
            Submit CV
          </button>
        </div>

        {/* Right Image Card */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src={bgImage}
            alt="Company"
            className="w-full h-[520px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-orange-500 text-2xl font-bold mb-2">
              GBTECHIVE
            </h2>

            <p className="text-white text-sm mb-6">
              copper mug try-hard pitchfork pour-over freegan heirloom neutra air
              plant cold-pressed tacos poke beard tote bag. heirloom echo park
            </p>

            {/* Play Button */}
            <button className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Jobs;
