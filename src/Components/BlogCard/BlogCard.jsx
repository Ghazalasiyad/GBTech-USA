import React from "react";

const BlogCard = ({ image, date, author, title }) => {
  return (
    <div className="bg-white">
      {/* Image */}
      <img src={image} alt={title} className=" h-76 rounded-4xl object-cover" />

      {/* Content */}
      <div className="p-4">
        <p className="text-sm text-gray-500">
          {date} <span className="text-yellow-600">•</span> {author}
        </p>
        <h3 className="mt-2 text-lg font-bold text-gray-900">{title}</h3>
        <button className="mt-3 text-yellow-600 font-semibold hover:underline">
          ___ Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
