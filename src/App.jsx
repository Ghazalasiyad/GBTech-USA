import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Navbar from "./Components/Navbar/Navbar";

import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/Aboutus/Aboutus";
import Portfolio from "./Pages/Portfolio/portfolio";

/* Services */
import Services from "./Pages/Services/Services";
import WebDevelopment from "./Pages/Services/WebDevelopment";
import UIUX from "./Pages/Services/UIUX";

/* Get Involved */
import GetInvolved from "./Pages/GetInvolved/GetInvolved";
import Blogs from "./Pages/GetInvolved/Blogs";
import Jobs from "./Pages/GetInvolved/Jobs";
import Contact from "./Pages/GetInvolved/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/uiux" element={<UIUX />} />

        {/* Get Involved */}
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/getinvolved/blogs" element={<Blogs />} />
        <Route path="/getinvolved/jobs" element={<Jobs />} />
        <Route path="/getinvolved/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
