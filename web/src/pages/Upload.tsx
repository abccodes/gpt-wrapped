import React, { useEffect, useRef } from "react";
import HomeButton from "../components/ui/HomeButton";
import Divider from "../components/ui/Divider";
import RightToLeftBannerLight from "@/components/BannerRightToLeftLight";
import UploadCircles from "../assets/uploadcircles.svg";
import CTAButton from "../components/ui/CTAButton";
import ZipUpload from "../components/ZipUpload";
import gpthome from "../assets/gpthome.png";
import datacontrols from "../assets/datacontrols.png";
import gptemail from "../assets/gptemail.png";

const Tutorial: React.FC = () => {
  const loginSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToDirections = () => {
    if (loginSectionRef.current) {
      loginSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <h2 className="text-paragraphlarge text-white mb-10 -mt-36 font-mono">
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
          <CTAButton className="mt-20 mb-20" onClick={handleScrollToDirections}>
            SEE DIRECTIONS
          </CTAButton>
        </div>
      </div>
      <div className="pt-20 bg-gradients-wrapped-5 bg-opacity-80">
        <div
          ref={loginSectionRef}
          className="flex flex-row w-full justify-center items-center text-center px-20"
        >
          <div className="m-20 flex flex-col items-start text-left w-1/2">
            <div className="w-32 h-32 bg-gradients-wrapped-1 text-white rounded-full flex items-center justify-center shadow-lg mb-10">
              <p className="text-heading font-thin font-mono">1</p>
            </div>
            <p className="text-heading font-regular text-white">
              Log in to your{" "}
              <a
                href="https://chatgpt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white"
              >
                ChatGPT
              </a>{" "}
              account.
            </p>
          </div>

          <div className="w-1/2 m-20">
            <img
              src={gpthome}
              alt="gpthome"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <Divider />

        <div className="flex flex-row w-full justify-center items-center text-center px-20 mt-20">
          <div className="m-20 flex flex-col items-start text-left w-1/2">
            <div className="w-32 h-32 bg-gradients-wrapped-1 text-white rounded-full flex items-center justify-center shadow-lg mb-10">
              <p className="text-heading font-thin font-mono">2</p>
            </div>
            <p className="text-heading font-regular text-white">
              Go to: Settings &gt; Data Controls &gt; Export Data
            </p>
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
            <div className="w-32 h-32 bg-gradients-wrapped-1 text-white rounded-full flex items-center justify-center shadow-lg mb-10">
              <p className="text-heading font-thin font-mono">3</p>
            </div>
            <p className="text-heading font-regular text-white">
              Check your email for the export link & download your data.
            </p>
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
          <div className="m-20 flex flex-col items-start text-left w-1/2">
            <div className="w-32 h-32 bg-gradients-wrapped-1 text-white rounded-full flex items-center justify-center shadow-lg mb-10">
              <p className="text-heading font-thin font-mono">4</p>
            </div>

            <p className="text-heading font-regular text-white">
              Upload your zip file!
            </p>
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
