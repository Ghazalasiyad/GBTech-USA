import React from "react";

import IbnSina from "../../assets/ibnsina.png";
import Rupani from "../../assets/rupani.png";
import Academy from "../../assets/academy.png";
import ApexCo from "../../assets/apexco.png";
import ApexLand from "../../assets/apexland.png";
import ApexTours from "../../assets/apextours.png";

const Brand = () => {
  const brands = [
    { src: IbnSina, alt: "Ibn Sina Foundation" },
    { src: Rupani, alt: "Rupani Foundation" },
    { src: Academy, alt: "Rupani Academy" },
    { src: ApexCo, alt: "Apex & Co" },
    { src: ApexLand, alt: "Apex Land" },
    { src: ApexTours, alt: "Apex Tours & Adventures" },
  ];

  return (
    <>
    <div className="text-ccenter"> <h2 className="text-center text-gray-700 font-medium text-2xl mb-10">
          FEW OF OUR ESTEEMED{" "}
          <span className="text-orange-500">WORLD CLASS BRANDS</span>
        </h2></div>
    <section className="py-12 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto px-4">
       

        {/* Responsive layout */}
        <div className="
          grid grid-cols-2 gap-y-8 gap-x-6
          sm:grid-cols-3
          md:flex md:items-center md:justify-between md:gap-0
        ">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={brand.src}
                alt={brand.alt}
                className="h-28 sm:h-20  object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Brand;
