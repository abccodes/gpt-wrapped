import React, { useRef } from "react";
import Title from "../components/typography/Title";
import CTAButton from "../components/ui/CTAButton";
import ResultsBox from "../components/ResultsBox";
import BackButton from "../components/BackButton";
import html2canvas from "html2canvas";

const CO2: React.FC = () => {
  const screenshotRef = useRef<HTMLDivElement | null>(null);

  const handleShare = async () => {
    if (screenshotRef.current) {
      // Wait a short time to ensure fonts & images are loaded
      await new Promise((resolve) => setTimeout(resolve, 500));

      const canvas = await html2canvas(screenshotRef.current, {
        scale: window.devicePixelRatio, // Improves clarity
        useCORS: true, // Fixes image loading issues
        backgroundColor: "#ffffff", // Ensures background is captured
        removeContainer: false, // Prevents loss of styles
        logging: false, // Removes console warnings
      });

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "screenshot.png";
      link.click();
    }
  };
  return (
    <div
      className="w-screen min-h-screen overflow-x-hidden "
      ref={screenshotRef}
    >
      <div className="flex w-full p-20  ">
        <BackButton />
      </div>
      <div className="flex flex-row mb-20 mx-20">
        <div className="w-2/3">
          <Title>YOU DROVE FOR 10 HOURS... YIKES</Title>
        </div>
        <div className="flex flex-col items-center justify-center text-center w-2/4 ml-40">
          <h1 className="text-paragraphmedium font-mono font-semibold text-[#022B49] ">
            GPT IN CARBON EMISSIONS
          </h1>
          <div className="border-t-2 border-primary2 w-2/3 mx-auto m-5" />{" "}
          <CTAButton onClick={handleShare}>
            <p className="font-bold">SHARE THIS</p>
          </CTAButton>
        </div>
      </div>
      <div className="pl-10 pr-10 w-full flex flex-row justify-center align-middle">
        <ResultsBox
          heading="ON TUESDAY MORNING"
          title="YOU DROVE THE KIDS TO SCHOOL"
          number="1"
          color="bg-gradients-wrapped-1"
          bottomNumber="2 HOURS"
          bottomText="YOU DROVE YOUR KID TO SOCCER PRACTICE AND BACK"
          bottomText2="OF USING A VEHICLE"
        />
        <ResultsBox
          heading="IN THE MONTH OF MARCH"
          title="YOU FIRED UP THE BBQ GRILL"
          number="2"
          color="bg-gradients-wrapped-2"
          bottomNumber="5 HOURS"
          bottomText="YOU GRILLED UP STEAKS FOR THE WHOLE FAMILY"
          bottomText2="OF USING A VEHICLE"
        />
        <ResultsBox
          heading="OVER THE LAST YEAR YOU ASKED"
          title="THE MOST ABOUT ANALYZING DATA"
          number="3"
          color="bg-gradients-wrapped-3"
          bottomNumber="10 HOURS"
          bottomText="YOU BURNED THROUGH A WHOLE TANK OF GAS"
          bottomText2="OF USING A VEHICLE"
        />
      </div>
    </div>
  );
};

export default CO2;
