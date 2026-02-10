import { useEffect, useState } from "react";
import React from "react";

const CounterItem = ({ label, value, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500; // animation speed
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-sm text-gray-700 font-medium">
        {label}
      </span>
      <span className="text-5xl font-bold text-orange-500">
        {count}
        {suffix}
      </span>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <div className="flex justify-center gap-16 py-12">
      <CounterItem label="Completed Projects" value={500} suffix="+" />
      <CounterItem label="Active Clients" value={10} suffix="k+" />
      <CounterItem label="Satisfied Clients" value={800} suffix="+" />
    </div>
  );
};

export default StatsCounter;
