import Counter from "./Counter";
import React from "react";
const stats = [
  { value: "200+", label: "Graduates" },
  { value: "15+", label: "Certified Programs" },
  { value: "50+", label: "industry Partnerships" },
  { value: "95+", label: "job placement rate" },
];

const CounterList = () => {
  return (
    <div className=" py-12 flex justify-start">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
        {stats.map((stat, index) => (
          <Counter key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default CounterList;