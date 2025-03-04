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

const LandingPage: React.FC = () => {
  const learnMoreRef = useRef<HTMLDivElement>(null!);
  const aboutUsRef = useRef<HTMLDivElement>(null!);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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
        <div className="flex mt-10 w-full flex-col justify-center items-center text-center">
          <SubTitle>WHY YOUR IMPACT MATTERS</SubTitle>
          <div className="flex gap-6 mt-20">
            <ImageCard
              imgSrc="/images/electricity.jpg"
              title="HOW CHAT USES ELECTRICITY"
              content="ChatGPT relies on high-energy servers, demanding electricity for processing and storage."
              style={{ transform: "rotateZ(-5deg)" }}
            />
            <ImageCard
              imgSrc="/images/co2.jpg"
              title="HOW CHAT USES CO2 EMISSIONS"
              content="Cooling AI Data centers powering ChatGPT generate carbon emissions from electricity and cooling systems."
            />
            <ImageCard
              imgSrc="/images/water.jpg"
              title="HOW CHAT CONSUMES FRESHWATER"
              content="Cooling AI servers consumes fresh water to prevent overheating and maintain efficiency."
              style={{ transform: "rotateZ(5deg)" }}
            />
          </div>
          <Divider />
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
    </>
  );
};

export default LandingPage;
