import React from "react";
import CardTitle from "./typography/CardTitle";
import ParagraphSmall from "./typography/ParagraphSmall";

interface ImageCardProps {
  imgSrc: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
  content: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imgSrc,
  title,
  className,
  content,
  style,
}) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div
        style={style}
        className="w-[365px] h-[365px] bg-[#D9D9D9] rounded-[23px] overflow-hidden flex items-center justify-center"
      >
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="w-[400px] flex flex-col text-center">
        {" "}
        <CardTitle className="mt-10 mb-5">{title}</CardTitle>
        <ParagraphSmall className="w-7/8">{content}</ParagraphSmall>
      </div>
    </div>
  );
};

export default ImageCard;
