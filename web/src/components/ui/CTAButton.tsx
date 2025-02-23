import React from "react";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, className }) => {
  return (
    <Button
      className={`w-[364px] h-[73px] bg-[#272626] text-white border border-[#272626] rounded-full text-lg font-medium flex items-center justify-center gap-2 hover:bg-[#3a3939] transition ${className}`}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
