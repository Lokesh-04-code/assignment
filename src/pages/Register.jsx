import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [agency, setAgency] = useState("");

 const handleRegister = () => {
  if (!fullName || !phone || !email || !password || !agency) {
    alert("Please fill in all required fields marked with *");
    return;
  }
  navigate("/account");
};


  return (
    <div className="min-h-screen flex justify-center  p-4">
      <div className="w-full max-w-sm flex flex-col bg-gray-50 p-6 rounded border-[2px] border-gray-200" style={{ minHeight: "500px" }}>
        <button onClick={() => navigate(-1)} className="mb-4 text-purple-600 self-start">
          ← Back
        </button>

        <h2 className="text-xl font-bold mb-6 w-[150px]">Create your PopX account</h2>

        {/* Full Name */}
        <div className="relative mb-6">
          <label
            htmlFor="fullName"
            className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm text-purple-600"
          >
            Full Name <span className="text-red-500" >*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded px-3 pt-4 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Phone */}
        <div className="relative mb-6">
          <label
            htmlFor="phone"
            className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm text-purple-600"
          >
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Phone number"
            className="w-full border border-gray-300 rounded px-3 pt-4 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="relative mb-6">
          <label
            htmlFor="email"
            className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm text-purple-600"
          >
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded px-3 pt-4 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <label
            htmlFor="password"
            className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm text-purple-600"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-3 pt-4 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Company */}
        <div className="relative mb-6">
          <label
            htmlFor="company"
            className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600"
          >
            Company name
          </label>
          <input
            id="company"
            type="text"
            placeholder="Company name"
            className="w-full border border-gray-300 rounded px-3 pt-4 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <p className="mb-1  font-semibold">Are you an Agency?*</p>

        {/* Radio Buttons with violet selection */}
        <div className="flex gap-6 mb-6">
  <label className="flex items-center cursor-pointer">
    <input
      type="radio"
      name="agency"
      value="yes"
      className="accent-violet-600 w-5 h-5"
      onChange={(e) => setAgency(e.target.value)}
      checked={agency === "yes"}
    />
    <span className="ml-2 text-purple-700 select-none">Yes</span>
  </label>

  <label className="flex items-center cursor-pointer">
    <input
      type="radio"
      name="agency"
      value="no"
      className="accent-violet-600 w-5 h-5"
      onChange={(e) => setAgency(e.target.value)}
      checked={agency === "no"}
    />
    <span className="ml-2 text-purple-700 select-none">No</span>
  </label>
</div>


        {/* Button pushed to bottom */}
        <div className="mt-auto">
          <button
            onClick={handleRegister}
            className="w-full bg-[#7c3aed] text-white py-2 rounded"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
