import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhoneAlt,
} from "react-icons/fa";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Web Development", path: "/services/web-development" },
        { name: "UI/UX Design", path: "/services/uiux" },
      ],
    },
    { name: "Portfolio", path: "/portfolio" },
    {
      name: "Get Involved",
      path: "/getinvolved",
      dropdown: [
        { name: "Blogs", path: "/getinvolved/blogs" },
        { name: "Job Details", path: "/getinvolved/jobs" },
        { name: "Contact Us", path: "/getinvolved/contact" },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f8f8f8] shadow-sm z-50">
      <nav className="max-w-7xl mx-auto h-[70px] flex items-center justify-between px-6">

        {/* Logo */}
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="h-16 w-auto" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              
              {/* Parent Link */}
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 pb-1 transition hover:text-[#f47621]
                  ${
                    isActive
                      ? "border-b-2 border-[#f47621]"
                      : "border-b-2 border-transparent"
                  }`
                }
              >
                {link.name}
                {link.dropdown && (
                  <FaChevronDown className="text-xs mt-[2px]" />
                )}
              </NavLink>

              {/* Desktop Dropdown */}
              {link.dropdown && (
                <ul
                  className="absolute left-0 top-full mt-2 w-52 bg-white shadow-lg rounded-md
                             opacity-0 invisible group-hover:opacity-100 group-hover:visible
                             transition-all duration-200 z-50"
                >
                  {link.dropdown.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm rounded-md transition
                          ${
                            isActive
                              ? "bg-[#f47621] text-white"
                              : "text-gray-700 hover:bg-[#f47621] hover:text-white"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <button className="flex items-center gap-2 bg-[#f47621] text-white text-sm font-semibold px-5 py-2 rounded-full">
            Get in Touch
            <span className="bg-white text-[#f47621] p-2 rounded-full">
              <FaPhoneAlt size={12} />
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#f8f8f8] shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-6 text-base font-medium text-[#363636]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    link.dropdown &&
                    setOpenDropdown(
                      openDropdown === link.name ? null : link.name
                    )
                  }
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#f47621]"
                  >
                    {link.name}
                  </NavLink>

                  {link.dropdown && (
                    <FaChevronDown
                      className={`text-sm transition-transform ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Mobile Dropdown */}
                {link.dropdown && openDropdown === link.name && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {link.dropdown.map((item) => (
                      <li key={item.name}>
                        <NavLink
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm hover:text-[#f47621]"
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Mobile CTA */}
            <li>
              <button className="w-full mt-4 flex items-center justify-center gap-2 bg-[#f47621] text-white py-2 rounded-full">
                Get in Touch
                <FaPhoneAlt size={14} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
