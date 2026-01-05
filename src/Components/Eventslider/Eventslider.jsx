
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Slide1 from "../../assets/slide1.jpg";
import Slide2 from "../../assets/slide2.jpg";
import { FaArrowLeft, FaArrowRight, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "EXPLORING ISLAMIC INSIGHTS AND WISDOM",
    date: "July 2, 2026 @ 15:00 - 19:00",
    location: "85 Preston Rd. Inglewood, Maine 980",
    image: Slide1,
  },
  {
    id: 2,
    title: "CELEBRATING AT THE END OF RAMADAN",
    date: "August 10, 2026 @ 10:00 - 14:00",
    location: "123 Main Street, NY, USA",
    image: Slide2,
  },
];

export default function EventSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 relative mt-10">
      <div className="text-center mb-8">
        <p className="text-yellow-600 text-lg">Our Event</p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          OUR UPCOMING EVENTS
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-3xl"
      >
        {events.map((ev) => (
          <SwiperSlide key={ev.id}>
            <div className="bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch shadow-lg w-full">
              {/* LEFT - IMAGE */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-none lg:rounded-l-3xl"
                />
              </div>

              {/* RIGHT - CONTENT */}
              <div
                className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center"
                style={{
                  backgroundImage:
                    "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                  backgroundSize: "auto",
                }}
              >
                <h3 className="text-xl md:text-3xl lg:text-4xl font-black leading-tight mb-6">
                  {ev.title}
                </h3>

                <div className="flex flex-col gap-3 text-gray-700 mb-6 text-sm md:text-base">
                  <div className="flex items-center gap-3">
                    <FaClock className="text-yellow-600" />
                    <span>{ev.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-yellow-600" />
                    <span>{ev.location}</span>
                  </div>
                </div>

                {/* Styled Numbers */}
                <div className="flex gap-4 md:gap-6 items-center mb-6 flex-wrap">
                  {[
                    ["484", "Days"],
                    ["23", "Hours"],
                    ["07", "Minutes"],
                    ["06", "Seconds"],
                  ].map(([num, label]) => (
                    <div key={label} className="flex flex-col items-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-yellow-600 flex items-center justify-center text-2xl md:text-3xl font-bold text-gray-800 bg-white">
                        {num}
                      </div>
                      <span className="mt-2 text-sm md:text-base text-gray-600">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                <div>
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* arrows responsive */}
      <button
        ref={prevRef}
        className="absolute left-3 sm:left-5 lg:-left-16 top-1/2 -translate-y-1/2 z-30 bg-white border rounded-lg p-2 sm:p-3 shadow-lg"
        aria-label="Previous slide"
      >
        <FaArrowLeft />
      </button>
      <button
        ref={nextRef}
        className="absolute right-3 sm:right-5 lg:-right-16 top-1/2 -translate-y-1/2 z-30 bg-white border rounded-lg p-2 sm:p-3 shadow-lg"
        aria-label="Next slide"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
