import React from "react";

interface BoxProps {
  heading: string;
  title: string;
  number: string;
  color: string;
  bottomText: string;
  bottomNumber: string;
  bottomText2?: string;
}

const Box: React.FC<BoxProps> = ({
  heading,
  title,
  number,
  color,
  bottomText,
  bottomNumber,
  bottomText2,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-1/3">
      <div className={`relative ${color} text-white rounded-3xl p-20 mx-5`}>
        {/* Badge in top-right corner */}
        <div
          className={`text-paragraphmedium absolute top-0 right-0 w-20 h-20 ${color} rounded-full flex items-center justify-center font-bold -translate-y-1/2 translate-x-1/2 border-8 border-white`}
        >
          {number}
        </div>

        {/* Subtitle */}
        <p className="font-mono text-paragraphtiny opacity-90 mb-5">
          {heading}
        </p>

        {/* Main Title */}
        <h2 className="text-subheading font-bold leading-tight">{title}</h2>
      </div>
      <div className="flex flex-col items-center justify-center text-center m-10">
        <p className="text-[20px] text-primary2 w-3/4 font-mono">
          {bottomText}
        </p>
        <div className="border-t-2 w-3/4 border-[#022B49] mx-auto m-5" />
        <p className="text-paragraphmedium text-[#022B49] font-semibold">
          {bottomNumber}
        </p>
        <p className="text-[15px] text-[#022B49]">{bottomText2}</p>
      </div>
    </div>
  );
};

export default Box;
