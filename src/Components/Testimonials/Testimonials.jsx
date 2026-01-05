import React from "react";
import Avatar from "../../assets/avatar.png";

const testimonials = [
  {
    name: "Sam Jones",
    role: "Co-Founder",
    text: "copper mug try-hard pitchfork pour-over freegan heirloom neutra...",
    avatar: Avatar,
  },
  {
    name: "Sam Jones",
    role: "Co-Founder",
    text: "copper mug try-hard pitchfork pour-over freegan heirloom neutra...",
    avatar: Avatar,
  },
  {
    name: "Sam Jones",
    role: "Co-Founder",
    text: "copper mug try-hard pitchfork pour-over freegan heirloom neutra...",
    avatar: Avatar,
  },
  {
    name: "Sam Jones",
    role: "Co-Founder",
    text: "copper mug try-hard pitchfork pour-over freegan heirloom neutra...",
    avatar: Avatar,
  },
  {
    name: "Sam Jones",
    role: "Co-Founder",
    text: "copper mug try-hard pitchfork pour-over freegan heirloom neutra...",
    avatar: Avatar,
  },
  {
    name: "Sam Jones",
    role: "Co-Founder",
    text: "copper mug try-hard pitchfork pour-over freegan heirloom neutra...",
    avatar: Avatar,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#363636]">
            What Clients Say{" "}
            <span className="text-[#f47621]">About Us</span>
          </h2>
          <p className="mt-4 text-[#363636] font-normal text-lg max-w-4xl mx-auto leading-relaxed">
            copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. heirloom echo park
            mlkshk tote bag selvage hot chicken authentic turmeric truffaut
            hexagon try-hard chambray.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 shadow-[0_12px_40px_rgba(0,0,0,0.08)] px-8 pt-8 pb-12 text-left"
              style={{
                clipPath:
                  "path('M24 0 H100% V100% H48 Q24 100% 24 76 V24 Q24 0 48 0 Z')",
                borderRadius: "16px",
              }}
            >
              {/* User */}
              <div className="flex items-center mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-base font-medium text-[#363636]">
                    {t.name}
                  </h4>
                  <p className="text-base font-normal text-[#363636]">{t.role}</p>
                </div>
              </div>

              {/* Quote + text */}
              <div className="relative pl-6">
                <span className="absolute -left-1 top-0 text-orange-500 text-4xl font-extrabold leading-none">
                  “
                </span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.text}
                </p>
              </div>

              {/* Closing quote */}
              <span className="absolute bottom-6 right-6 text-orange-500 text-4xl font-extrabold leading-none">
                ”
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      {/* <div className="mt-24 h-[2px] w-full bg-orange-500" /> */}
    </section>
  );
};

export default Testimonials;
