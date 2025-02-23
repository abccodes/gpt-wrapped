import React from "react";
import Divider from "./Divider";
import CardTitle from "../typography/CardTitle";

interface CardProps {
  title: string;
  content: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, content, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-[429px] h-[453px] rounded-[47px] p-6 border-black border-2 ${className}`}
    >
      <div className="flex flex-col items-center justify-start h-full mt-10">
        {" "}
        <CardTitle>{title}</CardTitle>
        <Divider className="m-5" />
      </div>
    </div>
  );
};

export default Card;
