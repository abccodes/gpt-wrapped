import React, { useState, useEffect } from "react";
import { useLoading } from "@/context/LoadingContext";
import { useNavigate } from "react-router-dom";

const Loading: React.FC = () => {
  const [dotCount, setDotCount] = useState(1);
  const { isLoading } = useLoading();
  const navigate = useNavigate();

  // Navigate away once loading is done
  useEffect(() => {
    if (!isLoading) {
      navigate("/upload");
    }
  }, [isLoading, navigate]);

  // If not loading, don't render
  if (!isLoading) return null;

  // Cycle dotCount between 1 -> 2 -> 3 -> 1 ...
  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 500); // Change every 0.5s (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white">
      {/* "Processing" text with a dynamic number of dots */}
      <h1 className="text-2xl font-semibold mb-4 text-black">
        Processing{".".repeat(dotCount)}
      </h1>
    </div>
  );
};

export default Loading;
