import { IoArrowForward } from "react-icons/io5"
import React from "react";

export default function ServicesSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm mb-4">Our Services</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Our Top <span className="text-orange-500">Furnished</span>
              <br />
              Giving <span className="text-orange-500">Services</span>
            </h1>
          </div>
          <div className="max-w-md lg:pt-8">
            <p className="text-gray-600 text-sm leading-relaxed">
              We Build Custom Websites Tailored To Your Business Needs, Ensuring A
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Digital Marketing */}
          <div className="group bg-white hover:bg-orange-500 rounded-3xl p-8 relative transition-all duration-300 shadow-sm cursor-pointer">
            <div className="w-12 h-12 border-2 border-orange-500 group-hover:border-white rounded-full flex items-center justify-center mb-6 transition-all duration-300 overflow-hidden">
              <img src="/digital-marketing-icon.png" alt="Digital Marketing" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
              Digital Marketing
            </h3>
            <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed mb-8 transition-colors duration-300">
              Our Digital Marketing Solutions Boost Your Brand Visibility Across Multiple Platforms, Driving Enga...
            </p>
            <button className="absolute bottom-6 right-6 w-10 h-10 bg-orange-500 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
              <IoArrowForward className="w-5 h-5 text-white group-hover:text-orange-500" />
            </button>
          </div>

          {/* UI/UX Designing */}
          <div className="group bg-white hover:bg-orange-500 rounded-3xl p-8 relative transition-all duration-300 shadow-sm cursor-pointer">
            <div className="w-12 h-12 border-2 border-orange-500 group-hover:border-white rounded-full flex items-center justify-center mb-6 transition-all duration-300 overflow-hidden">
              <img src="/ui-ux-design-icon.jpg" alt="UI/UX Designing" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
              UI/UX Designing
            </h3>
            <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed mb-8 transition-colors duration-300">
              Our Designers Craft Intuitive, Visually Appealing Interfaces That Enhance User Experience, Ensuring...
            </p>
            <button className="absolute bottom-6 right-6 w-10 h-10 bg-orange-500 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
              <IoArrowForward className="w-5 h-5 text-white group-hover:text-orange-500" />
            </button>
          </div>

          {/* Web Development */}
          <div className="group bg-white hover:bg-orange-500 rounded-3xl p-8 relative transition-all duration-300 shadow-sm cursor-pointer">
            <div className="w-12 h-12 border-2 border-orange-500 group-hover:border-white rounded-full flex items-center justify-center mb-6 transition-all duration-300 overflow-hidden">
              <img src="/web-development-coding-icon.jpg" alt="Web Development" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
              Web Development
            </h3>
            <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed mb-8 transition-colors duration-300">
              We Build Custom Websites Tailored To Your Business Needs, Ensuring A Unique Online Experience, Our S...
            </p>
            <button className="absolute bottom-6 right-6 w-10 h-10 bg-orange-500 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
              <IoArrowForward className="w-5 h-5 text-white group-hover:text-orange-500" />
            </button>
          </div>

          {/* Medical Billing */}
          <div className="group bg-white hover:bg-orange-500 rounded-3xl p-8 relative transition-all duration-300 shadow-sm cursor-pointer">
            <div className="w-12 h-12 border-2 border-orange-500 group-hover:border-white rounded-full flex items-center justify-center mb-6 transition-all duration-300 overflow-hidden">
              <img src="/medical-billing-document-icon.jpg" alt="Medical Billing" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
              Medical Billing
            </h3>
            <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed mb-8 transition-colors duration-300">
              Our Medical Billing Experts Handle Patient Check-In/Out, Claims, Payments, And Denials, Ensuring Ac...
            </p>
            <button className="absolute bottom-6 right-6 w-10 h-10 bg-orange-500 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
              <IoArrowForward className="w-5 h-5 text-white group-hover:text-orange-500" />
            </button>
          </div>

          {/* Medical Documentation */}
          <div className="group bg-white hover:bg-orange-500 rounded-3xl p-8 relative transition-all duration-300 shadow-sm cursor-pointer">
            <div className="w-12 h-12 border-2 border-orange-500 group-hover:border-white rounded-full flex items-center justify-center mb-6 transition-all duration-300 overflow-hidden">
              <img src="/medical-documentation-health-records-icon.jpg" alt="Medical Documentation" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
              Medical Documentation
            </h3>
            <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed mb-8 transition-colors duration-300">
              We Offer High-Quality Medical Documentation Services To Streamline Your Practice, Ensuring Accuracy...
            </p>
            <button className="absolute bottom-6 right-6 w-10 h-10 bg-orange-500 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
              <IoArrowForward className="w-5 h-5 text-white group-hover:text-orange-500" />
            </button>
          </div>

          {/* Graphic Designing */}
          <div className="group bg-white hover:bg-orange-500 rounded-3xl p-8 relative transition-all duration-300 shadow-sm cursor-pointer">
            <div className="w-12 h-12 border-2 border-orange-500 group-hover:border-white rounded-full flex items-center justify-center mb-6 transition-all duration-300 overflow-hidden">
              <img src="/graphic-design-creative-icon.jpg" alt="Graphic Designing" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
              Graphic Designing
            </h3>
            <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed mb-8 transition-colors duration-300">
              Our Digital Marketing Solutions Boost Your Brand Visibility Across Multiple Platforms, Driving Enga...
            </p>
            <button className="absolute bottom-6 right-6 w-10 h-10 bg-orange-500 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
              <IoArrowForward className="w-5 h-5 text-white group-hover:text-orange-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
