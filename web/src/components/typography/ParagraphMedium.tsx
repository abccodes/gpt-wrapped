import React from "react";
import { cn } from "@/lib/utils";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const ParagraphMedium: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h1
      style={{ color: "#022B49" }}
      className={cn("text-paragraphmedium font-thin", className)}
    >
      {children}
    </h1>
  );
};

export default ParagraphMedium;
