import React from "react";
import { cn } from "@/lib/utils";
interface DividerProps {
  width?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ width = "w-5/6", className }) => {
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
