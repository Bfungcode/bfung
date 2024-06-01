import React, { useState } from "react";
import { ArrowBackBlack, ArrowRight } from "./svg";

const Contacts = ({ isLarge, handleMouseEnter, handleMouseLeave }) => {
  const [contact1, setContact1] = useState(false);
  const [contact2, setContact2] = useState(false);
  const [contact3, setContact3] = useState(false);
  const [contact4, setContact4] = useState(false);

  return (
    <>
      {isLarge ? (
        <div className="w-full   border-t-2 border-black">
          {" "}
          <>
            <div className="w-full h-[80px]  text-white font-secondary text-[62px] md:text-[72px] text-center flex flex-row justify-center items-center  border-2 border-white">
              <div className="w-[70%] h-full">
                <img src="Rectangle10.png" className="w-full h-full"></img>
              </div>
              <div className="w-[30%] h-full bg-black text-[62px] flex justify-center items-center">
                Contacts
              </div>
            </div>
            <div
              className="w-full h-[109px] border-black border-t-2 border-b-2 flex flex-row"
              onMouseEnter={handleMouseEnter(setContact1)}
              onMouseLeave={handleMouseLeave(setContact1)}
            >
              {contact1 ? (
                <>
                  <div className="w-full h-full text-white text-4xl font-secondary  flex justify-center items-center text-center flex-row gap-2 transition-all ease-in-out duration-1000">
                    <div className="w-[60%] flex flex-row flex-wrap justify-end gap-4">
                      <div className="text-6xl font-secondary text-black">
                        Mail me
                      </div>
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60"
                          height="60"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          stroke-width="1"
                          stroke-linecap="square"
                          stroke-linejoin="bevel"
                        >
                          <path d="M5 12h13M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-[40%] flex flex-column flex-wrap justify-center items-center transition-all ease-in-out duration-1000">
                      <a
                        href="mailto:bfung0011@gmail.com"
                        target="_blank"
                        className="text-black p-2"
                      >
                        bfung0011@gmail.com
                      </a>
                      <div className="border-2 border-black w-[80%]"></div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[70%] h-full   text-white text-4xl font-secondary bg-black flex justify-center items-center flex-col gap-2 transition-all ease-in-out duration-1000">
                    <a href="mailto:bfung0011@gmail.com" target="_blank">
                      bfung0011@gmail.com
                    </a>
                  </div>
                  <div className="w-[30%] h-full text-black font-secondary text-4xl flex flex-row justify-center items-center border-black border-l-2 transition-all ease-in-out duration-1000">
                    Gmail
                  </div>
                </>
              )}
            </div>
            <div
              className="w-full h-[109px] border-black  border-b-2 flex flex-row"
              onMouseEnter={handleMouseEnter(setContact2)}
              onMouseLeave={handleMouseLeave(setContact2)}
            >
              {contact2 ? (
                <>
                  <div className="w-full h-full text-white text-4xl font-secondary  flex justify-center items-center text-center flex-row gap-2 transition-all ease-in-out duration-1000">
                    <div className="w-[40%] flex flex-column flex-wrap justify-center items-center transition-all ease-in-out duration-1000">
                      <a
                        href="https://linkedin.com/in/biefung/"
                        target="_blank"
                        className="text-black p-2"
                      >
                        linkedin.com/in/biefung/
                      </a>
                      <div className="border-2 border-black w-[80%]"></div>
                    </div>
                    <div className="w-[60%] flex flex-row flex-wrap justify-start gap-4">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60"
                          height="60"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          stroke-width="1"
                          stroke-linecap="square"
                          stroke-linejoin="bevel"
                        >
                          <path d="M19 12H6M12 5l-7 7 7 7" />
                        </svg>
                      </div>
                      <div className="text-6xl font-secondary text-black">
                        See my profile
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[70%] h-full text-white font-secondary text-4xl flex flex-col justify-center items-center   bg-black gap-2 transition-all ease-in-out duration-1000">
                    <a href="https://linkedin.com/in/biefung" target="_blank">
                      linkedin.com/in/biefung
                    </a>
                  </div>
                  <div className="w-[30%] h-full  border-black border-l-2 text-black text-4xl font-secondary  flex justify-center items-center transition-all ease-in-out duration-1000">
                    LinkedIn
                  </div>
                </>
              )}
            </div>
            <div
              className="w-full h-[109px] border-black  border-b-2 flex flex-row"
              onMouseEnter={handleMouseEnter(setContact3)}
              onMouseLeave={handleMouseLeave(setContact3)}
            >
              {contact3 ? (
                <>
                  <div className="w-full h-full text-white text-4xl font-secondary  flex justify-center items-center text-center flex-row gap-2 transition-all ease-in-out duration-1000">
                    <div className="w-[60%] flex flex-row flex-wrap justify-end gap-4">
                      <div className="text-6xl font-secondary text-black">
                        See my code
                      </div>
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60"
                          height="60"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          stroke-width="1"
                          stroke-linecap="square"
                          stroke-linejoin="bevel"
                        >
                          <path d="M5 12h13M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-[40%] flex flex-column flex-wrap justify-center items-center transition-all ease-in-out duration-1000">
                      <a
                        href="https://github.com/Bfungcode"
                        target="_blank"
                        className="text-black p-2"
                      >
                        github.com/Bfungcode
                      </a>
                      <div className="border-2 border-black w-[80%]"></div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[70%] h-full  text-white text-4xl font-secondary bg-black flex justify-center items-center flex-col gap-2 transition-all ease-in-out duration-1000">
                    <a href="https://github.com/Bfungcode" target="_blank">
                      github.com/Bfungcode
                    </a>
                  </div>
                  <div className="w-[30%] h-full text-black font-secondary text-4xl flex flex-row justify-center items-center border-black border-l-2 transition-all ease-in-out duration-1000">
                    Github
                  </div>
                </>
              )}
            </div>
            <div
              className="w-full h-[109px] border-black border-b-2 flex flex-row"
              onMouseEnter={handleMouseEnter(setContact4)}
              onMouseLeave={handleMouseLeave(setContact4)}
            >
              {contact4 ? (
                <>
                  <div className="w-full h-full text-white text-4xl font-secondary  flex justify-center items-center text-center flex-row gap-2 transition-all ease-in-out duration-1000">
                    <div className="w-[40%] flex flex-column flex-wrap justify-center items-center transition-all ease-in-out duration-1000">
                      <a
                        href="https://twitter.com/bei_fg"
                        target="_blank"
                        className="text-black p-2"
                      >
                        twitter.com/bei_fg
                      </a>
                      <div className="border-2 border-black w-[80%]"></div>
                    </div>
                    <div className="w-[60%] flex flex-row flex-wrap justify-start gap-4">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60"
                          height="60"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          stroke-width="1"
                          stroke-linecap="square"
                          stroke-linejoin="bevel"
                        >
                          <path d="M19 12H6M12 5l-7 7 7 7" />
                        </svg>
                      </div>
                      <div className="text-6xl font-secondary text-black">
                        See my tweets
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[70%] h-full text-white font-secondary text-4xl flex flex-col justify-center items-center bg-black gap-2 transition-all ease-in-out duration-1000">
                    <a href="https://twitter.com/bei_fg" target="_blank">
                      twitter.com/bei_fg
                    </a>
                  </div>
                  <div className="w-[30%] h-full  border-black border-l-2 text-black text-4xl font-secondary  flex justify-center items-center transition-all ease-in-out duration-1000">
                    X / Twitter
                  </div>
                </>
              )}
            </div>
          </>
        </div>
      ) : (
        <div className="w-full   border-t-2 border-black">
          <>
            <div className="w-full h-[80px] flex flex-row flex-wrap justify-center items-center  border-black">
              <div className="w-[35%] h-full flex text-center justify-center items-center text-[24px] md:text-[42px] font-secondary  font-bold">
                Contacts
              </div>
              <div className="w-[65%] h-full border-l-2 border-black ">
                <img src="/Rectangle10.png" className="w-full h-full"></img>
              </div>
            </div>
            <div className="flex flex-col flex-wrap">
              <div className="w-full  h-[80px] flex flex-wrap flex-col justify-center items-center border-t-2 border-black">
                <div className="flex flex-row flex-wrap justify-center items-center">
                  <div className="text-[20px] md:text-[42px] font-secondary">
                    Mail me
                  </div>
                  <ArrowRight />
                  <div className="text-[18px] md:text-[40px] font-secondary ">
                    bfung0011@gmail.com
                    <div className="w-full h-[2px] border-black border-[1px]"></div>
                  </div>
                </div>
              </div>
              <div className="w-full  h-[80px] flex flex-wrap flex-col justify-center items-center border-t-2 border-black">
                <div className="flex flex-row flex-wrap justify-center items-center">
                  <div className="text-[20px] md:text-[42px] font-secondary">
                    <a href="https://www.linkedin.com/in/biefung/">Linkedin</a>
                    <div className="w-full h-[2px] border-black border-[1px]"></div>
                  </div>
                  <ArrowBackBlack />
                  <div className="text-[20px] md:text-[42px] font-secondary ">
                    See my profile
                  </div>
                </div>
              </div>
              <div className="w-full  h-[80px] flex flex-wrap flex-col justify-center items-center border-t-2 border-black">
                <div className="flex flex-row flex-wrap justify-center items-center">
                  <div className="text-[20px] md:text-[42px] font-secondary">
                    {" "}
                    See my code
                  </div>
                  <ArrowRight />
                  <div className="text-[20px] md:text-[42px] font-secondary ">
                    <a href="https://github.com/Bfungcode">Github</a>
                    <div className="w-full h-[2px] border-black border-[1px]"></div>
                  </div>
                </div>
              </div>
              <div className="w-full  h-[80px] flex flex-wrap flex-col justify-center items-center border-t-2 border-black">
                <div className="flex flex-row flex-wrap justify-center items-center">
                  <div className="text-[20px] md:text-[42px] font-secondary">
                    <a href="https://twitter.com/bei_fg">X</a>
                    <div className="w-full h-[2px] border-black border-[1px]"></div>
                  </div>
                  <ArrowBackBlack />
                  <div className="text-[20px] font-secondary md:text-[42px]">
                    See my tweets
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </>
  );
};

export default Contacts;
