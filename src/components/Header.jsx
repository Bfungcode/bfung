import React, { useState, useEffect } from "react";

const Header = ({ isLarge }) => {
  const reviews = [
    "Bie Fung is skilled, diligent and hardworking. He worked relentlessly to complete my orders and impressed me by completing them before my stipulated deadlines.",
    "I wholeheartedly recommend Bie Fung for your project. He possesses a commendable combination of excellent character, a collaborative spirit, and an eagerness to learn, making him a valuable asset to any team.",
    "Bie Fung fosters a positive and professional environment with his calm demeanor and approachable nature. He actively listens to colleagues, offers constructive feedback, and readily incorporates suggestions into his work. This makes him a pleasure to collaborate with, fostering open communication and mutual understanding",
    "Furthermore, Bie demonstrates a genuine passion for continuous learning. He actively seeks opportunities to expand his skillset and knowledge base, readily accepting new challenges and adapting to unfamiliar situations. This growth mindset ensures he consistently delivers high-quality work and brings fresh perspectives to any project.",
    "In conclusion, Bie Fung's strong character, collaborative spirit, and dedication to learning make him an excellent candidate for your project. He is a reliable and fantastic person all around. ",
    "Bie Fung is a genuine asset to any team or project he is a part of. His dedication is evident in the way he immerses himself in his work, always giving 100% to ensure that every task he undertakes is completed to the highest standard. His attention to detail, along with his determination, ensures that he not only meets but often exceeds expectations. I highly recommend Bei Fung for any project you need.",
    "Bie helped me get my python script working again quickly. Fast work and good communication. Thank you!",
    "I needed help fixing a python script and posted an ad . Bie was quick to respond and eager to help. We have had several back and fourth emails discussing the code and Bie took the time to analyze the task at hand and provide the solution I needed. We had several additional emails each time discussing changes with Bie tweaking the code until it ran perfectly. Bie was professional, quick and fixed the problems at hand. Would recommend and will contact him again in the future for further coding projects. ",
    "Bfung, Thank you for coding the bot for me! Your expertise and dedication were evident, resulting in a highly functional solution. Working with you was a pleasure, and I'm thoroughly impressed with the quality of your work. Highly recommended!",
    "Thank you for the great work and prompt service! You’ve been a joy to work with.",
  ];
  const reviewers = [
    "M. Elliot",
    "Edd.C",
    "Edd.C",
    "Edd.C",
    "Edd.C",
    "J.Currier",
    "Cam.F",
    "Cam.F",
    "Matthew. F",
    "Ave",
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
    <>
      {isLarge ? (
        <div className="w-full h-[90%] flex flex-row flex-wrap">
          <div className="w-[15%] h-full flex flex-col flex-wrap justify-between">
            <div className="w-full h-[100%] p-4 flex flex-col justify-end  gap-2">
              <div className="text-[18px] font-primary font-bold text-black">
                Bie Fung
              </div>
              <img src="/bfung.webp"></img>
              <div className="text-[12px]  font-primary text-black font-semibold tracking-widest">
                Hello, I'm Bie Fung. you can call me Abe or Bei. I’m a Front End
                Developer and Web Designer. Specializing in JavaScript. I'm a
                self taught Software Engineer with passion and dreams
              </div>
            </div>
          </div>
          <div className="w-[85%] h-full border-l-2 border-black flex flex-col flex-wrap pt-4 relative">
            <div className="h-full w-full font-secondary text-[20px] p-4 flex flex-col flex-wrap justify-center items-center text-center gap-2">
              <div className="w-[90%] text-black font-bold  relative z-0 ">
                <div className="pt-2  pr-2 pl-2 font-secondary">{review}</div>
              </div>
              <span className="w-[90%] h-[1px] bg-black"></span>
              <div className="w-[30%] text-black text-[32px] bg-white ">
                - {reviewer}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[500px] md:h-[650px] flex flex-row flex-wrap">
          <div className="flex flex-col flex-wrap w-full h-full">
            <div className="w-full h-[75%] md:h-[60%] flex flex-col flex-wrap relative ">
              <div className="h-[20%] w-full pt-3 pl-6 ">
                <div className="text-[42px] md:text-[32px] font-third font-extrabold  text-black tracking-wider">
                  Bie Fung
                  <div className="text-lg font-third text-gray-700 letter">
                    Profile
                  </div>
                </div>
              </div>
              <div className="h-[80%] md:h-[80%] w-full  font-secondary text-[12px] tracking-tight md:text-[15px] p-2 pt-14  md:pt-32 flex flex-col flex-wrap justify-center items-center text-center gap-2">
                <div className="w-[100%] md:w-[90%] text-black font-medium  relative z-0 ">
                  <div className="pt-2 pr-2 pl-2 font-primary">{review}</div>
                </div>
                <div className="w-[80%] h-[1px] bg-black"></div>
                <div className="w-[30%] text-black text-[16px] md:text-[18px] bg-white">
                  - {reviewer}
                </div>
              </div>
            </div>
            <div className="w-full h-[25%]  md:h-[40%] flex flex-col flex-wrap justify-between pr-3 pl-3 pt-2 pb-2 ">
              <div className="w-full h-[100%] p-2 flex flex-col justify-end items-start gap-3">
                <div className="w-full text-[13px] md:text-[22px] font-primary text-gray-800 tracking-wider font-semibold  md:leading-7">
                  Hello, I'm Bie Fung. you can call me Abe or Bei. I’m a
                  Freelancer. Specializing in Web Development. I'm a self taught
                  Software Engineer with passion and dreams with services
                  including Website Order, Web Scraping Scripts etc
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
