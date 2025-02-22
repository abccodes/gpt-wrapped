import React from "react";
import { cn } from "@/lib/utils"; // Ensure cn utility is available in your project

interface DividerProps {
  width?: string; // Custom width (e.g., "w-2/3" or "w-full")
  className?: string; // Extra styles if needed
}

const Divider: React.FC<DividerProps> = ({ width = "w-3/4", className }) => {
  return (
    <div
      className={cn(
        `${width} border-t-2 border-black mx-auto my-8 m-20`,
        className
      )}
    />
  );
};

export default Divider;
