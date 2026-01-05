import React from "react";


import DigitalMarketing from "../../assets/digital-marketing.png";
import UiUx from "../../assets/ui-ux.png";
import WebDev from "../../assets/web-dev.png";
import MedicalBilling from "../../assets/medical-billing.png";
import MedicalDoc from "../../assets/medical-doc.png";
import GraphicDesign from "../../assets/graphic-design.png";

const services = [
  {
    icon: DigitalMarketing,
    title: "Digital Marketing",
    desc: "Our Digital Marketing Solutions Boost Your Brand Visibility Across Multiple Platforms, Driving Engagement.",
  },
  {
    icon: UiUx,
    title: "UI/UX Designing",
    desc: "Our Designers Craft Intuitive, Visually Appealing Interfaces That Enhance User Experience.",
  },
  {
    icon: WebDev,
    title: "Web Development",
    desc: "We Build Custom Websites Tailored To Your Business Needs, Ensuring A Unique Online Experience.",
  },
  {
    icon: MedicalBilling,
    title: "Medical Billing",
    desc: "Our Medical Billing Experts Handle Patient Check-In/Out, Claims, Payments, And Denials.",
  },
  {
    icon: MedicalDoc,
    title: "Medical Documentation",
    desc: "We Offer High-Quality Medical Documentation Services To Streamline Your Practice.",
  },
  {
    icon: GraphicDesign,
    title: "Graphic Designing",
    desc: "Our Digital Marketing Solutions Boost Your Brand Visibility Across Multiple Platforms.",
  },
];

const Servicecard = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-12">
        <span className="inline-block bg-[#363636] text-white text-lg font-normal px-4 py-1 rounded-full mb-3">
          Our Services
        </span>
        <h2 className="text-4xl md:text-4xl font-semibold leading-snug">
          GBtechive <span className="text-[#f47621]">Provides Exclusive</span>
          <br />
          Services For Your Business
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-orange-500 flex items-center justify-center">
              <img
                src={service.icon}
                alt={service.title}
                className=" object-contain"
              />
            </div>

            <h3 className="font-semibold text-2xl mb-3">
              {service.title}
            </h3>

            <p className="text-[#363636] text-base font-normal leading-relaxed mb-4">
              {service.desc}
            </p>

            <button className="text-orange-500 text-sm font-medium hover:underline">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicecard;
