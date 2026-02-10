import React from 'react'

import JobCard from "../JobOpenings/Jobcard";

const jobs = [
  {
    id: 1,
    title: "Finance Manager",
    organization: "Rupani Foundation, Gilgit Baltistan",
    summary:
      "The Finance Manager will be responsible for managing and overseeing all the financial activities at the Rupani Foundation USA. This role involves maintaining accurate financial records, preparing financial reports",
    tags: ["GB-Techive", "Full Time & Remote", "50,000 - 70,000 PKR", "Gilgit Baltistan, Pakistan"],
    status: "new",
  },
  {
    id: 2,
    title: "Office Administrator",
    organization: "Rupani Foundation, Gilgit Baltistan",
    summary:
      "We are seeking an organized, proactive, and detail-oriented Office Administrator to support HR, Finance, and Operations.",
    tags: ["GB-Techive", "Full Time & Remote", "50,000 - 70,000 PKR", "Gilgit Baltistan, Pakistan"],
    status: "recent",
  },
  {
    id: 3,
    title: "Finance Manager",
    organization: "Rupani Foundation, Gilgit Baltistan",
    summary:
      "The Finance Manager will be responsible for managing and overseeing all the financial activities at the Rupani Foundation USA.",
    tags: ["GB-Techive", "Full Time & Remote", "50,000 - 70,000 PKR", "Gilgit Baltistan, Pakistan"],
    status: "closed",
  },
];

export default function JobSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl font-semibold mb-2">Job Opening</h2>
        <p className="text-[#363636] text-lg font-normal max-w-lg mb-10">
          copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag.
        </p>

        {/* Job List */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* See More */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 px-6 py-2 border border-[#f47621] text-[#f47621] rounded-full hover:bg-orange-50 transition">
            See more
            <span className="text-lg">⌄</span>
          </button>
        </div>
      </div>
    </section>
  );
}
