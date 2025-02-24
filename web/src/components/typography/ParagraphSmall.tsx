import React from "react";
import { cn } from "@/lib/utils";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const ParagraphSmall: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h1 className={cn("text-paragraphsmall font-thin", className)}>
      {children}
    </h1>
  );
};

export default ParagraphSmall;
