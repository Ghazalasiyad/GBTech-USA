import React from 'react'

import { FiHome, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";

export default function JobCard({ job }) {
  const isClosed = job.status === "closed";

  const getStatusLabel = () => {
    if (job.status === "new") return "10 min ago";
    if (job.status === "recent") return "1 day ago";
    return "Closed";
  };

  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition min-h-[260px]">
      {/* Status badge */}
      {job.status && (
        <span
          className={`absolute top-6 left-6 px-3 py-1 text-xs font-medium rounded-full ${
            isClosed
              ? "bg-gray-200 text-gray-500"
              : "bg-orange-100 text-[#f47621]"
          }`}
        >
          {getStatusLabel()}
        </span>
      )}

      {/* EXACT PIN ICON (top-right) */}
      <button className="absolute top-6 right-6">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 2L10 6V11L6 15V16H11L12 22L13 16H18V15L14 11V6L18 2H14Z"
            fill="#F97316"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="mt-10">
        <h3 className="text-2xl  font-medium text-[#363636] mb-1">
          {job.title}
        </h3>

        <p className="text-base font-normal text-[#363636] mb-5">
          {job.organization}
        </p>

        <p className="text-[#363636] text-base font-normal  leading-relaxed mb-8 line-clamp-3">
          {job.summary}
        </p>

        {/* Info row */}
        <div className="flex flex-wrap gap-8 text-sm text-[#363636]">
          <div className="flex items-center gap-2">
            <FiHome className="text-[#f47621] text-base font-normal" />
            <span>GB-Techive</span>
          </div>

          <div className="flex items-center gap-2">
            <FiClock className="text-[#f47621] text-lg" />
            <span>Full Time & Remote</span>
          </div>

          <div className="flex items-center gap-2">
            <FiDollarSign className="text-[#f47621] text-lg" />
            <span>50,000 - 70,000 PKR</span>
          </div>

          <div className="flex items-center gap-2">
            <FiMapPin className="text-[#f47621] text-lg" />
            <span>Gilgit Baltistan, Pakistan</span>
          </div>
        </div>
      </div>

      {/* Action button */}
      <div className="absolute right-8 bottom-8">
        <button
          disabled={isClosed}
          className={`px-5 py-2 rounded-md text-sm font-medium transition ${
            isClosed
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-[#f47621] text-white"
          }`}
        >
          view details
        </button>
      </div>
    </div>
  );
}



