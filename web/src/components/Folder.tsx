import React from "react";
import { useNavigate } from "react-router-dom"; // Import for routing

interface FolderProps {
  title: string;
  startDate: string;
  endDate: string;
  backgroundColor?: string;
  type: "Electric" | "C02" | "Water";
}

const Folder: React.FC<FolderProps> = ({
  title,
  startDate,
  endDate,
  backgroundColor = "bg-gradient-to-b from-[#0D1B2A] to-[#1B263B]",
  type,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/results/${type}`);
  };

  return (
    <div
      className={`relative w-[350px] h-[250px] text-white cursor-pointer transition-opacity duration-200 hover:opacity-90 ${backgroundColor}`}
      onClick={handleClick}
    >
      {/* Folder Tab */}
      <div
        className={`absolute top-0 left-0 w-1/3 h-8 ${backgroundColor} -translate-y-8 clip-flap`}
      />

      {/* Folder Content */}
      <div className="flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Date Section */}
        <div className="flex items-center justify-between w-full text-sm font-mono tracking-wider mb-3">
          <span>THURS {startDate}</span>
          <div className="flex-1 border-t border-white mx-2"></div>
          <span>SAT {endDate}</span>
        </div>

        {/* Folder Title */}
        <h1 className="mt-2.5 text-heading font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Folder;
