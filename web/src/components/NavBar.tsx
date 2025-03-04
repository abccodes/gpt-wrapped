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
        <Button
          variant="outline"
          className="border-[#022B49] text-[#022B49] rounded-[36.5px] px-20 py-6   hover:bg-gray-100"
          onClick={scrollToLearnMore}
        >
          <ParagraphTiny>LEARN MORE</ParagraphTiny>
        </Button>
      </div>
      <div>
        <Button
          variant="outline"
          className="border-[#022B49] text--[#022B49] rounded-[36.5px] px-20 py-6  hover:bg-gray-100"
          onClick={scrollToAboutUs}
        >
          <ParagraphTiny>HOW IT WORKS</ParagraphTiny>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
