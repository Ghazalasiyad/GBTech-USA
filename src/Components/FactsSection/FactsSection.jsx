import { useEffect, useState } from "react";
import React from "react";
import LeftImage from "../../assets/circle.png"
import DevicesImage from "../../assets/laptop.png";

const FactsSection = () => {
  // Counter states
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  useEffect(() => {
    // Animate numbers
    const projectsTarget = 500;
    const clientsTarget = 800;
    const duration = 2000; 
    const intervalTime = 30; 
    const projectsStep = Math.ceil(projectsTarget / (duration / intervalTime));
    const clientsStep = Math.ceil(clientsTarget / (duration / intervalTime));

    const projectsInterval = setInterval(() => {
      setProjectsCount((prev) => {
        if (prev + projectsStep >= projectsTarget) {
          clearInterval(projectsInterval);
          return projectsTarget;
        }
        return prev + projectsStep;
      });
    }, intervalTime);

    const clientsInterval = setInterval(() => {
      setClientsCount((prev) => {
        if (prev + clientsStep >= clientsTarget) {
          clearInterval(clientsInterval);
          return clientsTarget;
        }
        return prev + clientsStep;
      });
    }, intervalTime);

    // Cleanup
    return () => {
      clearInterval(projectsInterval);
      clearInterval(clientsInterval);
    };
  }, []);

  return (
    <section className="w-full bg-white py-16 flex flex-col lg:flex-row items-center gap-10 relative">
      {/* LEFT IMAGE - flush to left */}
      <div className="flex-shrink-0 hidden lg:flex">
        <img src={LeftImage} alt="Left Decorative" className="w-64" />
      </div>

      {/* CENTER CONTENT - centered text */}
      <div className="flex-1 text-center lg:text-center max-w-4xl px-4">
        <h2 className="text-4xl lg:text-4xl font-semibold text-gray-900 mb-6">
          Some Awesome Facts <br /> About <span className="text-[#f47621]">GB Techive</span> Company
        </h2>

        <div className="flex flex-col sm:flex-row sm:gap-16 gap-6 justify-center mt-8">
          <div>
            <p className="text-gray-500">Completed Projects</p>
            <p className="text-4xl font-bold text-[#f47621] mt-1">{projectsCount}+</p>
          </div>
          <div>
            <p className="text-gray-500">Satisfied Clients</p>
            <p className="text-4xl font-bold text-[#f47621] mt-1">{clientsCount}+</p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE - add space from right */}
      <div className="flex-shrink-0 mr-4 lg:mr-10">
        <img src={DevicesImage} alt="Laptop and Phone" className="w-100 lg:w-96" />
      </div>
    </section>
  );
};

export default FactsSection;
