import React from "react";
import heroBg from "../../assets/uibg.png";
import ProjectImg from "../../assets/projectui.png";
import LandingImg from "../../assets/landing-ui.png";
import MobileImg from "../../assets/mobile-ui.png";
import WebsiteImg from "../../assets/website-ui.png";
import { IoArrowUp } from "react-icons/io5";

// ICON IMAGES
import FigmaIcon from "../../assets/figma.png";
import AiIcon from "../../assets/illustrator.png";
import PsIcon from "../../assets/photoshop.png";


// service icons
import uxIcon from "../../assets/ui1.png";
import uiIcon from "../../assets/ui2.png";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";

import p3 from "../../assets/p3.png";

import Testimonials from "../../Components/Testimonials/Testimonials";
import TestimonialSlider from "../../Components/TestimonialSlider/TestimonialSlider";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";

const UIUX = () => {
  const features = [
  { icon: FigmaIcon, alt: "Figma", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. " },
  { icon: AiIcon, alt: "Illustrator", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. " },
  { icon: PsIcon, alt: "Photoshop", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. " },
];
  const services = [
    {
      title: "User Experience",
      description:
        "Our Designers Craft Intuitive, Visually Appealing Interfaces That Enhance User Experience, Ensuring ...",
      icon: uxIcon,
    },
    {
      title: "User Interface",
      description:
        "Our Digital Marketing Solutions Boost Your Brand Visibility Across Multiple Platforms, Driving Engag...",
      icon: uiIcon,
    },
  ];
  const portfolios = [
  {
    title: "Landing Page Design",
    description:
      "copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.",
    image: LandingImg,
  },
  {
    title: "Mobile App Design",
    description:
      "copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.",
    image: MobileImg,
  },
  {
    title: "Website Design",
    description:
      "copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.",
    image: WebsiteImg,
  },
];
const projects = [
  {
    id: 1,
    title: "showcase website",
    description:
      "copper mug try-hard pitchfork pour-over freegan heirloom...",
    rating: 5.0,
    img: p1,
  },
  {
    id: 2,
    title: "showcase website",
    description:
      "copper mug try-hard pitchfork pour-over freegan heirloom...",
    rating: 5.0,
    img: p2,
  },
  {
    id: 3,
    title: "showcase website",
    description:
      "copper mug try-hard pitchfork pour-over freegan heirloom...",
    rating: 5.0,
    img: p3, 
  },
];


  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative w-full pt-70 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex">
          <div className="max-w-7xl pl-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-3xl font-semibold text-[#f47621] leading-snug mb-4">
                WE HAVE PROFESSIONAL <br /> UX UI DESIGNERS
              </h1>

              <p className="text-white text-lg leading-relaxed mb-6">
                copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag heirloom echo
                park mlkshk tote bag selvage hot chicken authentic turmeric
                truffaut hexagon try-hard chambray.
              </p>

             <Button text="more details"/>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="w-full px-6 md:px-20 py-20 bg-white">
        <h2 className="text-4xl font-semibold mb-4">
          Our Design <span className="text-[#f57c20]">Services</span>
        </h2>

        <p className="max-w-2xl font-normal text-lg text-[#363636] mb-16">
          copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
          cold-pressed tacos poke beard tote bag. heirloom echo park mlkshk tote
          bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
          chambray.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-xl border-t-8 border-t-[#f57c20] bg-white p-10 shadow-sm transition-all duration-300 hover:bg-[#f57c20]"

            >
              {/* ICON IMAGE */}
              <div className="w-14 h-14 rounded-full border-2flex items-center justify-center mb-6 bg-white">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold mb-3 text-[#363636] group-hover:text-white transition">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#363636] font-normal text-base group-hover:text-white/90 transition">
                {service.description}
              </p>

              {/* ARROW IMAGE */}
              {/* Arrow (CSS only) */}
         <button className="absolute bottom-6 right-6 w-10 h-10 bg-orange-500 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
  <IoArrowUp className="w-5 h-5 text-white group-hover:text-orange-500 rotate-45" />
</button>

            </div>
          ))}
        </div>
      </section>





      {/* latest Projects */}
      <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-14 max-w-xl">
          <h2 className="text-4xl md:text-4xl font-semibold text-[#363636]">
            Our Latest <span className="text-[#f47621]">Projects</span>
          </h2>
          <p className="mt-4 text-[#363636] leading-relaxed">
Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <img
            src={ProjectImg}
            alt="Project UI"
            className=" rounded-xl shadow-lg"
          />

          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mt-6">
              About The <span className="text-[#f47621]">Project</span>
            </h3>
            <p className="text-[#363636] font-normal text-lg mb-8 leading-relaxed">
Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.</p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <img src={feature.icon} alt={feature.alt} className="w-8 h-8 mt-1" />
                  <p className="text-gray-600 font-normal border-l-4 border-l-[#f57c20] pl-4  text-lg leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-gray-700">
              Web live link:{" "}
              <a
                href="https://www.abcd.com"
                className="text-[#f47621] hover:underline"
              >
                www.abcd.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-orange-100"></div>
      </div>
    </section>




    {/* portfolio section */}
  <section className="w-full bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolios.map((portfolio, index) => (
        <div
          key={index}
          className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 min-h-[460px]"
        >
          {/* Image */}
          <div className="p-4">
            <img
              src={portfolio.image}
              alt={portfolio.title}
              className="w-full h-56 object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="px-6 pb-20">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {portfolio.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {portfolio.description}
            </p>
          </div>

          {/* Arrow Button */}
                   <button className="absolute bottom-6 right-6 w-10 h-10 bg-orange-500 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
            <IoArrowUp className="w-5 h-5 text-white group-hover:text-orange-500 rotate-45" />
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

<TestimonialSlider/>




{/* Projects Section */}
<section className="w-full px-6 md:px-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-2 ml-14">
          More <span className="text-[#f57c20]">Projects</span>
        </h2>
        <p className="text-gray-600 max-w-xl mb-10 ml-14">
          copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke
        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
                src={item.img}
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
        
      </div>
    </section>
<Footer/>

    </>
  );
};

export default UIUX;
