import React from "react";
import SubTitle from "../components/typography/SubTitle";
import SubHeading from "../components/typography/Heading";
import ParagraphMedium from "../components/typography/ParagraphMedium";
import Divier from "../components/ui/Divider";
import HomeButton from "../components/ui/HomeButton";
import Title from "../components/typography/Title";
import DarkBlueFolder from "../assets/darkbluefolder.svg";
import LightBlueFolder from "../assets/lightbluefolder.svg";
import GreenFolder from "../assets/greenfolder.svg";
import Folder from "../components/Folder";

const Results: React.FC = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <div className="flex w-full p-20 mb-20 ">
        <HomeButton />
      </div>
      <div className="flex flex-row mt-20 mb-40 mx-40">
        <div className="w-1/2">
          <Title>HERE ARE YOUR IMPACT FOLDERS!</Title>
        </div>
        <div className="flex flex-col items-center justify-center text-center w-1/3 ml-40">
          <h1 className="text-heading font-regular text-[#022B49] ">
            YOUR FOLDERS
          </h1>
          <div className="border-t-2 border-black w-full mx-auto my-2.5" />{" "}
          <p className="text-paragraphmedium font-thin text-[#022B49]">
            HERE LIVES A LIBRARY OF YOUR CHATGPT IMPACT
          </p>
        </div>
      </div>
      <div className="w-full justify-center align-middle grid grid-cols-3 m-20">
        <Folder
          title="CARBON EMISSIONS"
          startDate="3.2.23"
          endDate="12.20.24"
          backgroundColor="bg-gradients-wrapped-1"
          type="C02"
        />
        <Folder
          title="ELECTRICITY"
          startDate="3.2.23"
          endDate="12.20.24"
          backgroundColor="bg-gradients-wrapped-2"
          type="Electric"
        />
        <Folder
          title="FRESH WATER"
          startDate="3.2.23"
          endDate="12.20.24"
          backgroundColor="bg-gradients-wrapped-3"
          type="Water"
        />
      </div>
    </div>
  );
};

export default Results;
