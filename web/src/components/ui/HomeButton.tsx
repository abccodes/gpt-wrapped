import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomeButton: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="fixed top-20 left-20">
      <button
        onClick={handleClick}
        className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg"
      />
    </nav>
  );
};

export default HomeButton;
