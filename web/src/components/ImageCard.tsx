import React from "react";
import CardTitle from "./typography/CardTitle";

interface ImageCardProps {
  imgSrc: string;
  title: string;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imgSrc, title, className }) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="w-[365px] h-[365px] bg-[#D9D9D9] rounded-[23px] overflow-hidden flex items-center justify-center">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
      </div>

      <CardTitle className="m-10">{title}</CardTitle>
    </div>
  );
};

export default ImageCard;
