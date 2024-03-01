import React from "react";

const Services = ({ isLarge }) => {
  const serviceslist = [
    {
      text: "Convert your Figma design to a functional website, with a framework of your choice or what i'm offer [React JS, Next JS, Vue JS]",
      num: 1,
    },
    {
      text: "Create a website from scratch, i do the design and the ui/ux and create the website with the framework i choose, deployed and host the website",
      num: 2,
    },
    {
      text: "Debug and Fix your code, if you having any bug from your website that need to be fixed but you are stuck i can offer myself to debug your function or fix your code to make sure it can run as you wish",
      num: 3,
    },
  ];
  return (
    <>
      {isLarge ? (
        <div className="w-screen h-[400px] p-4 pt-0 pb-0">
          <div className="w-full h-full border-2 border-b-0 border-black p-8 pr-4 pl-4 flex flex-row flex-wrap gap-4 justify-around items-center bg-white">
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
