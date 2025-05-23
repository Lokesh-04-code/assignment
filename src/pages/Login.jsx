import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/account");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}   // start invisible and slightly down
      animate={{ opacity: 1, y: 0 }}    // animate to visible and original position
      transition={{ duration: 0.6 }}    // animation duration
      className="min-h-screen w-full flex items-center justify-center bg-white p-6"
    >
      <div className="w-full max-w-sm min-h-screen bg-gray-50 flex flex-col p-6 border-[2px] border-gray-200">
        <button onClick={() => navigate(-1)} className="mb-4 text-purple-600 ml-[-300px]">
          ← Back
        </button>

        <h2 className="text-2xl font-bold mb-2 w-[200px]">Signin to your PopX account</h2>
        <p className="text-gray-600 mb-6 w-[250px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="relative mb-6">
          <label
            htmlFor="email"
            className="absolute -top-2 left-3 bg-gray-50 px-1 text-[12px] font-[500] text-purple-600"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email address"
            className="w-full border border-gray-300 rounded px-3 pt-4 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="password"
            className="absolute -top-2 left-3 bg-gray-50 px-1 text-[12px] font-[500] text-purple-600"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded px-3 pt-4 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Stick login button to the bottom */}
        <button
          className="w-full bg-gray-300 text-white py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </motion.div>
  );
}
