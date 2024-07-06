import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Designs from "./components/Designs";
import Skillset from "./components/Skillset";
import Contacts from "./components/Contacts";

import "./index.css";

function App() {
  const handleMouseEnter = (setBox) => () => {
    setBox(true);
  };

  const handleMouseLeave = (setBox) => () => {
    setBox(false);
  };
  const [isLarge, setIsLarge] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth >= 1080);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isLarge ? (
        <div className="w-screen h-screen p-4 ">
          <div className="blob-cont z-50">
            <div className="yellow blob"></div>
            <div className="red blob"></div>
            <div className="green blob"></div>
          </div>
          <div className="blob-cont2 z-50">
            <div className="yellow blob"></div>
            <div className="red blob"></div>
            <div className="green blob"></div>
          </div>
          <div className="blob-cont2 z-50">
            <div className="yellow blob"></div>
            <div className="red blob"></div>
            <div className="green blob"></div>
          </div>
          <div className="w-full h-full border-[2px] border-black flex flex-col flex-wrap overflow-auto">
            <div className="w-full h-[12%] border-b-2 border-black flex flex-row flex-wrap">
              <div className="w-[15%] h-full m-0 p-0 relative border-black">
                <img
                  src="/Rectangle4.webp"
                  className="w-[100%] h-full object-none overflow"
                ></img>
              </div>
              <div className="w-[79%] flex flex-col p-2 pb-0 border-l-2 border-black">
                <div className="font-primary font-bold text-xs w-full pl-2 text-start">
                  Profile
                </div>
                <div className="font-secondary text-5xl w-full text-center">
                  Bie Fung - Software Engineer
                </div>
              </div>
              <a
                className="w-[6%]  border-l-2 border-black p-2 flex flex-col justify-center items-center gap-2"
                href="https://drive.google.com/file/d/1_iVl8JyKEli3Ii50BoNYNJ0rE9LL1KYU/view?usp=sharing"
              >
                <div className="text-xs font-primary font-bold">Resume</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="square"
                    stroke-linejoin="bevel"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                    <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="w-full h-[88%]  overflow-auto gap-2 ">
              <Header isLarge={isLarge} />
              <Services isLarge={isLarge} />
              <Skillset isLarge={isLarge} />
              <Projects
                isLarge={isLarge}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
              <Designs isLarge={isLarge} />
              <Contacts
                isLarge={isLarge}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={`w-screen h-[100svh]`}>
          <div className="blob-cont-m z-50">
            <div className="red blob"></div>
            <div className="green blob"></div>
            <div className="yellow blob"></div>
          </div>
          <div className="w-full h-full p-4 flex flex-wrap flex-col">
            <a
              className="absolute w-[60px] md:w-[80px] h-[60px] md:h-[80px] flex flex-col flex-wrap right-2 top-1 border-2 border-black z-20 bg-[#EEE6DE] text-black justify-center items-center"
              href="https://drive.google.com/file/d/1_iVl8JyKEli3Ii50BoNYNJ0rE9LL1KYU/view?usp=sharing"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                  <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                </svg>
              </div>
            </a>
            <div className="w-full h-[92%] md:h-[92%] overflow-auto border-black border-2 border-b-0">
              <>
                <Header
                  isLarge={isLarge}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />

                <Services
                  isLarge={isLarge}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
                <Skillset
                  isLarge={isLarge}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
                <Projects
                  isLarge={isLarge}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
                <Designs
                  isLarge={isLarge}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
                <Contacts
                  isLarge={isLarge}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
              </>
            </div>
            <div className="w-full h-[8%] md:h-[8%] border-2 border-black flex flex-row">
              <div className="w-[25%] h-full bg-black text-white text-xs md:text-base flex justify-start items-end font-bold font-primary p-2">
                Portfolio
              </div>
              <div className="w-[75%] h-full text-center flex font-secondary justify-center items-center text-[16px] md:text-[44px]  font-bold p-2 border-l-2 border-black">
                Bie Fung - Software Engineer
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
