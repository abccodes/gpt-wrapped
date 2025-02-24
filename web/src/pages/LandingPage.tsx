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

const LandingPage: React.FC = () => {
  const learnMoreRef = useRef<HTMLDivElement>(null!);
  const aboutUsRef = useRef<HTMLDivElement>(null!);
  const homePageRef = useRef<HTMLDivElement>(null!);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex w-screen justify-center p-5 mb-20">
        <HomeButton />
        <NavBar
          scrollToLearnMore={() => handleScroll(learnMoreRef)}
          scrollToAboutUs={() => handleScroll(aboutUsRef)}
        />
      </div>
      <div className="flex flex-col w-screen justify-center items-center text-center ">
        <div className="w-2/3 m-10 mt-20">
          <Title>YOUR AI HABITS HAVE A COST.</Title>
        </div>
        <div className="w-3/4 m-5">
          <Heading>SEE YOUR IMPACT WITH ARTIFICIAL INTELLIGENCE</Heading>
        </div>
        <div className="mt-20">
          <Link to="/tutorial">
            <CTAButton>
              GET TO WRAPPING <ArrowUpRight className="w-5 h-5" />
            </CTAButton>
          </Link>
        </div>
        <Divider />
      </div>
      <div
        ref={learnMoreRef}
        className="flex flex-col justify-center items-center text-center"
      >
        <SubTitle className="w-2/3 mb-10">
          MEASURE YOUR USE OF CHAT GPT IN ELEMENTS
        </SubTitle>
        <SubHeading className="m-5">VIEW WHAT THE EYE CANT SEE</SubHeading>
        <div className="flex gap-6 m-20">
          <Card
            title="GPT IN ELECTRICITY"
            content="This is the electricity usage of GPT."
          />
          <Card
            title="GPT IN CO2 EMISSIONS"
            content="GPT contributes this much to CO2 emissions."
          />
          <Card
            title="GPT IN FRESH WATER"
            content="Usage of fresh water by GPT is tracked here."
          />
        </div>
        <Divider />
        <div className="flex w-full flex-col justify-center items-center text-center">
          <SubTitle>WHY YOUR IMPACT MATTERS</SubTitle>
          <div className="flex gap-6 mt-20">
            <ImageCard
              imgSrc="/images/electricity.jpg"
              title="GPT IN ELECTRICITY"
            />
            <ImageCard imgSrc="/images/co2.jpg" title="GPT IN CO2 EMISSIONS" />
            <ImageCard imgSrc="/images/water.jpg" title="GPT IN FRESH WATER" />
          </div>
          <Divider />
          <div className="flex w-full flex-col justify-center items-center text-center">
            <SubTitle className="w-2/3 m-10">HOW WE MAKE IT HAPPEN</SubTitle>
            <TeritaryHeading className="m-5">IT'S 3 EASY STEPS</TeritaryHeading>
            <ParagraphLarge className="w-4/6 mt-10">
              Unwrap the environmental impact of your AI usage with ChatGPT
              Impact Tracker. Analyze your conversations and discover the top 3
              responses with the highest carbon, water, electricity, and gas
              costs. This tool empowers users to make informed, eco-conscious
              decisions about their AI interactions.{" "}
            </ParagraphLarge>
            <Divider />
          </div>{" "}
          <div
            ref={aboutUsRef}
            className="flex w-full flex-col justify-center items-center text-center mb-20"
          >
            <CTAButton>ABSOLUTELY NO NEED TO FRET</CTAButton>
            <SubTitle className="m-10"> YOUR DATA'S SAFE WITH US</SubTitle>
            <div className="flex justify-center gap-10">
              <FeatureIcon title="ENCRYPTION GUARANTEE" />
              <FeatureIcon title="LOCAL PROCESSING" />
              <FeatureIcon title="DELETES IN REAL TIME" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
