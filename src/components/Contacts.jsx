import React, { useState } from "react";

const Contacts = ({ isLarge, handleMouseEnter, handleMouseLeave }) => {
  const [contact1, setContact1] = useState(false);
  const [contact2, setContact2] = useState(false);
  const [contact3, setContact3] = useState(false);
  const [contact4, setContact4] = useState(false);
  return (
    <>
      {isLarge ? (
        <div className="w-full   border-t-2 border-black">
          <>
            <div className="w-full h-[80px]  text-white font-secondary text-[62px] md:text-[72px] text-center flex flex-row justify-center items-center  ">
              <div className="w-[70%] h-full">
                <img src="Rectangle10.webp" className="w-full h-full"></img>
              </div>
              <div className="w-[30%] h-full text-black text-[62px] border-l-2 border-black flex justify-center items-center">
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
                  <div className="w-[30%] h-full text-black font-secondary text-4xl flex flex-row justify-center items-center border-black border-l-2 transition-all ease-in-out duration-1000 bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="52"
                      height="52"
                      viewBox="0 0 50 50"
                    >
                      <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
                    </svg>
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
                  <div className="w-[30%] h-full bg-white border-black border-l-2 text-black text-4xl font-secondary  flex justify-center items-center transition-all ease-in-out duration-1000">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 24 24"
                      fill="#000"
                    >
                      <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM8.951 9.404H6.165V17.5H8.95V9.404zm6.841-.192c-1.324 0-1.993.629-2.385 1.156l-.127.181V9.403h-2.786l.01.484c.006.636.007 1.748.005 2.93l-.015 4.683h2.786v-4.522c0-.242.018-.484.092-.657.202-.483.66-.984 1.43-.984.955 0 1.367.666 1.408 1.662l.003.168V17.5H19v-4.643c0-2.487-1.375-3.645-3.208-3.645zM7.576 5.5C6.623 5.5 6 6.105 6 6.899c0 .73.536 1.325 1.378 1.392l.18.006c.971 0 1.577-.621 1.577-1.398C9.116 6.105 8.53 5.5 7.576 5.5z" />
                    </svg>
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
                  <div className="w-[30%] h-full bg-white text-black font-secondary text-4xl flex flex-row justify-center items-center border-black border-l-2 transition-all ease-in-out duration-1000">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="52"
                      height="52"
                      viewBox="0 0 50 50"
                    >
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>
                  </div>
                </>
              )}
            </div>
            <div
              className="w-full h-[109px] border-black flex flex-row"
              onMouseEnter={handleMouseEnter(setContact4)}
              onMouseLeave={handleMouseLeave(setContact4)}
            >
              {contact4 ? (
                <>
                  <div className="w-full h-full text-white text-4xl font-secondary  flex justify-center items-center text-center flex-row gap-2 transition-all ease-in-out duration-1000">
                    <div className="w-[40%] flex flex-col flex-wrap justify-center items-center transition-all ease-in-out duration-1000">
                      <a href="" target="_blank" className="text-black p-2">
                        _beifg
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
                        Add my discord
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[70%] h-full text-white font-secondary text-4xl flex flex-col justify-center items-center bg-black gap-2 transition-all ease-in-out duration-1000">
                    <a href="https://twitter.com/bei_fg" target="_blank">
                      _beifg
                    </a>
                  </div>
                  <div className="w-[30%] h-full bg-white border-black border-l-2 text-black text-4xl font-secondary  flex justify-center items-center transition-all ease-in-out duration-1000">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="52"
                      height="52"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                    </svg>
                  </div>
                </>
              )}
            </div>
          </>
        </div>
      ) : (
        <div className="w-full   border-t-2 border-black">
          <>
            <div className="w-full h-[60px] flex flex-row flex-wrap justify-center items-center  border-black">
              <div className="w-[40%] h-full flex text-center justify-center items-center text-[24px] md:text-[42px] font-secondary  font-bold bg-white">
                Contacts
              </div>
              <div className="w-[60%] h-full border-l-2 border-black bg-white">
                <img src="/Rectangle10.webp" className="w-full h-full"></img>
              </div>
            </div>
            <div className="flex flex-col flex-wrap">
              <div className="w-full  h-[80px] flex flex-wrap flex-col justify-center items-center border-t-2 border-black">
                <div className="w-full h-full flex flex-row flex-wrap">
                  <div className="w-[25%] h-full flex justify-center items-center bg-white">
                    <div className="text-[24px] md:text-[42px] font-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="42"
                        height="42"
                        viewBox="0 0 50 50"
                      >
                        <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-[75%]  h-full flex justify-center items-center border-l-2 border-black">
                    <div className="text-[16px] md:text-[40px] font-secondary text-black">
                      bfung0011@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full  h-[80px] flex flex-wrap flex-col justify-center items-center border-t-2 border-black">
                <div className="w-full h-full flex flex-row flex-wrap ">
                  <div className="w-[25%] h-full flex justify-center items-center bg-white">
                    <div className="text-[24px] md:text-[42px] font-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 24 24"
                        fill="#000"
                      >
                        <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM8.951 9.404H6.165V17.5H8.95V9.404zm6.841-.192c-1.324 0-1.993.629-2.385 1.156l-.127.181V9.403h-2.786l.01.484c.006.636.007 1.748.005 2.93l-.015 4.683h2.786v-4.522c0-.242.018-.484.092-.657.202-.483.66-.984 1.43-.984.955 0 1.367.666 1.408 1.662l.003.168V17.5H19v-4.643c0-2.487-1.375-3.645-3.208-3.645zM7.576 5.5C6.623 5.5 6 6.105 6 6.899c0 .73.536 1.325 1.378 1.392l.18.006c.971 0 1.577-.621 1.577-1.398C9.116 6.105 8.53 5.5 7.576 5.5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-[75%] h-full flex justify-center items-center border-l-2 border-black">
                    <div className="text-[18px] md:text-[40px] font-secondary text-black">
                      linkedin.com/in/biefung
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full  h-[80px] flex flex-wrap flex-col justify-center items-center border-t-2 border-black">
                <div className="w-full h-full flex flex-row flex-wrap ">
                  <div className="w-[25%] h-full flex justify-center items-center bg-white">
                    <div className="text-[24px] md:text-[42px] font-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="42"
                        height="42"
                        viewBox="0 0 50 50"
                      >
                        <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-[75%] h-full flex justify-center items-center border-l-2 border-black">
                    <div className="text-[18px] md:text-[40px] font-secondary text-black">
                      github.com/Bfungcode
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full  h-[80px] flex flex-wrap flex-col justify-center items-center border-t-2 border-b-0 border-black">
                <div className="w-full h-full flex flex-row flex-wrap ">
                  <div className="w-[25%] h-full flex justify-center items-center bg-white ">
                    <div className="text-[24px] md:text-[42px] font-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="42"
                        height="42"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-[75%]  h-full flex justify-center items-center border-l-2 border-black">
                    <div className="text-[18px] md:text-[40px] font-secondary text-black">
                      _beifg
                    </div>
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
