import React, { useState } from "react";
import Divider from "./Divider";
import CardTitle from "../typography/CardTitle";
import ParagraphSmall from "../typography/ParagraphSmall";

interface CardProps {
  title: string;
  content: string;
  className?: string;
  style?: React.CSSProperties;
  gradient?: string;
  number?: number;
  src: string;
  content2?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  className = "",
  style,
  gradient = "",
  number,
  src,
  content2,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Main Card (Always 100% Opacity) */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center w-[429px] pb-20 pt-20 rounded-[47px] ${gradient} ${className} opacity-100`}
        style={style}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col items-start justify-start h-full">
          <p className="font-mono text-paragraphsmall font-thin text-white mb-5">
            VARIABLE NO.{number}
          </p>
          <p className="text-white text-cardtitle font-semibold">{title}</p>
        </div>
      </div>

      {/* Expanding Content: behind the blue card */}
      <div
        className={`${gradient} absolute left-0 w-[429px] transition-all duration-300 ease-in-out z-0 rounded-b-[47px] ${
          isExpanded ? "opacity-70 p-6 -mt-20" : "max-h-0 opacity-0"
        } relative`}
      >
        {/* Background Circle Container */}
        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 w-20 h-20 border-8 border-white rounded-[50px] flex justify-center items-center overflow-hidden">
          <img
            src={src}
            alt="Group Circle"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex mt-20 m-5 text-paragraphsmall text-white text-left relative z-10">
          <p className="font-semibold">Measurement: </p>
          <p className="ml-2">{content}</p>
        </div>
        <div className="mt-5 m-5 text-paragraphsmall text-white text-left relative z-10">
          <p>
            <span className="font-semibold">For GPT-3.0</span>: {content2}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
