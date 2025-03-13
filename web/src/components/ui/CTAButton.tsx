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
      className={`pl-20 pr-20 pt-10 pb-10 flex text-center justify-center ${
        disabled
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-gradients-wrapped-1 hover:bg-[#3a3939]"
      } text-white border border-[#272626] rounded-full text-2xl font-medium flex transition ${className}`}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
