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
import RightToLeftBannerLight from "@/components/BannerRightToLeftLight";
import UploadCircles from "../assets/uploadcircles.svg";
import CTAButton from "../components/ui/CTAButton";

const Tutorial: React.FC = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <div className="flex flex-col justify-end h-60">
        <RightToLeftBannerLight />
      </div>
      <div className="w-screen bg-gradients-wrapped-4">
        <div className="flex w-full p-20 mb-20 ">
          <HomeButton />
        </div>
        <div className="flex flex-col w-full justify-center items-center text-center">
          <h2 className="text-heading font-regular text-white mb-10 -mt-36 font-mono">
            OUR 4 SIMPLE STEP GUIDE
          </h2>
          <h1 className="text-title font-semibold text-white">
            HOW TO: CHAT WRAP
          </h1>
          <img
            src={UploadCircles}
            alt="uploadcircles"
            className="w-2/3 h-2/3 mt-20"
          />
          <CTAButton className="mt-20 mb-20">SEE DIRECTIONS</CTAButton>
        </div>
      </div>
      <div
        className="pt-20"
        style={{
          background:
            "linear-gradient(to right, rgba(2, 43, 73, 0.7), rgba(38, 68, 89, 0.7))",
        }}
      >
        <div className="flex flex-row w-full justify-center items-center text-center px-20">
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
            <Heading>
              Go to: Settings &gt; Data Controls &gt; Export Data
            </Heading>
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
        <div className="flex flex-row w-full justify-center items-stretch text-center px-20 mt-20 pb-20">
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
    </div>
  );
};

export default Tutorial;
