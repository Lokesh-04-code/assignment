// components/ProfileCard.jsx
import React from "react";
import img from "../assets/image.png"; // Adjust the path as necessary
export default function ProfileCard({ name, email, description }) {
  return (
    <div className="bg-gray-50 p-6">
      <div className="flex items-center mb-4">
        <img src={img} alt="Profile" className="rounded-full w-16 h-16 mr-4" />
        <div className="mt-[-20px]">
          <h3 className="text-[15px] font-semibold">{name}</h3>
          <p className="text-gray-600 text-[15px]">{email}</p>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
