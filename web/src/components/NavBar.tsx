import React from "react";
import { Button } from "@/components/ui/button";

interface NavBarProps {
  scrollToLearnMore: () => void;
  scrollToAboutUs: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  scrollToLearnMore,
  scrollToAboutUs,
}) => {
  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 flex gap-4">
      <Button
        variant="outline"
        className="border-black rounded-[36.5px] px-6 py-2 text-lg font-medium hover:bg-gray-100"
        onClick={scrollToLearnMore}
      >
        Learn More
      </Button>
      <Button
        variant="outline"
        className="border-black rounded-[36.5px] px-6 py-2 text-lg font-medium hover:bg-gray-100"
        onClick={scrollToAboutUs}
      >
        About Us
      </Button>
    </nav>
  );
};

export default NavBar;
