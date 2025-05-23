import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <button
      className="absolute top-5 left-5 bg-gray-300 dark:bg-gray-700 text-sm px-3 py-1 rounded"
      onClick={() => navigate(-1)}
    >
      ← Back
    </button>
  );
};

export default BackButton;
