import React from "react";

const Map = () => {
  return (
    <section className="w-full">
      {/* TOP BAR */}
      <div className="bg-[#f57c20] px-6 py-4 h-[14vh] flex items-center justify-between">
        <div className="flex items-center gap-3 ml-20">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#f57c20"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
            </svg>
          </div>

          <h2 className="text-white  md:text-2xl text-4xl font-semibold ">
            Find Us Here
          </h2>
        </div>

        <button className="bg-white text-[#f57c20] px-8 py-3 rounded-md mr-20 text-base font-medium hover:bg-gray-100 transition">
          Leave Message
        </button>
      </div>

      {/* MAP */}
      <div className="w-full h-[450px]">
        <iframe
          title="Houston Texas Location"
          src="https://www.google.com/maps?q=Houston,Texas,United%20States&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Map;
