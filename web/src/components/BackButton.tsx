import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/results")}
      className="flex items-center bg-white text-primary2 font-semibold hover:underline"
    >
      <FaArrowLeft className="mr-2" />
      BACK TO FOLDERS
    </button>
  );
};

export default BackButton;
