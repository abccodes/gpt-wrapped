import React from "react";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  className,
  onClick,
  disabled = false,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`w-[364px] h-[73px] ${
        disabled
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-[#272626] hover:bg-[#3a3939]"
      } text-white border border-[#272626] rounded-full text-lg font-medium flex items-center justify-center gap-2 transition ${className}`}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
