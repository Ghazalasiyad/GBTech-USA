import React from "react";

const Button = ({ text = "contact us", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-5 bg-[#F47A20] text-white
                 rounded-full pl-7 pr-2 py-1.5
                 hover:bg-[#e46f18] transition-all duration-300"
    >
      {/* Text */}
      <span className="text-base font-medium capitalize whitespace-nowrap">
        {text}
      </span>

      {/* Arrow Circle */}
      <div className="flex items-center justify-center w-[36px] h-[36px] bg-white rounded-full">
        <svg
          className="w-4 h-4 text-[#F47A20] transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M9 7h8v8"
          />
        </svg>
      </div>
    </button>
  );
};

export default Button;
