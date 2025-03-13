import React from "react";

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
        <div className="w-[200px] h-[200px] flex items-center justify-center overflow-hidden">
          {imgSrc ? (
            <img src={imgSrc} alt={title} className="w-full  object-cover" />
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
