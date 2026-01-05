import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent Successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
           <label className="block text-gray-600 text-sm mb-1">
  Name<span className="text-red-500">*</span>
</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2"
              required
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Service Interested<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Country<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#e9d8b1] text-white py-3 rounded-md"
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
