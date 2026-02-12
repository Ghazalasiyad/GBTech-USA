import React from "react";
import { FaPhoneAlt, FaAt, FaMapMarkerAlt, FaLinkedinIn } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";

const ContactSection = () => {
  return (
    <>
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Heading */}
          <div className="mb-16 max-w-xl sm:ml-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Can <span className="text-[#f57c20]">Help</span>
              <br />
              You?
            </h2>
            <p className="text-[#363636] text-lg font-normal leading-relaxed">
              copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag.
            </p>
          </div>

          {/* Cards Wrapper */}
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center">
            {/* Left Orange Card */}
            <div className="w-full lg:w-[47%] bg-[#f57c20] text-white rounded-lg p-12 min-h-[460px]">
              <h3 className="text-2xl font-semibold mb-8">You Can Contact Us</h3>
              <ul className="space-y-6 text-xl">
                <li className="flex items-center gap-4 sm:gap-8">
                  <FaPhoneAlt />
                  <span>+92-333-444-555</span>
                </li>
                <li className="flex items-center gap-4 sm:gap-8">
                  <FaAt />
                  <span>GBTechive123@gmail.com</span>
                </li>
                <li className="flex items-center gap-4 sm:gap-8">
                  <FaMapMarkerAlt />
                  <span>Gilgit Baltistan, Pakistan</span>
                </li>
                <li className="flex items-center gap-4 sm:gap-8">
                  <FaLinkedinIn />
                  <span>GBTechive.PVT LTD</span>
                </li>
              </ul>
            </div>

            {/* Right Form Card */}
            <div className="w-full lg:w-[42%] bg-white rounded-xl shadow-2xl p-8 -mt-6 lg:-ml-10 mt-8 sm:mt-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 -mt-4">
                Message Us Here
              </h3>

              <p className="text-gray-500 mb-4">
                Please Kindly Complete The Form Provided Below For Any Inquiries You May Have.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block mb-2 text-gray-800">Name</label>
                  <input
                    type="text"
                    className="w-full h-11 border border-orange-300 rounded-md px-4 focus:outline-none focus:ring-1 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-800">Email</label>
                  <input
                    type="email"
                    className="w-full h-11 border border-orange-300 rounded-md px-4 focus:outline-none focus:ring-1 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-800">Message</label>
                  <textarea
                    rows="4"
                    className="w-full border border-[#f57c20] rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-1 focus:ring-orange-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f57c20] text-white h-12 rounded-md font-semibold transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactSection;
