import React from "react";
import Title from "../components/typography/Title";
import Heading from "../components/typography/Heading";
import HomeButton from "../components/ui/HomeButton";
import Divider from "../components/ui/Divider";
import TertiaryHeading from "../components/typography/TertiaryHeading";
import gpthome from "../assets/gpthome.png";
import datacontrols from "../assets/datacontrols.png";
import gptemail from "../assets/gptemail.png";
import ZipUpload from "../components/ZipUpload";
import Loading from "./Loading";

const Tutorial: React.FC = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <div className="flex w-full p-20 mb-20 ">
        <HomeButton />
      </div>
      <div className="flex flex-col w-full justify-center items-center text-center">
        <Title>HOW TO: CHAT WRAP</Title>
        <Heading>It's 4 Simple Steps</Heading>
      </div>
      <div className="flex flex-row w-full justify-center items-center text-center px-20 mt-20">
        <div className="m-20 flex flex-col items-start text-left w-1/2">
          <div className="w-32 h-32 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg mb-10">
            <TertiaryHeading>1</TertiaryHeading>
          </div>
          <Heading>
            Log in to your ChatGPT account at{" "}
            <a
              href="https://chatgpt.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ChatGPT.com
            </a>
          </Heading>
        </div>

        <div className="w-1/2 m-20">
          <img
            src={gpthome}
            alt="gpthome"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Divider />{" "}
      <div className="flex flex-row w-full justify-center items-center text-center px-20 mt-20">
        <div className="m-20 flex flex-col items-start text-left w-1/2">
          <div className="w-32 h-32 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg mb-10">
            <TertiaryHeading>2</TertiaryHeading>
          </div>
          <Heading>Go to: Settings &gt; Data Controls &gt; Export Data</Heading>
        </div>

        <div className="w-1/2 m-20">
          <img
            src={datacontrols}
            alt="gpthome"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Divider />
      <div className="flex flex-row w-full justify-center items-center text-center px-20 mt-20">
        <div className="m-20 flex flex-col items-start text-left w-1/2">
          <div className="w-32 h-32 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg mb-10">
            <TertiaryHeading>3</TertiaryHeading>
          </div>
          <Heading>
            Check your email for the export link & download your data.
          </Heading>
        </div>

        <div className="w-1/2 m-20">
          <img
            src={gptemail}
            alt="gpthome"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Divider />
      <div className="flex flex-row w-full justify-center items-stretch text-center px-20 mt-20 mb-20">
        <div className="m-10 flex flex-col justify-center items-start text-left w-1/2 h-80 ">
          <div className="w-32 h-32 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg mb-10">
            <TertiaryHeading>4</TertiaryHeading>
          </div>
          <Heading>Upload your zip file!</Heading>
        </div>

        <div className="m-10 flex flex-col items-start text-left w-1/2 h-80">
          <ZipUpload />
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
