import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0b1324] to-[#0f1b2e] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div className=" mb-3">
           
            <img src={logo} alt="GBTECHIVE Logo" className="object-contain" />
          </div>

          <p className="text-lg font-normal leading-6 mb-6 max-w-lg text-[#ffffff]">
            copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. heirloom echo park
            mlkshk tote
          </p>

          <div className="flex items-center gap-4 text-[#ffffff]">
            <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
            <FaTwitter className="hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
            <FaYoutube className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h3 className="text-[#f57c20] font-semibold text-lg mb-6 border-b border-white inline-block pb-2">
  useful links
</h3>

          <ul className="space-y-4 text-lg font-normal text-[#ffffff]">
            <li className="hover:text-white cursor-pointer">home</li>
            <li className="hover:text-white cursor-pointer">about us</li>
            <li className="hover:text-white cursor-pointer">services</li>
            <li className="hover:text-white cursor-pointer">contact us</li>
            <li className="hover:text-white cursor-pointer">portfolio</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-[#f57c20] font-semibold text-lg mb-6 border-b border-white inline-block pb-2">services</h3>
          <ul className="space-y-4 text-lg font-normal text-[#ffffff]">
            <li className="hover:text-white cursor-pointer">digital marketing</li>
            <li className="hover:text-white cursor-pointer">web development</li>
            <li className="hover:text-white cursor-pointer">uxui design</li>
            <li className="hover:text-white cursor-pointer">graphic design</li>
            <li className="hover:text-white cursor-pointer">
              medical documentation
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-[#f57c20] font-semibold text-lg mb-6 border-b border-white inline-block pb-2">contact us</h3>
          <ul className="space-y-4 text-lg font-normal text-[#ffffff]">
            <li>
              address: houston, texas,
              <br />
              united states
            </li>
            <li>phone: +1 281 886 8531</li>
            <li>e-mail: info@gbtechive.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
