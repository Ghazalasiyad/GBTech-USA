import React, { useState } from "react";

const testimonials = [
  // SLIDE 1
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=1", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." },
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=2", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." },
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=3", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." },

  // SLIDE 2
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=4", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." },
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=5", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." },
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=6", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." },

  // SLIDE 3
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=7", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." },
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=8", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." },
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=9", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." },

  // SLIDE 4
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=10", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." },
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=11", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." },
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=12", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." },

  // SLIDE 5
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=13", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." },
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=14", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." },
  { name: "Sam Jones", role: "Co-Founder", img: "https://i.pravatar.cc/100?img=15", text: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra..." }
];

const ITEMS_PER_SLIDE = 3;
const TOTAL_SLIDES = 5;

const TestimonialSlider = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#f8f8f8] py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {Array.from({ length: TOTAL_SLIDES }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {testimonials
                  .slice(
                    slideIndex * ITEMS_PER_SLIDE,
                    slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="relative bg-white min-h-[150px] rounded-xl shadow-md p-16"
                    >
                     

                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-10 h-10 rounded-full"
                        />
                        
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {item.role}
                          </p>
                        </div>
                      </div>
 <span className="text-orange-500 text-4xl font-bold absolute top-4 left-4">
                        “
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.text}
                      </p>

                      <span className="text-orange-500 text-4xl font-bold absolute bottom-4 right-4">
                        ”
                      </span>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-3 h-3 rounded-full transition ${
                active === index
                  ? "bg-orange-500"
                  : "bg-orange-300 opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
