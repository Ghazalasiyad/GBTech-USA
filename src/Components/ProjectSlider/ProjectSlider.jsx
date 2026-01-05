import React, { useState } from "react";

// 👉 replace these with YOUR local images
import ProjectImg1 from "../../assets/slide1.png";
import ProjectImg2 from "../../assets/slide2.png";

const slides = [
  // SLIDE 1 (YOUR IMAGES)
  {
    left: {
      
      image: ProjectImg1,
    },
    right: {
      
      image: ProjectImg2,
    },
  },

  // SLIDE 2 (Unsplash)
  {
    left: {
      title: "Mobile App Development",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    right: {
      title: "UI / UX Design",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    },
  },

  // SLIDE 3
  {
    left: {
      title: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    right: {
      title: "Brand Strategy",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    },
  },

  // SLIDE 4
  {
    left: {
      title: "E-Commerce Solutions",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    },
    right: {
      title: "SEO Optimization",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    },
  },

  // SLIDE 5
  {
    left: {
      title: "Cloud Services",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    right: {
      title: "AI Solutions",
      image:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    },
  },
];

const ProjectSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-24 bg-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-gray-800">
          Show Casing Some Of <br />
          <span className="text-[#f47621]">Our Projects</span>
        </h2>
        <p className="max-w-xl mx-auto mt-4 font-normal text-base text-[#363636]">
          Our Medical Billing Experts Handle Patient Check-In/Out, Claims,
          Payments, And Denials, Ensuring Accuracy.
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-[#f47621] text-3xl z-10"
        >
          &#8249;
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#f47621] text-3xl z-10"
        >
          &#8250;
        </button>

        {/* Slides */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-10"
              >
                {[slide.left, slide.right].map((item, idx) => (
                  <div
                    key={idx}
                    className="relative h-[360px] rounded-2xl overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-[#f47621]" : "bg-orange-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSlider;
