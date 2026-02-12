import React from "react";
import { FaArrowRight, FaHandshake, FaChartLine } from "react-icons/fa";
import Hero from "../../assets/hero.png"; 
import People from "../../assets/people.png"; 
import GroupImage from "../../assets/group.png"; 
import Settings from "../../assets/settings.png"; 
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import LeftImage from "../../assets/circle.png"
import DevicesImage from "../../assets/laptop.png";
import Brand from "../../Components/Brand/Brand";
import Servicecard from "../../Components/Servicecard/Servicecard";
import RecentProjects from "../../Components/RecentProjects/RecentProjects";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Map from "../../Components/Map/Map";
import Footer from "../../Components/Footer/Footer";
import FactsSection from "../../Components/FactsSection/FactsSection.jsx";
import Button from "../../Components/Button/Button.jsx";
// import Bulb from "../../assets/bulb.png";
// import Coffee from "../../assets/coffee.png";
// import Logo from "../../assets/logo.png";
// import CircleBg from "../../assets/bgcircle.png";
const Home = () => {
  return (
      <>
    <section className="bg-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl leading-tight font-semibold text-[#363636]">
            WE DESIGN PRODUCT <br />
            <span className="text-[#f47621]">VISION</span> FOR  
            <span className="bg-[#f47621] text-white px-2 py-1 ml-2        inline-block">
              EVERYONE
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-[#3f3f3f] text-lg font-normal leading-relaxed">
            copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
           <Button text="Get in Touch"/>
            

            <button className="flex items-center gap-3 border border-orange-500 text-orange-500 hover:bg-orange-50 font-medium px-6 py-3 rounded-full transition">
              Explore our Service
              <span className="bg-[#f47621] text-white p-2 rounded-full">
                <FaArrowRight size={12} />
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">
         

          {/* Hero image (Girl holding laptop) */}
          <img
            src={Hero}
            alt="Hero"
            
          />

         
        </div>

      </div>
    </section>


{/* // Second Section */}
 <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto lg:ml-20 px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={GroupImage}
            alt="Our Team"
            className="rounded-lg max-w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <span className="text-lg bg-[#363636] text-white px-4 py-2 font-normal rounded-full">
            about our company
          </span>

          <h2 className="text-4xl md:text-4xl font-semibold text-[#383838] leading-tight mt-4">
            Before They <span className="text-[#f47621]">Sold</span> Out<br/>                 
            <span className="text-[#f47621]">Readymade</span> Gluten
          </h2>

          <p className="text-gray-600 text-lg font-normal md:text-lg">
            copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
                    <img
            src={People}
            alt="People"
            className="h-8 w-8"
          />
              <div>
                <h4 className="font-semibold  text-lg text-[#363636]">innovative approach</h4>
                <p className="text-[#363636] font-normal text-lg">
                  copper mug try-hard pitchfork pour-over freegan heirloom neutra
                  air plant cold-pressed tacos poke beard tote bag.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
                      <img
            src={Settings}
            alt="Settings"
            className="h-8 w-8"
          />
              <div>
                <h4 className="font-semibold text-lg text-[#363636]">clients centered focus</h4>
                <p className="text-[#363636] font-normal text-lg">
                  copper mug try-hard pitchfork pour-over freegan heirloom neutra
                  air plant cold-pressed tacos poke beard tote bag.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <Button text="Know more"/>
        </div>
      </div>
    </section>
   
    <div className="mt-8"> <Brand/></div>
    <div className="mt-10"><Servicecard/></div>




 {/* Why Choose Us Section */}
<section className="w-full bg-[#f8f8f8] py-12">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="mt-10 lg:-mt-50 px-4 lg:px-0">

        <span className="inline-block mb-4 rounded-full bg-[#363636] px-4 py-1 text-lg font-normal text-white">
          why choose us
        </span>

        <h2 className="text-3xl font-semibold leading-tight text-[#363636]">
          Elevate Your{" "}
          <span className="text-[#f47621]">Business</span> With Marketing
          Partner Who Exceeds{" "}
          <span className="text-[#f47621]">Expectations</span>
        </h2>

        <p className="mt-4 text-[#363636] text-lg font-normal max-w-lg">
          copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. heirloom echo park
          mlkshk tote bag selvage hot chicken authentic turmeric truffaut.
        </p>

        {/* FEATURES */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
          <div className="flex items-center gap-3 rounded-full bg-[white] px-4 py-4">
            <img src={icon1} className="h-5 w-5" />
            <span className="text-sm text-[#363636] font-medium">affordable excellence</span>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-[white] px-4 py-4">
            <img src={icon2} className="h-5 w-5" />
            <span className="text-sm text-[#363636] font-medium">
              find and tailored solutions
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-[white] px-4 py-4">
            <img src={icon3} className="h-5 w-5" />
            <span className="text-sm text-[#363636] font-medium">
              meet with our expert team
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-[white] px-4 py-4">
            <img src={icon4} className="h-5 w-5" />
            <span className="text-sm text-[#363636] font-medium">
              customer centric approach
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-end pt-10 px-4 lg:px-0">
        <div className="w-full h-100 max-w-2xl aspect-video rounded-2xl overflow-hidden bg-gray-300">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
<div className="mt-10">                <Button text="Explore More about"/>
</div>

      </div>

    </div>
  </div>
</section>



<FactsSection/>

{/*  */}

<RecentProjects/>
<Testimonials/>
<Map/>
<Footer/>



</>
  );
 
};

export default Home;
