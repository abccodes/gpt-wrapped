import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/typography/Title";
import Heading from "../components/typography/Heading";
import CTAButton from "../components/ui/CTAButton";
import Divider from "../components/ui/Divider";
import SubTitle from "../components/typography/SubTitle";
import SubHeading from "../components/typography/SubHeading";
import Card from "../components/ui/Card";
import ImageCard from "../components/ImageCard";
import TeritaryHeading from "../components/typography/TertiaryHeading";
import ParagraphLarge from "../components/typography/ParagraphLarge";
import { ArrowUpRight } from "lucide-react";
import FeatureIcon from "../components/FeatureIcon";
import { Link } from "react-router-dom";
import HomeButton from "../components/ui/HomeButton";
import LeftToRightBanner from "../components/BannerLeftToRight";
import RightToLeftBanner from "../components/BannerRightToLeft";
import ParagraphSmall from "@/components/typography/ParagraphSmall";
import Logo from "../assets/logo.svg";
import ParagraphMedium from "@/components/typography/ParagraphMedium";
import BackgroundWave from "../assets/backgroundwave.svg";
import DarkBlueCircle from "../assets/darkbluecircle.svg";
import LightBlueCircle from "../assets/lightbluecircle.svg";
import GreenCircle from "../assets/greencircle.svg";

const LandingPage: React.FC = () => {
  const learnMoreRef = useRef<HTMLDivElement>(null!);
  const aboutUsRef = useRef<HTMLDivElement>(null!);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen overflow-hidden">
      <div className="flex w-screen justify-center p-5 m-10">
        <HomeButton />
        <NavBar
          scrollToLearnMore={() => handleScroll(learnMoreRef)}
          scrollToAboutUs={() => handleScroll(aboutUsRef)}
        />
      </div>
      <div>
        <LeftToRightBanner />
      </div>
      <div className="flex flex-row w-screen p-10">
        <div className="flex flex-col justify-center items-center text-left w-3/5">
          <div className="mt-20">
            <ParagraphSmall className="mb-10 ">
              HI, WE'RE CHATWRAPPED
            </ParagraphSmall>
            <Title className="mb-10">
              WE WE READ YOUR CHAT DATA IN RESOURCES.
            </Title>
          </div>
          <div>
            <ParagraphMedium className="mb-20 w-3/4">
              See your usage of CHAT GPT in both natural & secondary resources.
              Learn more about the cost of AI.
            </ParagraphMedium>
            <Link to="/upload" className="mb-10">
              <CTAButton>
                <p className="font-bold">GET TO WRAPPING </p>
                <ArrowUpRight />
              </CTAButton>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center w-2/5 ">
          <img src={Logo} alt="AI Impact" className="w-full h-[50vh] mb-20" />

          <ParagraphSmall>YOUR IMPACT IN 3 LAYERS</ParagraphSmall>
        </div>
      </div>
      <div className="mt-20 mb-20">
        {" "}
        <RightToLeftBanner />
      </div>
      <div
        ref={learnMoreRef}
        className="flex flex-col justify-center items-center text-center"
      >
        <Title className=" mb-5">YOUR USE OF CHAT IN RESOURCES</Title>
        <SubHeading>
          We Calculate Your Chat GPT Usage 3 Resource Variables
        </SubHeading>
        <div className="flex gap-6 m-20 mb-40">
          <Card
            gradient="bg-gradients-wrapped-3"
            title="GPT IN ELECTRICITY"
            content="ChatGPT relies on high-energy servers, demanding electricity for processing and storage."
            number={1}
          />
          <Card
            gradient="bg-gradients-wrapped-1"
            title="GPT IN CO2 EMISSIONS"
            content="ChatGPT relies on high-energy servers, demanding electricity for processing and storage."
            number={2}
          />
          <Card
            gradient="bg-gradients-wrapped-2"
            title="GPT IN FRESH WATER"
            content="ChatGPT relies on high-energy servers, demanding electricity for processing and storage."
            number={3}
          />
        </div>
        <div className="flex m-10 w-full flex-col justify-center items-center text-center">
          <ParagraphMedium>
            IT'S IMPORTANT TO KNOW YOUR PERSONAL IMPACT
          </ParagraphMedium>
          <Title className=" mr-40 ml-40 mt-10">
            LET US EXPLAIN MORE ABOUT HOW CHAT USES RESOURCES
          </Title>
          <div className="relative w-full mt-20">
            <img
              src={BackgroundWave}
              alt="Wave Divider"
              className="block w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full flex flex-row ">
                <div className="flex flex-col items-center text-center p-5 w-1/3">
                  <img src={LightBlueCircle} alt="Wave Divider" className="" />
                  <p className="text-paragraphmedium font-semibold text-white">
                    CO2 EMISSIONS
                  </p>
                  <p className="text-paragraphtiny font-thin text-white w-2/3 mt-10">
                    Due to the large amounts of computing power that LLMs
                    require, electricity often comes from power plants that burn
                    fossil fuels, which releases C02 emissions.{" "}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-5 w-1/3">
                  {" "}
                  <p className="text-paragraphmedium font-semibold text-white">
                    ELECTRICITY
                  </p>
                  <p className="text-paragraphtiny font-thin text-white w-2/3 mt-10">
                    ChatGPT relies on high-energy servers, demanding electricity
                    for processing and storage.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-5 w-1/3">
                  {" "}
                  <p className="text-paragraphmedium font-semibold text-white">
                    FRESHWATER
                  </p>
                  <p className="text-paragraphtiny font-thin text-white w-2/3 mt-10">
                    Significant water is required to cool and keep systems at
                    optimal temperatures to maintain efficiency and prevent
                    overheating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col justify-center items-center text-center">
          <SubTitle className="w-2/3 mn-10">HOW WE MAKE IT HAPPEN</SubTitle>
          <TeritaryHeading className="m-5">IT'S 3 EASY STEPS</TeritaryHeading>
          <ParagraphLarge className="w-4/6 mt-10">
            Unwrap the environmental impact of your AI usage with ChatGPT Impact
            Tracker. Analyze your conversations and discover the top 3 responses
            with the highest carbon, water, electricity, and gas costs. This
            tool empowers users to make informed, eco-conscious decisions about
            their AI interactions.{" "}
          </ParagraphLarge>
          <Divider />
        </div>{" "}
        <div
          ref={aboutUsRef}
          className="flex w-full flex-col justify-center items-center text-center mb-20"
        >
          <CTAButton>ABSOLUTELY NO NEED TO FRET</CTAButton>
          <SubTitle className="m-10">YOUR DATA'S SAFE WITH US</SubTitle>
          <div className="flex w-full justify-center items-center mt-6">
            <div className="flex-1 flex justify-end">
              <FeatureIcon title="END-TO-END ENCRYPTION" />
            </div>
            <div className="flex-1 flex justify-center">
              <FeatureIcon title="NO DATA RETENTION" />
            </div>
            <div className="flex-1 flex justify-start">
              <FeatureIcon title="INSTANT DELETION" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
