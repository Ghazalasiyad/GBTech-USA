import React, { useState } from "react";
import ProjectImg from "../../assets/project.png";
import Button from "../../Components/Button/Button.jsx";

const tabs = [
  "UI/UX",
  "Graphic Design",
  "Web Development",
  "Medical Billing",
  "Medical Documentation",
  "Digital Marketing",
];

const projects = {
  "UI/UX": {
    title: "Ibn Sina Foundation Website",
    description:
      "Designed a custom Content Management System (CMS) for Ibn e Sina to manage healthcare content, staff records, patient updates, and internal documentation efficiently.",
    image: ProjectImg,
  },
  "Graphic Design": {
    title: "Graphic Design Project",
    description:
      "Creative branding and modern visual identity design for businesses.",
    image: ProjectImg,
  },
  "Web Development": {
    title: "Web Development Project",
    description:
      "Responsive, fast, and scalable websites built with modern technologies.",
    image: ProjectImg,
  },
  "Medical Billing": {
    title: "Medical Billing System",
    description:
      "Accurate and efficient medical billing solutions for healthcare providers.",
    image: ProjectImg,
  },
  "Medical Documentation": {
    title: "Medical Documentation",
    description:
      "Professional documentation services ensuring compliance and accuracy.",
    image: ProjectImg,
  },
  "Digital Marketing": {
    title: "Digital Marketing Campaign",
    description:
      "SEO, social media, and paid ads strategies to grow your business.",
    image: ProjectImg,
  },
};

const RecentProjects = () => {
  const [activeTab, setActiveTab] = useState("UI/UX");

  return (
    <section className="w-full bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-4xl font-semibold">
            Look At Some Of Our{" "}
            <span className="text-orange-500">Recent Projects</span>
          </h2>
          <p className="mt-4 text-[#363636] text-lg font-normal md:text-base">
          Explore GBTechive’s project portfolio—delivering impactful digital solutions
           across education, governance, and enterprise in Gilgit-Baltistan and beyond.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-lg font-normal transition border
                ${
                  activeTab === tab
                    ? "bg-[#f47621] text-white border-[#f47621]"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Left Content */}
          <div className="md:pr-12 md:ml-0 ml-0 text-center md:text-left">
            <h3 className="text-4xl md:text-3xl font-semibold text-gray-900">
              {projects[activeTab].title}
            </h3>

            <p className="mt-4 text-[#363636] text-lg font-normal leading-relaxed max-w-xl mx-auto md:mx-0">
              {projects[activeTab].description}
            </p>
            <div className="mt-14">
            <Button text="Explore More about"/>

            </div>

            {/* <button className="mt-8 inline-flex items-center gap-2 bg-[#f47621] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-orange-500 transition border border-orange-500 mx-auto md:mx-0">
              Explore More about
              <span className="bg-white text-[#f47621] h-8 w-8 flex items-center justify-center rounded-full">
                ↗
              </span>
            </button> */}
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={projects[activeTab].image}
              alt={projects[activeTab].title}
              className="max-w-[90%] md:max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
