import React, { useState, useEffect } from "react";
import { FileIconBlack, FileIconWhite } from "../media/svg.jsx";

const Header = ({ isLarge }) => {
  const reviews = [
    "Bie Fung is skilled, diligent and hardworking. He worked relentlessly to complete my orders and impressed me by completing them before my stipulated deadlines.",
    "I wholeheartedly recommend Bie Fung for your project. He possesses a commendable combination of excellent character, a collaborative spirit, and an eagerness to learn, making him a valuable asset to any team.",
    "Bie Fung fosters a positive and professional environment with his calm demeanor and approachable nature. He actively listens to colleagues, offers constructive feedback, and readily incorporates suggestions into his work. This makes him a pleasure to collaborate with, fostering open communication and mutual understanding",
    "Furthermore, Bie demonstrates a genuine passion for continuous learning. He actively seeks opportunities to expand his skillset and knowledge base, readily accepting new challenges and adapting to unfamiliar situations. This growth mindset ensures he consistently delivers high-quality work and brings fresh perspectives to any project.",
    "In conclusion, Bie Fung's strong character, collaborative spirit, and dedication to learning make him an excellent candidate for your project. He is a reliable and fantastic person all around. ",
    "Bie Fung is a genuine asset to any team or project he is a part of. His dedication is evident in the way he immerses himself in his work, always giving 100% to ensure that every task he undertakes is completed to the highest standard. His attention to detail, along with his determination, ensures that he not only meets but often exceeds expectations. I highly recommend Bei Fung for any project you need.",
  ];
  const reviewers = [
    "M. Elliot",
    "Edd.C",
    "Edd.C",
    "Edd.C",
    "Edd.C",
    "J.Currier",
  ];
  const [idx, setIdx] = useState(0);
  const [review, setReviews] = useState(reviews[idx]);
  const [reviewer, setReviewer] = useState(reviewers[idx]);
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prevIndex) => (prevIndex + 1) % reviews.length);
      setReviewer((prevIndex) => (prevIndex + 1) % reviewers.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  useEffect(() => {
    setReviews(reviews[idx]);
    setReviewer(reviewers[idx]);
  }, [idx, reviews, reviewers]);
  return (
    <div className=" w-screen h-screen p-4  pb-0">
      {isLarge ? (
        <div className="w-full h-full flex flex-col flex-wrap  border-2 border-black border-b-0">
          <div className="w-full h-[12%] border-black border-b-2 flex flex-row flex-wrap">
            <div className="w-[13%] h-full">
              <img
                src="/Rectangle4.png"
                className="w-full h-full object-none"
              ></img>
            </div>
            <div className="w-[79%] border-l-2 border-black font-secondary text-[56px] flex justify-evenly items-center">
              <div>Bie Fung</div>
              <div>-</div>
              <div>Software Engineer</div>
            </div>
            <div className="w-[8%] border-l-2 border-black bg-white flex flex-col flex-wrap justify-center items-center gap-2">
              <div className="text-xl font-secondary text-black ">Resume</div>
              <FileIconBlack />
            </div>
          </div>
          <div className="w-full h-[76%] flex flex-col flex-wrap">
            <div className="w-[13%] h-full border-r-2 flex flex-col flex-wrap justify-between">
              <div className="w-full h-[100%] p-4 flex flex-col justify-end items-start">
                <div className="text-[18px] font-primary font-bold">
                  Bie Fung
                </div>
                <div className="text-[14px] font-primary text-gray-400 font-medium">
                  Profile
                </div>
                <div>
                  <img src="/bfung.png"></img>
                </div>
                <div className="text-[12px] pt-4 font-primary text-black font-semibold">
                  Hello, i'm Bie Fung. you can call me Abe or Bei. I’m a Front
                  End Developer and Web Designer. Specializing in JavaScript.
                  I'm a self taught Software Engineer with passion and dreams
                </div>
              </div>
            </div>
            <div className="w-[87%] h-full border-l-2 border-black flex flex-col flex-wrap e p-4">
              <div className="text-[72px] font-third w-full h-[25%] flex flex-col justify-center items-center relative">
                <div className="w-full pl-[2%] text-[100px] absolute -top-5 tracking-[15px] ">
                  Wha
                  <span className="font-bold bg-white w-full h-full">T</span>
                </div>
                <div className="w-full pl-[10%] absolute -bottom-5 tracking-[15px]">
                  they sa
                  <span className=" bg-black  text-white font-bold w-full h-full">
                    y
                  </span>
                  <span className="underline text-[52px] pl-4">?</span>
                </div>
              </div>
              <div className="h-[75%] w-full font-secondary text-[30px] p-4 flex flex-col flex-wrap justify-start items-center text-center gap-2 ">
                <div className="w-[80%] text-black font-medium  relative z-0 ">
                  <div className="bg-white">{review}</div>
                </div>
                <span className="w-[90%] h-[1px] bg-black"></span>
                <div className="w-[20%] text-white text-[48px] bg-red-700 ">
                  - {reviewer}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[12%] border-t-2 border-black flex flex-row flex-wrap">
            <div className="w-[30%] h-full bg-black border-2 border-white font-secondary text-[62px] flex justify-center items-center text-white">
              Services
            </div>
            <div className="w-[70%] h-full  border-l-2 border-black">
              <img src="/Rectangle10.png" className="w-full h-full"></img>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col flex-wrap  border-2 border-black border-b-0">
          <div className="w-full h-[15%] border-b-2 border-black flex flex-row justify-around items-center ">
            <div className="w-[75%] font-semibold font-secondary text-[28px] md:text-[52px] p-2 text-center hover:bg-black hover:text-white transition-all duration-1000 h-full flex justify-center items-center">
              Bie Fung - SWE
            </div>
            <div className="w-[25%] h-full border-l-2 border-black flex flex-col flex-wrap justify-center items-center bg-black text-white">
              <div className="text-[12px] md:text-[32px] full border-black flex flex-col flex-wrap justify-center ]">
                Resume
              </div>
              <div>
                <FileIconWhite />
              </div>
            </div>
          </div>
          <div className="w-full h-[70%] flex flex-col flex-wrap justify- item-center relative">
            <div className="z-30 relative w-full h-[40%] p-6 pt-0 ">
              <div className="w-full h-[200px] md:h-[250px] lg:p-36 lg:text-[22px] font-primary font-semibold text-[11px] md:text-[18px] text-center relative flex justify-center items-center flex-col p-2 pr-0 pl-0 z-30 gap-1 text-gray-500">
                <div> {review}</div>
                <span className="w-full h-[1px] border-[1px] border-black"></span>
                <div className="flex flex-col flex-wrap text-[16px] md:text-[22px] text-black">
                  - {reviewer}
                </div>
              </div>
            </div>
            <div className="w-full h-[60%] flex justify-center flex-col items-center z-10 ">
              <img
                src="/bfung.png"
                className="w-full md:w-[60%] lg:w-[40%] h-full z-20 md"
              />
            </div>
          </div>
          <div className="w-full h-[15%] border-black border-t-2 z-20">
            <div className="w-full h-full font-secondary text-[52px] md:text-[72px] bg-black border-white text-center flex justify-center items-center border-2 text-white hover:text-black hover:bg-white hover:border-none transition-all duration-1000">
              Services
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
