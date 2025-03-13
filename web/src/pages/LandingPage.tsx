import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/typography/Title";
import CTAButton from "../components/ui/CTAButton";
import SubHeading from "../components/typography/SubHeading";
import Card from "../components/ui/Card";
// import FeatureIcon from "../components/FeatureIcon";
import { Link } from "react-router-dom";
import HomeButton from "../components/ui/HomeButton";
import LeftToRightBanner from "../components/BannerLeftToRight";
import RightToLeftBanner from "../components/BannerRightToLeft";
import Logo from "../assets/logo.svg";
import BackgroundWave from "../assets/backgroundwave.svg";
import DarkBlueCircle from "../assets/darkbluecircle.svg";
import LightBlueCircle from "../assets/lightbluecircle.svg";
import GreenCircle from "../assets/greencircle.svg";
import GPT from "../assets/gpt.svg";
// import Trash from "../assets/trash.svg";
// import File from "../assets/files.svg";
// import Lock from "../assets/lock.svg";
import GroupIcons from "../assets/groupicons.svg";
import BottomBackgroundCircle from "../assets/bottombackgroundcircle.svg";
import GreenArrowIcon from "../assets/greenarrowicon.svg";
import LightBlueArrowIcon from "../assets/lightbluearrowicon.svg";
import DarkBlueArrowIcon from "../assets/darkbluearrowicon.svg";

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
      <div className="flex flex-row w-screen p-10 mt-2.5 ">
        <div className="flex flex-col justify-center items-center text-left w-3/5">
          <div className="mt-20">
            <p className="text-paragraphsmall font-mono text-primary2 mb-10 ">
              HI, WE'RE CHATWRAPPED
            </p>
            <Title className="mb-10">
              WE WE READ YOUR CHAT DATA IN RESOURCES.
            </Title>
          </div>
          <div>
            <p className="mb-20 w-3/4 text-primary2 text-paragraphmedium font-thin">
              See your usage of CHAT GPT in both natural & secondary resources.
              Learn more about the cost of AI.
            </p>
            <Link to="/upload" className="mb-10">
              <CTAButton>
                <p className="font-bold">GET TO WRAPPING </p>
              </CTAButton>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center w-2/5 mt-20">
          <img src={Logo} alt="AI Impact" className="w-full h-[50vh] mb-20" />

          <p className="text-paragraphsmall font-thin font-mono text-primary2">
            YOUR IMPACT IN 3 LAYERS
          </p>
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
        <Title className="mt-10 mb-5">YOUR USE OF CHAT IN RESOURCES</Title>
        <SubHeading>
          We Calculate Your Chat GPT Usage 3 Resource Variables
        </SubHeading>
        <div className="flex gap-6 m-20 mb-40">
          <Card
            gradient="bg-gradients-wrapped-3"
            title="GPT IN ELECTRICITY"
            content="Watts"
            content2="Every query uses around 0.3 Wh of energy"
            number={1}
            src={LightBlueArrowIcon}
          />
          <Card
            gradient="bg-gradients-wrapped-1"
            title="GPT IN CO2 EMISSIONS"
            content="Grams
"
            content2="Every query emits around 4.32 g of CO₂"
            number={2}
            src={DarkBlueArrowIcon}
          />
          <Card
            gradient="bg-gradients-wrapped-2"
            title="GPT IN FRESH WATER"
            content="Milliliters"
            content2="Every query uses around 10 mL of water"
            number={3}
            src={GreenArrowIcon}
          />
        </div>
        <div className="flex m-10 w-full flex-col justify-center items-center text-center">
          <p className="text-paragraphmedium font-thin text-primary2 font-mono mt-20">
            IT'S IMPORTANT TO KNOW YOUR PERSONAL IMPACT
          </p>
          <h1 className="text-title font-semibold text-primary2 mr-60 ml-60 mt-10">
            LET US EXPLAIN MORE ABOUT HOW CHAT USES RESOURCES
          </h1>
          <div className="relative w-full -mt-10">
            <img
              src={BackgroundWave}
              alt="Wave Divider"
              className="block w-full mb-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full flex flex-row ">
                <div className="mb-40 flex flex-col items-center text-center p-5 w-1/3">
                  {/* Negative top margin to shift the circle up by half its height */}
                  <img src={LightBlueCircle} alt="Circle Icon" className="" />
                  <p className="mt-10 text-paragraphmedium font-semibold text-white">
                    CO2 EMISSIONS
                  </p>
                  <p className="tracking-[0.02em] text-paragraphtiny font-thin text-white w-2/3 mt-10">
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
                  <p className="tracking-[0.02em] text-paragraphtiny font-thin text-white w-2/3 mt-10">
                    ChatGPT relies on high-energy servers, demanding electricity
                    for processing and storage.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-5 w-1/3">
                  <img src={GreenCircle} alt="Circle Icon" className="" />

                  <p className="mt-10 text-paragraphmedium font-semibold text-white">
                    FRESHWATER
                  </p>
                  <p className="tracking-[0.02em] text-paragraphtiny font-thin text-white w-2/3 mt-10">
                    Significant water is required to cool and keep systems at
                    optimal temperatures to maintain efficiency and prevent
                    overheating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col justify-center items-center text-center -mt-40">
          <Title>WHAT WE DO FOR YOU</Title>
          <p className="text-paragraphlarge font-thin text-primary2 m-10 ml-40 mr-40">
            We unwrap the environmental impact of your AI usage with  ChatGPT
            Impact Tracker. Analyze your conversations and discover the top 3
            responses with the highest carbon, water, electricity.
          </p>
          <div className="flex flex-row w-full mt-10 pb-40">
            <div className="flex flex-col w-1/2 ml-20">
              <img src={GPT} alt="GPT" className="w-full h-[70vh] mt-20" />
            </div>{" "}
            <div className="flex flex-col items-center justify-center w-1/2 mr-20">
              <p className="font-mono mb-10 text-paragraphlarge font-thin text-primary2">
                LUCKY YOU!
              </p>
              <h2 className="mb-10 text-heading font-regular text-primary2">
                IT'S 4 SUPER EASY STEPS
              </h2>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-[61px] h-[61px] bg-[#022B49] font-mono text-white text-paragraphmedium rounded-full">
                    1
                  </div>
                  <p className="text-paragraphmedium font-thin text-primary2">
                    Log into your CHATGPT account
                  </p>{" "}
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-[61px] h-[61px] bg-[#022B49] font-mono text-white text-paragraphmedium rounded-full">
                    2
                  </div>
                  <p className="text-paragraphmedium font-thin text-primary2">
                    Go to settings & download your data
                  </p>{" "}
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-[61px] h-[61px] bg-[#022B49] font-mono text-white text-paragraphmedium rounded-full">
                    3
                  </div>
                  <p className="text-paragraphmedium font-thin text-primary2">
                    Check your email for export link
                  </p>{" "}
                </div>{" "}
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-[61px] h-[61px] bg-[#022B49] font-mono text-white text-paragraphmedium rounded-full">
                    4
                  </div>
                  <p className="text-paragraphmedium font-thin text-primary2">
                    Drop data on our directions page
                  </p>{" "}
                </div>
              </div>
              <div>
                <Link to="/upload">
                  <CTAButton className="mt-10">
                    <p className="font-bold">GET TO WRAPPING</p>
                  </CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
        <div
          ref={aboutUsRef}
          className="relative flex w-full flex-col justify-center items-center text-center pt-20 mt-20 pb-20 bg-gradients-wrapped-1 overflow-hidden"
        >
          {/* Background Image - Ensure it appears over the div background */}
          <img
            src={BottomBackgroundCircle}
            alt="Group Circle"
            className="absolute bottom-0 right-0 w-2/5 object-cover z-0"
          />

          {/* Content Above Background Image */}
          <p className="text-title font-semibold mt-10 text-white relative z-10">
            YOUR DATA'S SAFE WITH US
          </p>
          <p className="text-paragraphlarge font-thin text-white w-2/3 mb-10 mt-10 relative z-10">
            We delete your data in real time with zero data retention or
            encryption. Chat Wrapped is completely safe and easy!
          </p>
          <div className="flex w-full justify-center items-center mt-10 relative z-10">
            <img
              src={GroupIcons}
              alt="Group Icons"
              className="w-full h-[30vh]"
            />
          </div>
        </div>
        {/* <div className="flex w-full justify-center items-center mt-6 gap-x-10"> */}
        {/* <div className="flex justify-end w-1/4">
              <FeatureIcon imgSrc={Lock} title="END TO END ENCRYPTION" />
            </div>
            <div className="flex justify-center w-1/4">
              <FeatureIcon imgSrc={File} title="NO DATA RETENTION" />
            </div>
            <div className="flex justify-start w-1/4">
              <FeatureIcon imgSrc={Trash} title="INSTANT DELETION" />
            </div> */}
      </div>
    </div>
  );
};

export default LandingPage;
