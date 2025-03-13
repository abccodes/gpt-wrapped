import React from "react";
import { useNavigate } from "react-router-dom";

interface FolderProps {
  title: string;
  startDate: string;
  endDate: string;
  backgroundColor?: string;
  type: "Electric" | "C02" | "Water";
  onClick?: () => void;
}

const Folder: React.FC<FolderProps> = ({
  title,
  startDate,
  endDate,
  backgroundColor = "bg-gradient-to-b from-[#0D1B2A] to-[#1B263B]",
  type,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    navigate(`/results/${type}`);
  };

  return (
    <div
      className={`relative w-[500px] h-[325px] text-white cursor-pointer transition-opacity duration-200 hover:opacity-90 ${backgroundColor}`}
      onClick={handleClick}
    >
      {/* Folder Tab */}
      <div
        className={`absolute top-0 left-0 w-1/3 h-8 ${backgroundColor} -translate-y-8 clip-flap`}
      />

      {/* Date Section - Always Stays at the Top */}
      <div className="absolute top-4 mt-10 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-2/3 text-sm font-mono tracking-wider">
        <span>THURS {startDate}</span>
        <div className="flex-1 border-t border-white mx-2"></div>
        <span>SAT {endDate}</span>
      </div>

      {/* Folder Content */}
      <div className="flex flex-col justify-center h-full px-4 text-center">
        {/* Folder Title */}
        <h1 className="mt-12 text-heading font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Folder;
