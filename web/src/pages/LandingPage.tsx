import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/typography/Title";
import Heading from "../components/typography/Heading";
import CTAButton from "../components/ui/CTAButton";
import SubHeading from "../components/typography/SubHeading";
import Card from "../components/ui/Card";
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
import GPT from "../assets/gpt.svg";

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
          <Title className=" mr-40 ml-40 mt-10 mb-20">
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
                <div className="mb-40 flex flex-col items-center text-center p-5 w-1/3">
                  {/* Negative top margin to shift the circle up by half its height */}
                  <img src={LightBlueCircle} alt="Circle Icon" className="" />
                  <p className="mt-10 text-paragraphmedium font-semibold text-white">
                    CO2 EMISSIONS
                  </p>
                  <p className="text-paragraphtiny font-thin text-white w-2/3 mt-10">
                    Due to the large amounts of computing power that LLMs
                    require, electricity often comes from power plants that burn
                    fossil fuels, which releases CO2 emissions.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-5 w-1/3">
                  <img src={DarkBlueCircle} alt="Circle Icon" className="" />

                  <p className="mt-10 text-paragraphmedium font-semibold text-white">
                    ELECTRICITY
                  </p>
                  <p className="text-paragraphtiny font-thin text-white w-2/3 mt-10">
                    ChatGPT relies on high-energy servers, demanding electricity
                    for processing and storage.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-5 w-1/3">
                  <img src={GreenCircle} alt="Circle Icon" className="" />

                  <p className="mt-10 text-paragraphmedium font-semibold text-white">
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
          <Title className="w-2/3 mt-20">WHAT WE DO FOR YOU</Title>
          <ParagraphLarge className="w-2/3 mt-10">
            We unwrap the environmental impact of your AI usage with  ChatGPT
            Impact Tracker. Analyze your conversations and discover the top 3
            responses with the highest carbon, water, electricity.
          </ParagraphLarge>
          <div className="flex flex-row w-full mt-10 pb-40">
            <div className="flex flex-col w-1/2 ml-20">
              <img src={GPT} alt="GPT" className="w-full h-[70vh] mt-20" />
            </div>{" "}
            <div className="flex flex-col items-center justify-center w-1/2 mr-20">
              <ParagraphLarge className="mb-10">LUCKY YOU!</ParagraphLarge>
              <Heading className="mb-10">IT'S 4 SUPER EASY STEPS</Heading>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-[61px] h-[61px] bg-[#022B49] font-mono text-white text-paragraphmedium rounded-full">
                    1
                  </div>
                  <ParagraphMedium>
                    Log into your CHATGPT account
                  </ParagraphMedium>{" "}
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-[61px] h-[61px] bg-[#022B49] font-mono text-white text-paragraphmedium rounded-full">
                    2
                  </div>
                  <ParagraphMedium>
                    Go to settings & download your data
                  </ParagraphMedium>{" "}
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-[61px] h-[61px] bg-[#022B49] font-mono text-white text-paragraphmedium rounded-full">
                    3
                  </div>
                  <ParagraphMedium>
                    Check your email for export link
                  </ParagraphMedium>{" "}
                </div>{" "}
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-[61px] h-[61px] bg-[#022B49] font-mono text-white text-paragraphmedium rounded-full">
                    4
                  </div>
                  <ParagraphMedium>
                    Drop data on our directions page
                  </ParagraphMedium>{" "}
                </div>
              </div>
              <div>
                <Link to="/upload">
                  <CTAButton className="mt-10">
                    <p className="font-bold">GET TO WRAPPING</p>
                    <ArrowUpRight />
                  </CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
        <div
          ref={aboutUsRef}
          className="flex w-full flex-col justify-center items-center text-center pt-20 pb-20 bg-gradients-wrapped-1"
        >
          <p className="text-title font-semibold m-10 text-white">
            YOUR DATA'S SAFE WITH US
          </p>
          <div className="flex w-full justify-center items-center mt-6 gap-x-10">
            <div className="flex justify-end w-1/4">
              <FeatureIcon title="END TO END ENCRYPTION" />
            </div>
            <div className="flex justify-center w-1/4">
              <FeatureIcon title="NO DATA RETENTION" />
            </div>
            <div className="flex justify-start w-1/4">
              <FeatureIcon title="INSTANT DELETION" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
