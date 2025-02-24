import React from "react";
import SubTitle from "../components/typography/SubTitle";
import SubHeading from "../components/typography/Heading";
import ParagraphMedium from "../components/typography/ParagraphMedium";
import Divier from "../components/ui/Divider";
import HomeButton from "../components/ui/HomeButton";

const Results: React.FC = () => {
  return (
    <>
      <div className="flex w-full p-20 mb-20 ">
        <HomeButton />
      </div>
      <div className="flex flex-row">
        <SubTitle>HERE ARE YOUR IMPACT FOLDERS!</SubTitle>
        <div className="flex flex-col">
          <SubHeading>YOUR FOLDERS</SubHeading>
          <Divier />
          <ParagraphMedium>
            HERE LIVES A LIBRARY OF YOUR CHATGPT IMPACT
          </ParagraphMedium>
        </div>
      </div>
      <div className="flex flex-row">
        <div>folder 1</div>
        <div>folder 2</div>
        <div>folder 3</div>
      </div>
    </>
  );
};

export default Results;
