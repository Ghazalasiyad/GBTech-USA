import React from 'react'
import BgImage from "../../assets/portfoliobg.png";
import ServiceImg from "../../assets/about1.png";
import OfficeIcon from "../../assets/office.png";
import LocationIcon from "../../assets/location.png";
import LearnIcon from "../../assets/scholarship.png";
import TeamIcon from "../../assets/workers.png";
import LunchIcon from "../../assets/lunch.png";
import AwardIcon from "../../assets/award.png";
import JobOpenings from '../../Components/JobOpenings/JobSection';
import Footer from "../../Components/Footer/Footer";
import JobSection from '../../Components/JobOpenings/JobSection';
import Button from '../../Components/Button/Button';


const GetInvolved = () => {
  return (
    <>
      {/* 1st section */}
      <section className="relative w-full h-screen">
        <img
          src={BgImage}
          alt="Career Opportunities"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full max-w-7xl mx-auto flex items-center">
          <div className="max-w-xl text-white">
            <h2 className="text-4xl font-semibold text-[#f47621]">
              Career And Opportunities
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-white">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutral air
              plant cold-pressed tacos poke beard tote bag. Heirloom echo park
              mlkshk tote bag selvage hot chicken authentic turmeric truffaut.
            </p>
<div className='mt-8'>         <Button text="more details"/>
</div>
          </div>
        </div>
      </section>

      {/* 2nd section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-3xl font-semibold text-[#363636] mb-6">
              Working with <span className="text-[#f47621]">best</span>
              <br />
              <span className="text-[#f47621]">companies</span> in world
            </h2>

            <p className="text-[#363636] text-lg md:text-base leading-relaxed max-w-lg mb-10">
              copper mug try-hard pitchfork pour-over freegan heirloom neutra air
              plant cold-pressed tacos poke beard tote bag.
            </p>

           <Button text="more details"/>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={ServiceImg}
              alt="Services"
              className="w-full max-w-[420px]"
            />
          </div>
        </div>
      </section>

      {/* 3rd section (CARDS FIXED) */}
      <section className="bg-[#e8ecef] py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Card */}
          <div className="bg-white rounded-xl p-10 min-h-[600px] flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-[#363636] mt-36">
                Build Your Future.
                <br />
                Join <span className="text-black">GBTechive</span>
              </h2>

              <p className="text-[#363636] mt-6 font-normal text-lg leading-relaxed">
                copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                plant cold-pressed tacos poke beard tote bag heirloom echo park
                mlkshk tote bag selvage hot chicken authentic tumeric truffaut
                hexagon try-hard chambray.
              </p>
              <div className='mt-30'>              <Button text="contact us now"/>
</div>
            </div>

          </div>

          {/* Right Card */}
          <div className="bg-white rounded-xl p-10 min-h-[600px]">
            <h3 className="text-xl font-semibold text-[#363636] mb-8">
              Our Benefits Include
            </h3>

            <div className="space-y-7">
              {[
                { icon: OfficeIcon, title: "Clean Office Environment" },
                { icon: LocationIcon, title: "Easy Access location" },
                { icon: LearnIcon, title: "Learn and Scholarships" },
                { icon: TeamIcon, title: "Great co-workers" },
                { icon: LunchIcon, title: "Lunch and Refreshment" },
                { icon: AwardIcon, title: "Performance Award" },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#fbd0b4] flex-shrink-0">
                    <img src={item.icon} alt={item.title} className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-[#363636]">
                      {item.title}
                    </h4>
                    <p className="text-[#363636] gray-500 text-lg font-normal mt-1">
                      copper mug try-hard pitchfork pour-over freegan heirloom
                      neutra air.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* Job openings */}
      {/* <JobOpenings/> */}
      <JobSection/>
      <Footer/>
    </>
  )
}

export default GetInvolved;
