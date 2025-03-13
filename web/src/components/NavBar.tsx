import React from "react";
import { Button } from "@/components/ui/button";
import ParagraphTiny from "./typography/ParagraphTiny";

interface NavBarProps {
  scrollToLearnMore: () => void;
  scrollToAboutUs: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  scrollToLearnMore,
  scrollToAboutUs,
}) => {
  return (
    <div className="w-full flex justify-end items-center space-x-4 pr-10">
      {" "}
      <div>
        {" "}
        <button
          onClick={scrollToLearnMore}
          className={`pl-20 pr-20 pt-5 pb-5 flex text-center justify-center ${"bg-gradients-wrapped-1 hover:bg-[#3a3939]"} text-white border border-[#272626] rounded-full font-medium flex transition`}
        >
          <p className="text-paragraphtiny font-bold">LEARN MORE</p>
        </button>
      </div>
      <div>
        {" "}
        <button
          onClick={scrollToAboutUs}
          className={`pl-20 pr-20 pt-5 pb-5 flex text-center justify-center ${"bg-gradients-wrapped-1 hover:bg-[#3a3939]"} text-white border border-[#272626] rounded-full font-medium flex transition`}
        >
          <p className="text-paragraphtiny font-bold">ABOUT US</p>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
