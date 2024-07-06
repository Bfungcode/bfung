import React, { useState } from "react";
import {
  JavaScript,
  HtmlIcon,
  CssIcon,
  ReactIcon,
  VueJS,
  TypeScriptIcon,
  NextJs,
  TailWind,
  FigmaIcon,
  JavaScriptColor,
  TypeScriptColor,
  NodeIcon,
  NodeColor,
  FigmaColor,
  HtmlColor,
  CssColor,
  ReactColor,
  VueColor,
  TailwindColor,
} from "./svg.jsx";

const Skillset = ({ isLarge }) => {
  const [isHover0, setIsHover0] = useState(true);
  const [isHover1, setIsHover1] = useState(true);
  const [isHover2, setIsHover2] = useState(true);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);
  const [isHover5, setIsHover5] = useState(false);
  const [isHover6, setIsHover6] = useState(false);
  const [isHover7, setIsHover7] = useState(false);
  const [isHover8, setIsHover8] = useState(false);
  const [isHover9, setIsHover9] = useState(false);

  const IconComponent = [
    JavaScript,
    TypeScriptIcon,
    NodeIcon,
    FigmaIcon,
    HtmlIcon,
    CssIcon,
    ReactIcon,
    VueJS,
    NextJs,
    TailWind,
    JavaScriptColor,
    TypeScriptColor,
    NodeColor,
    FigmaColor,
    HtmlColor,
    CssColor,
    ReactColor,
    VueColor,
    NextJs,
    TailwindColor,
  ];
  const skills = [
    {
      skill: "JAVASCRIPT",
      color: "bg-gradient-to-b from-amber-300 to-yellow-200",
      mcolor: "bg-gradient-to-r from-amber-300 to-yellow-200",
      icon: 0,
      iconColor: 10,
    },
    {
      skill: "TYPESCRIPT",
      color: "bg-gradient-to-b from-blue-500 to-blue-300",
      mcolor: "bg-gradient-to-r from-blue-500 to-blue-300",
      icon: 1,
      iconColor: 11,
    },
    {
      skill: "NODE JS",
      color: "bg-gradient-to-b from-green-500 to-blue-200",
      mcolor: "bg-gradient-to-r from-green-500 to-blue-200",
      icon: 2,
      iconColor: 12,
    },
    {
      skill: "FIGMA",
      color: " bg-gradient-to-b from-red-500 to-orange-300",
      mcolor: " bg-gradient-to-r from-red-500 to-orange-300",
      icon: 3,
      iconColor: 13,
    },
    {
      skill: "HTML",
      color: "bg-gradient-to-b from-red-500 to-orange-200",
      mcolor: "bg-gradient-to-r from-red-500 to-orange-200",
      icon: 4,
      iconColor: 14,
    },
    {
      skill: "CSS",
      color: "bg-gradient-to-b from-blue-900 to-blue-500",
      mcolor: "bg-gradient-to-r from-blue-900 to-blue-500",
      icon: 5,
      iconColor: 15,
    },
    {
      skill: "REACT JS",
      color: "bg-gradient-to-b  from-sky-400 to-slate-200",
      mcolor: "bg-gradient-to-r  from-sky-400 to-slate-200",
      icon: 6,
      iconColor: 16,
    },
    {
      skill: "VUE JS",
      color: " bg-gradient-to-b from-green-500 to-gray-600",
      mcolor: " bg-gradient-to-r from-green-500 to-gray-600",
      icon: 7,
      iconColor: 17,
    },
    {
      skill: "NEXT JS",
      color: "bg-gradient-to-b  from-black to-slate-300",
      mcolor: "bg-gradient-to-r  from-black to-slate-300",
      icon: 8,
      iconColor: 18,
    },
    {
      skill: "TAILWIND",
      color: "bg-gradient-to-b from-cyan-400 to-cyan-200",
      mcolor: "bg-gradient-to-r from-cyan-400 to-cyan-200",
      icon: 9,
      iconColor: 19,
    },
  ];
  const setHover = [
    setIsHover0,
    setIsHover1,
    setIsHover2,
    setIsHover3,
    setIsHover4,
    setIsHover5,
    setIsHover6,
    setIsHover7,
    setIsHover8,
    setIsHover9,
  ];
  const handleMouseEnter = (num) => () => {
    setHover[num](true);
  };

  const handleMouseLeave = (num) => () => {
    setHover[num](false);
  };
  return (
    <>
      {isLarge ? (
        <div className="w-full h-full p-4 pt-0 pb-0 pr-0 pl-0 flex flex-row flex-wrap">
          <div className="w-[15%] h-full bg-white text-black font-secondary text-[52px]  text-center flex flex-row justify-center items-center vertical-rl">
            <div className="w-full h-full flex justify-center items-center  border-black tracking-[5px] rotate-0 orientation-upright uppercase font-third relative">
              <div className="absolute w-[40%] h-[60%] border-l-2 border-t-2 border-black top-10 left-18"></div>
              <div className="absolute w-[40%] h-[60%] border-r-2 border-b-2 border-black bottom-10 right-18"></div>
              Skill set
            </div>
          </div>
          <div className="w-[85%] h-full  flex flex-row ">
            {skills.map((skill) => {
              let Icon = IconComponent[skill.icon];
              return (
                <>
                  {eval(`isHover${skill.icon}`) ? (
                    <>
                      <div
                        className={`w-[10%] h-full  text-[46px] font-secondary flex flex-col flex-wrap justify-center items-center text-center p-2  tracking-widest border-l-2 border-black vertical-rl orientation-upright relative ${skill.color}`}
                        onMouseEnter={handleMouseEnter(skill.icon)}
                        onMouseLeave={handleMouseLeave(skill.icon)}
                      >
                        <div className="absolute w-[50%] h-[40%] border-l-2 border-t-2 border-black top-10 left-3"></div>
                        <div className="absolute w-[50%] h-[40%] border-r-2 border-b-2 border-black bottom-10 right-3"></div>
                        <div className="w-full h-[85%] text-start tracking-[8px] flex items-center justify-start pt-16 ">
                          {skill.skill}
                        </div>
                        <div className="w-full h-[15%] flex justify-start items-center">
                          <Icon />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={`w-[10%] h-full  text-[46px] font-secondary flex flex-col flex-wrap justify-center items-center text-center p-2   tracking-widest border-l-2  border-black vertical-rl orientation-upright relative `}
                        onMouseEnter={handleMouseEnter(skill.icon)}
                        onMouseLeave={handleMouseLeave(skill.icon)}
                      >
                        <div className="absolute w-[50%] h-[40%] border-l-2 border-t-2 border-black top-10 left-3"></div>
                        <div className="absolute w-[50%] h-[40%] border-r-2 border-b-2 border-black bottom-10 right-3"></div>
                        <div className="w-full h-[85%] text-start tracking-[8px] flex items-center justify-start pt-16 ">
                          {skill.skill}
                        </div>
                        <div className="w-full h-[15%] flex justify-start items-center">
                          <Icon />
                        </div>
                      </div>
                    </>
                  )}
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="w-full  p-4 pt-0 pb-0 pr-0 pl-0 flex flex-col flex-wrap border-t-2 border-black">
          <div className="w-full h-[60px] flex flex-row flex-wrap justify-center items-center border-b-2  border-black">
            <div className="w-[40%] h-full flex text-center justify-center items-center text-[24px] md:text-[42px] font-secondary  font-bold bg-white">
              Skill Set
            </div>
            <div className="w-[60%] h-full border-l-2 border-black bg-white">
              <img src="/Rectangle10.webp" className="w-full h-full"></img>
            </div>
          </div>
          <div className="w-full h-[85%]  flex flex-col ">
            {skills.map((skill) => {
              let Icon = IconComponent[skill.icon];
              return (
                <>
                  {eval(`isHover${skill.icon}`) ? (
                    <>
                      <div
                        className={`w-full h-[70px] md:h-[15%]  text-[26px] font-secondary flex flex-row flex-wrap justify-center items-center text-center p-2  tracking-widest border-black  border-b-2 orientation-upright relative ${skill.mcolor}`}
                        onMouseEnter={handleMouseEnter(skill.icon)}
                        onMouseLeave={handleMouseLeave(skill.icon)}
                      >
                        <div className="w-[85%] h-full text-start tracking-[8px] flex items-center justify-start ">
                          {skill.skill}
                        </div>
                        <div className="w-[15%] h-full flex justify-start items-center">
                          <Icon />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={`w-full h-[70px] md:h-[15%] text-[26px] font-secondary flex flex-row flex-wrap justify-center items-center text-center p-2   tracking-widest   border-b-2 border-black orientation-upright relative `}
                        onMouseEnter={handleMouseEnter(skill.icon)}
                        onMouseLeave={handleMouseLeave(skill.icon)}
                      >
                        <div className="w-[85%] h-full text-center tracking-[8px] flex items-center justify-start  ">
                          {skill.skill}
                        </div>
                        <div className="w-[15%] h-full flex justify-start items-center">
                          <Icon />
                        </div>
                      </div>
                    </>
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Skillset;
