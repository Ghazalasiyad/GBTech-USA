import React from "react";
import faqImage from "../../assets/about2.png"; 
import { FaArrowRight } from "react-icons/fa";

const faqs = [
  { question: "what is elementor?", answer: "Elementor is a WordPress page builder plugin." },
  { question: "how much does a website cost?", answer: "Website costs vary depending on features and design." },
  { question: "how many widgets in elementpack?", answer: "ElementPack comes with 150+ widgets." },
];

// FaqItem component
const FaqItem = ({ faq, isOpen, onClick }) => (
  <div className="border rounded-3xl px-4 py-4 cursor-pointer mb-3 transition-all duration-300 w-full max-w-full">
    <div className="flex items-center justify-between min-w-0" onClick={onClick}>
      <p className="text-[#363636] text-base sm:text-lg font-medium break-words flex-1 pr-3">
        {faq.question}
      </p>
      <svg
        className={`w-5 h-5 text-gray-500 flex-shrink-0 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? "max-h-40 mt-2" : "max-h-0"}`}>
      <p className="text-gray-500 text-sm sm:text-base break-words">{faq.answer}</p>
    </div>
  </div>
);

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <span className="inline-block mb-4 sm:mb-6 rounded-full bg-[#363636] text-white px-4 py-1 text-base sm:text-lg font-normal">
            Our Mission
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 leading-snug">
            Some <span className="text-[#f47621]">Answer</span> Of Your <br />
            <span className="text-[#f47621]">Questions</span>
          </h2>

          <p className="text-[#363636] text-base sm:text-lg font-normal mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
            copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
          </p>

          {/* FAQ */}
          <div className="mb-6 flex flex-col items-center lg:items-start gap-3">
            {faqs.map((faq, idx) => (
              <FaqItem
                key={idx}
                faq={faq}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>

          {/* BUTTON */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#f47621] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-600 transition text-sm sm:text-base">
              more details
              <span className="bg-white text-[#f47621] p-2 rounded-full">
                <FaArrowRight size={12} />
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#f47621] to-yellow-400 rounded-full -z-10"></div>
          <img
            src={faqImage}
            alt="FAQ"
            className="relative w-3/4 sm:w-2/3 lg:w-3/4 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
