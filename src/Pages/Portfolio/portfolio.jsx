import React from "react";
import BgImage from "../../assets/portfoliobg.png"; 
import ServiceImg from "../../assets/about1.png"; 
import Service from "../../assets/about2.png";
import Footer from "../../Components/Footer/Footer";
import ProjectSlider from "../../Components/ProjectSlider/ProjectSlider";
import Button from "../../Components/Button/Button";


const Portfolio = () => {
  return ( 
    <>
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={BgImage}
        alt="Portfolio"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl px-16">
          <h2 className="text-[#f47621] text-4xl md:text-3xl font-semibold mb-4">
            Our Portfolio
          </h2>

          <p className="text-white text-lg font-normal md:text-base max-w-xl leading-relaxed mb-8">
            copper mug try-hard pitchfork pour-over freegan heirloom neutra
            air plant cold-pressed tacos poke beard tote bag. heirloom echo
            park mlkshk tote bag selvage hot chicken authentic turmeric
            truffaut hexagon try-hard chambray.
          </p>

         <Button text="more details"/>
        </div>
      </div>
    </section>


{/* 2nd section */}

     <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-3xl font-semibold text-[#363636] leading-snug mb-6">
            Our Top <span className="text-[#f47621]">Furnished</span>
            <br />
            Giving <span className="text-[#f47621]">Services</span>
          </h2>

          <p className="text-[#363636] text-lg font-normal md:text-base leading-relaxed max-w-lg mb-10 ">
            Explore our success stories. We’re proud to showcase the results we’ve delivered across industries through impactful Software Projects, Web Development projects, 
            Digital Marketing projects, and Medical billing and Documentation Projects.
          </p>

         <Button text="get in touch"/>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end ml-[-60]">
          {/* Orange Border Shape */}
          <div className="relative" />

          {/* Image */}
          <img
            src={ServiceImg}
            alt="Services"
            className="block w-full max-w-[380px] md:max-w-[420px] h-auto"
          />
        </div>
      </div>
    </section>




    {/* 3rd Section */}
      <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Orange Border Shape */}
          <div className="" />

          {/* Image */}
          <img
            src={Service}
            alt="Services"
            className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] object-cover rounded-[60%_40%_55%_45%/55%_60%_40%_45%]"
          />
        </div>

        {/* Right Content */}
        <div className="lg:pl-12">
          <h2 className="text-4xl md:text-3xl font-semibold text-[#363636] leading-snug mb-6">
            Our Top <span className="text-[#f47621]">Furnished</span>
            <br />
            Giving <span className="text-[#f47621]">Services</span>
          </h2>

          <p className="text-[#363636] text-lg font-normal md:text-base leading-relaxed max-w-lg mb-10">
            copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. heirloom echo park
            mlkshk tote bag selvage hot chicken authentic turmeric truffaut
            hexagon try-hard chambray.
          </p>

        <Button text="more details"/>
        </div>

      </div>
    </section>


    {/* 4th Section */}
     <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-3xl font-semibold text-[#363636] leading-snug mb-6">
            Our Top <span className="text-[#f47621]">Furnished</span>
            <br />
            Giving <span className="text-[#f47621]">Services</span>
          </h2>

          <p className="text-[#363636] text-lg font-normal md:text-base leading-relaxed max-w-lg mb-10">
            copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. heirloom echo park
            mlkshk tote bag selvage hot chicken authentic turmeric truffaut
            hexagon try-hard chambray.
          </p>

          <Button text="more details"/>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Orange Border Shape */}
          <div className="relative" />

          {/* Image */}
          <img
            src={ServiceImg}
            alt="Services"
            className="block w-full max-w-[380px] md:max-w-[420px] h-auto"
          />
        </div>
      </div>
    </section>
   <ProjectSlider/>

    <Footer/>
    </>
  );
};

export default Portfolio;
