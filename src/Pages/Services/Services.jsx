import React from "react";
import ServiceBg from "../../assets/servicebg.png"; 
import { FaArrowRight, FaHandshake, FaChartLine } from "react-icons/fa";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import WorkflowImg from "../../assets/workflow.png"; // replace with your image
import Footer from "../../Components/Footer/Footer";


const Services = () => {
  const steps = [
  {
    title: "Schedule A Meeting",
    step: "1",
  },
  {
    title: "Give Us Your Requirements",
    step: "2",
  },
  {
    title: "Get Best Service",
    step: "3",
  },
];
  return (
    <>
    
    <section
      className="w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${ServiceBg})` }}
    >
       {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="max-w-7xl px-8">
        <div className="max-w-xl">
          <h2 className="text-[#f47621] text-4xl font-bold mb-4">
            Our Services
          </h2>

          <p className="text-[#ffffff] leading-relaxed font-normal text-lg mb-8">
            copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>

          <button className="group flex items-center gap-3 bg-[#f47621] hover:bg-orange-600 text-white px-6 py-3 rounded-full transition">
            more details
            <span className="bg-white text-[#f47621] p-2 rounded-full">
                                     <FaArrowRight size={12} />
                                   </span>
          </button>
        </div>
      </div>
    </section>

    <ServicesSection/>


     <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div className="space-y-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group border border-orange-500 rounded-xl p-6 flex justify-between items-start transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/90 max-w-md">
                  Our Medical Billing Experts Handle Patient Check-In/Out, Claims,
                  Payments, And Denials, Ensuring Acc...
                </p>
              </div>

              <span className="text-lg font-semibold text-gray-700 group-hover:text-white">
                Step {item.step}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Our Efficient <span className="text-orange-500">Service</span> Workflow
          </h2>

          <div className="relative inline-block mb-6">
            <div className="p-2">
              <img
                src={WorkflowImg}
                alt="Workflow"
                className="w-84 object-cover"
              />
            </div>
          </div>

          <p className="text-gray-600 mb-6 max-w-md">
            Our Medical Billing Experts Handle Patient Check-In/Out, Claims,
            Payments, And Denials, Ensuring Acc...
          </p>

          <button className="flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
            Contact Us
            {/* <img src={ArrowImg} alt="arrow" className="w-4 h-4" /> */}
          </button>
        </div>

      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Services;
