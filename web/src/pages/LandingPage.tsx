import React from "react";
import NavBar from "../components/NavBar";
import Title from "../components/typography/Title";
import SubHeading from "../components/typography/SubHeading";
import CTAButton from "../components/ui/CTAButton";
import Divider from "../components/ui/Divider";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="flex w-screen justify-center p-5">
        <NavBar />
      </div>
      <div className="flex h-screen flex-col w-screen justify-center items-center text-center ">
        <div className="w-1/2 m-10">
          <Title>YOUR AI HABITS HAVE A COST.</Title>
        </div>
        <div className="w-2/3 m-5">
          <SubHeading>SEE YOUR IMPACT WITH ARTIFICIAL INTELLIGENCE</SubHeading>
        </div>
        <div className="mt-20">
          <CTAButton>GET TO WRAPPING</CTAButton>
        </div>
        <Divider />
      </div>
    </>
  );
};

export default LandingPage;
