import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm min-h-screen bg-gray-50 flex flex-col justify-end p-6 text-center border-2 border-gray-200"
      >
        <div className="text-left">
          <h1 className="text-2xl font-bold">Welcome to PopX</h1>
          <p className="text-gray-400 mt-2 font-[500]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-4 space-y-2">
            <button
              className="w-full bg-[#7c3aed] text-white py-2 rounded-[5px]"
              onClick={() => navigate("/register")}
            >
              Create Account
            </button>
            <button
              className="w-full bg-[#c4bde8] font-[500] py-2 rounded-[5px]"
              onClick={() => navigate("/login")}
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
