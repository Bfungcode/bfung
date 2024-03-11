import React from "react";

const Services = ({ isLarge }) => {
  const serviceslist = [
    {
      text: "I will help you convert your Figma design into a functional website using a framework of your choice or one of the options I'm offering [React JS, Next JS, Vue JS].",
      num: 1,
    },
    {
      text: "I will help you create a website from scratch. I can effectively handle the design and the UI/UX, as well as develop the website using the framework of your choice. Once completed, I will also handle the website deployment and hosting.",
      num: 2,
    },
    {
      text: "I will help debug and fix your code. If you have any bugs on your website that need to be fixed but you are stuck, I can offer to debug your functions or fix your code to ensure it runs as you wish",
      num: 3,
    },
  ];
  return (
    <>
      {isLarge ? (
        <div className="w-screen h-[400px] p-4 pt-0 pb-0">
          <div className="w-full h-full border-2 border-b-0 border-black p-8 pr-4 pl-4 flex flex-row flex-wrap gap-4 justify-around items-center ">
            {serviceslist.map((service) => {
              return (
                <div className="w-[30%] h-[140px] md:h-[200px]  lg:h-[250px]  relative ">
                  <div className="text-[13px] md:text-[22px] w-full h-full font-secondary flex justify-center text-center items-center font-semibold p-2 ">
                    {service.text}
                    <div className="w-[90%] h-[80%] border-l-2 border-t-2 border-black absolute left-0 top-0"></div>
                    <div className="w-[90%] h-[80%] border-r-2 border-b-2 border-black absolute right-0 bottom-0"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-black absolute right-[50%] -bottom-1"></div>
                    <div className="w-[20px] h-[40px] text-2xl absolute right-0 top-0">
                      {service.num}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="w-screen h-[550px] md:h-[700px] lg:h-[900px] p-4 pt-0 pb-0">
          <div className="w-full h-full border-2 border-b-0 bg-white border-black p-8 pr-4 pl-4 flex flex-col flex-wrap gap-4 justify-center items-center">
            {serviceslist.map((service) => {
              return (
                <div className="w-[90%] h-[140px] md:h-[200px]  lg:h-[250px]  relative bg-white">
                  <div className="text-[13px] md:text-[22px] w-full h-full font-secondary flex justify-center text-center items-center font-semibold p-2 ">
                    {service.text}
                    <div className="w-[90%] h-[80%] border-l-2 border-t-2 border-black absolute left-0 top-0"></div>
                    <div className="w-[90%] h-[80%] border-r-2 border-b-2 border-black absolute right-0 bottom-0"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-black absolute right-[50%] -bottom-1"></div>
                    <div className="w-[20px] h-[40px] text-2xl absolute right-0 top-0">
                      {service.num}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
