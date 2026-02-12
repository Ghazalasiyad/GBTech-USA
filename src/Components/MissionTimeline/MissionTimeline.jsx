import React from "react";
import lineVector from "../../assets/vector.png";
import { FaArrowRight, FaHandshake, FaChartLine } from "react-icons/fa";
import Button from "../Button/Button";

const MissionTimeline = () => {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 flex gap-24">

        {/* LEFT CONTENT */}
        <div className="w-[40%]">
          <span className="inline-block mb-6 rounded-full bg-[#363636] text-white px-4 py-1 text-lg font-normal">
            Our Mission
          </span>

          <h2 className="text-4xl font-semibold leading-tight mb-6">
            Our <span className="text-[#f57c20]">Mission</span> To Our <br />
            <span className="text-[#f57c20]">Vision</span>
          </h2>

          <p className="text-[#363636] text-lg font-normal leading-7 mb-10 max-w-md">
            At GBTechive, we empower individuals and organizations through ethical, innovative, and client-focused digital solutions—redefining the digital
             experience to drive growth, enhance engagement, and create lasting impact across every sector we serve.
          </p>

          <Button text="Get started"/>
        </div>

        {/* RIGHT TIMELINE */}
        <div className="relative w-[60%] h-[520px] mt-[16%]">

          {/* REPLACE SVG WITH IMAGE */}
          <img
            src={lineVector}
            alt="Timeline line"
            className="inset-0 w-full ml-[-20%] h-full"
          />

          {/* ITEM 1 */}
          <div className="absolute left-0 bottom-0 max-w-xs pr-16 z-10">
            <span className="absolute right-0 -top-10 text-[110px] font-bold text-orange-100 opacity-70 z-0">
              1
            </span>
            <h4 className="text-4xl font-meduim mb-2 relative z-10">
              2021 founded
            </h4>
            <p className="text-lg font-normal text-[#363636] relative z-10">
              copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="absolute left-[260px] top-[260px] max-w-xs pr-16 z-10">
            <span className="absolute right-0 -top-10 text-[110px] font-bold text-orange-100 opacity-70 z-0">
              2
            </span>
            <h4 className="text-4xl font-meduimmb-2 relative z-10">
              15+ companies
            </h4>
            <p className="text-lg font-normal text-[#363636]relative z-10">
              copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke
            </p>
          </div>

          {/* ITEM 3 */}
          <div className="absolute right-0 top-[80px] max-w-xs pr-16 z-10">
            <span className="absolute right-0 -top-10 text-[110px] font-bold text-orange-100 opacity-70 z-0">
              3
            </span>
            <h4 className="text-4xl font-meduim mb-2 relative z-10">
              15k+ professionals
            </h4>
            <p className="text-lg font-normal text-[#363636] relative z-10">
              copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionTimeline;
