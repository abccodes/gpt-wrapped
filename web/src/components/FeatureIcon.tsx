import React from "react";
import ParagraphMedium from "./typography/ParagraphMedium";

interface FeatureIconProps {
  imgSrc?: string;
  title: string;
  className?: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({
  imgSrc,
  title,
  className,
}) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="w-[250px] h-[250px] bg-[#D9D9D9] rounded-full flex items-center justify-center overflow-hidden">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>

      <ParagraphMedium className="w-2/3 mt-5">{title}</ParagraphMedium>
    </div>
  );
};

export default FeatureIcon;
