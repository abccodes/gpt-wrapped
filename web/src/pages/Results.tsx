import React, { useEffect } from "react";
import HomeButton from "../components/ui/HomeButton";
import Title from "../components/typography/Title";
import Folder from "../components/Folder";
import { useData } from "../context/DataContext";
import electricSound from "../assets/Electricity Sound Effect xd (Thx for 1M Views!).mp3";
import carbonSound from "../assets/COW SOUND 'MOO' IN HIGH QUALITY.mp3";
import waterSound from "../assets/water dripping sound effect.mp3";

const Results: React.FC = () => {
  const { highestDay, highestMonth, highestYear } = useData();

  useEffect(() => {
    console.log(highestDay, highestMonth, highestYear);
  });

  const playSound = (type: string) => {
    let sound;
    switch (type) {
      case "Electric":
        sound = new Audio(electricSound);
        break;
      case "C02":
        sound = new Audio(carbonSound);
        break;
      case "Water":
        sound = new Audio(waterSound);
        break;
      default:
        return;
    }
    sound.play();
  };

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
          <h1 className="text-paragraphlarge font-mono font-semibold text-primary2 ">
            YOUR FOLDERS
          </h1>
          <div className="border-t-2 border-primary2 w-3/4 mx-auto my-5" />{" "}
          <p className="text-paragraphsmall  font-thin font-mono text-primary2 w-2/3">
            HERE LIVES A LIBRARY OF YOUR CHATGPT IMPACT
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-8 m-20">
        <Folder
          title="ELECTRICITY"
          startDate="3.2.23"
          endDate="12.20.24"
          backgroundColor="bg-gradients-wrapped-2"
          type="Electric"
          // onClick={() => playSound("Electric")}
        />{" "}
        <Folder
          title="CARBON EMISSIONS"
          startDate="3.2.23"
          endDate="12.20.24"
          backgroundColor="bg-gradients-wrapped-1"
          type="C02"
          // onClick={() => playSound("C02")}
        />
        <Folder
          title="FRESH WATER"
          startDate="3.2.23"
          endDate="12.20.24"
          backgroundColor="bg-gradients-wrapped-3"
          type="Water"
          // onClick={() => playSound("Water")}
        />
      </div>
    </div>
  );
};

export default Results;
