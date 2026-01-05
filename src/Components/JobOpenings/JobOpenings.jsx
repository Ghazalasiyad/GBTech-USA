import React from "react";
import {
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
} from "lucide-react";

const jobs = [
  {
    status: "active",
    time: "10 min ago",
    title: "Finance Manager",
    company: "Rupani Foundation, Gilgit Baltistan",
    summary:
      "The Finance Manager will be responsible for managing and overseeing all the financial activities at the Rupani Foundation USA. This role involves maintaining accurate financial records, preparing financial reports",
    type: "Full Time & Remote",
    salary: "50,000 - 70,000 Pkr",
    location: "Gilgit Baltistan, Pakistan",
  },
  {
    status: "active",
    time: "1 day ago",
    title: "Office Administrator",
    company: "Rupani Foundation, Gilgit Baltistan",
    summary:
      "We are seeking an organized, proactive, and detail-oriented Office Administrator to support HR, Finance, and Operations. The ideal candidate will be self-motivated problem-solver with strong communication skills.",
    type: "Full Time & Remote",
    salary: "50,000 - 70,000 Pkr",
    location: "Gilgit Baltistan, Pakistan",
  },
  {
    status: "closed",
    title: "Finance Manager",
    company: "Rupani Foundation, Gilgit Baltistan",
    summary:
      "The Finance Manager will be responsible for managing and overseeing all the financial activities at the Rupani Foundation USA. This role involves maintaining accurate financial records, preparing financial reports",
    type: "Full Time & Remote",
    salary: "50,000 - 70,000 Pkr",
    location: "Gilgit Baltistan, Pakistan",
  },
];

const JobOpenings = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Job Opening
        </h2>
        <p className="text-gray-500 max-w-2xl mb-10">
          copper mug try-hard pitchfork pour-over freegan heirloom neutral air
          plant cold-pressed tacos poke beard tote bag. heirloom echo park
        </p>

        {/* Job Cards */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl border shadow-sm p-6 ${
                job.status === "closed" ? "opacity-60" : ""
              }`}
            >
              {/* Status Badge */}
              {job.time && (
                <span className="absolute top-4 left-4 text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                  {job.time}
                </span>
              )}

              {job.status === "closed" && (
                <span className="absolute top-4 left-4 text-xs bg-red-100 text-red-500 px-3 py-1 rounded-full">
                  Closed
                </span>
              )}

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Left Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {job.company}
                  </p>

                  <h4 className="text-sm font-semibold text-gray-800 mb-1">
                    Job Summary
                  </h4>
                  <p className="text-sm text-gray-500 max-w-3xl">
                    {job.summary}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-6 mt-5 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-orange-500" />
                      GB-Techive
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      {job.type}
                    </div>

                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-orange-500" />
                      {job.salary}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      {job.location}
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="self-start lg:self-center">
                  <button
                    disabled={job.status === "closed"}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition ${
                      job.status === "closed"
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                        : "bg-orange-500 text-white hover:bg-orange-600"
                    }`}
                  >
                    view details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-orange-500 text-orange-500 rounded-full text-sm font-medium hover:bg-orange-50 transition">
            See more ↓
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
