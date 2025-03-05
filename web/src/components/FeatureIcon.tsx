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
    <div
      className={`w-full flex flex-col items-center text-center ${className} `}
    >
      <div className="flex items-center justify-center flex-col w-1/3">
        <div className="w-[200px] h-[200px] bg-[#D9D9D9] rounded-full flex items-center justify-center overflow-hidden">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>

        <p className="text-paragraphmedium font-thin mt-5 text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

export default FeatureIcon;
