import React from "react";
import { cn } from "@/lib/utils";
interface SubHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ children, className }) => {
  return (
    <h2 className={cn("text-subheading font-regular", className)}>
      {children}
    </h2>
  );
};

export default SubHeading;
