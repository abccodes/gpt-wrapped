import React from "react";
import { Button } from "@/components/ui/button";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 flex gap-4">
      <Button
        variant="outline"
        className="border-black rounded-[36.5px] px-6 py-2 text-lg font-medium hover:bg-gray-100"
      >
        Learn More
      </Button>
      <Button
        variant="outline"
        className="border-black rounded-[36.5px] px-6 py-2 text-lg font-medium hover:bg-gray-100"
      >
        About Us
      </Button>
    </nav>
  );
};

export default NavBar;
