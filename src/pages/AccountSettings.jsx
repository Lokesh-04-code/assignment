import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

export default function AccountSettings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex justify-center  p-6">
      <div className="w-full max-w-sm bg-gray-50 border-[2px] border-gray-200">
        <button onClick={() => navigate(-1)} className="mb-4 mt-2 ml-2 text-purple-600">
          ← Back
        </button>
        <h2 className="text-lg font-[500] mb-4 bg-white w-full p-4 ">Account Settings</h2>
        <ProfileCard
          name="Marry Doe"
          email="Marry@Gmail.Com"
          img="../assets/image.png"
          description="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"
        />
        <div className="text-gray-200">-----------------------------------------------------------</div>
        <div className="  mt-[270px] text-gray-200">-----------------------------------------------------------</div>
      </div>
      
    </div>
  );
}
