import React from "react";
import NavBar from "../components/NavBar";
import { Button } from "@/components/ui/button";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="flex w-screen justify-center p-5">
        <NavBar />
      </div>
      <div className="flex flex-col h-screen w-screen align-top justify-center items-center">
        <h1>chatwrapped</h1>
        <h2>upload gpt data</h2>
      </div>
    </>
  );
};

export default LandingPage;
