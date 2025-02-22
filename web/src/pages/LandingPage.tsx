import React from "react";
import NavBar from "../components/NavBar";
import Title from "../components/typography/Title";
import SubHeading from "../components/typography/SubHeading";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="flex w-screen justify-center p-5">
        <NavBar />
      </div>
      <div className="flex flex-col h-screen w-screen justify-center items-center text-center">
        <Title>YOUR AI HABITS HAVE A COST</Title>
        <SubHeading>SEE YOUR IMPACT WITH ARTIFICIAL INTELLIGENCE</SubHeading>
      </div>
    </>
  );
};

export default LandingPage;
