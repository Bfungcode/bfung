import React from "react";

const Services = ({ isLarge }) => {
  return (
    <>
      {isLarge ? (
        <div className="w-full pt-0 pb-0 border-t-2 border-b-2 border-black">
          <div className="w-full h-[80px] flex flex-row flex-wrap justify-center items-center border-b-2 border-black">
            <div className="w-[15%] h-full flex text-center justify-center items-center text-4xl font-secondary  font-bold">
              Services
            </div>
            <div className="w-[85%] h-full border-l-2 border-black ">
              <img src="/Rectangle10.png" className="w-full h-full"></img>
            </div>
          </div>
          <div className="w-full h-full pt-4 pr-4 pl-4 pb-4 flex md:flex-col flex-col lg:flex-row justify-around items-center gap-6 md:gap-6 lg:gap-1 ">
            <div className="md:w-[100%] w-[100%] h-full md:h-full  lg:h-[750px]  relative  border-[1px] border-black ">
              <div className="text-[13px] md:text-[22px] w-full h-full font-secondary flex justify-start text-center items-start font-semibold p-3 flex-col gap-1 flex-wrap ">
                <div className="text-base lg:text-xl font-secondary mt-4 w-full text-start relative">
                  Custom Website Service
                  <div className="w-full h-[1px] bg-black absolute bottom-0"></div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full text-start font-medium">
                  I will create you a custom website for your business or for
                  your personal use case
                </div>
                <div className="text-base lg:text-xl font-secondary w-full text-start">
                  How It Works:
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="text-sm lg:text-base w-full text-start">
                    1. Chat & Plan
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Consultation:</span> We’ll talk
                    about your goals and vision.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Plan: </span> We’ll outline the
                    project, including timeline and deliverables.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    2. Design & Prototype
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Wireframes:</span> See the
                    layout of your site.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Design: </span> Check out design
                    mockups and give feedback.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    3. Build
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Frontend: </span> We create a
                    responsive, interactive site.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Backend: </span> We build a
                    strong backend for smooth performance.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Content: </span> We integrate
                    your content, optimized for SEO.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    4. Test & Launch
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">QA:</span> We test everything to
                    ensure it works perfectly.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Review: </span> You review the
                    site before it goes live.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Launch: </span> We deploy your
                    site.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    5. Support
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Training:</span> Learn how to
                    manage your new site.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Maintenance: </span> We offer
                    ongoing support and updates.
                  </div>
                </div>
                <div className="w-[20px] h-[40px] text-2xl absolute right-0 top-0">
                  1
                </div>
              </div>
            </div>
            <div className="md:w-[100%] w-[100%] h-full md:h-full  lg:h-[750px]  relative  border-[1px] border-black ">
              <div className="text-[13px] md:text-[22px] w-full h-full font-secondary flex justify-start text-center items-start font-semibold p-3 flex-col gap-1 flex-wrap ">
                <div className="text-base lg:text-xl font-secondary mt-4 w-full text-start relative">
                  CMS Website Service
                  <div className="w-full h-[1px] bg-black absolute bottom-0"></div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full text-start font-medium">
                  I will create you a custom website for your business or for
                  your personal use case using Wordpress, Shopify or Wix
                </div>
                <div className="text-base lg:text-xl font-secondary w-full text-start">
                  How It Works:
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="text-sm lg:text-base w-full text-start">
                    1. Chat & Plan
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Consultation:</span> We’ll talk
                    about your goals and vision.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Plan: </span> We’ll outline the
                    project, including timeline and deliverables.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    2. Design & Prototype
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Wireframes:</span> See the
                    layout of your site.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Design: </span> Check out design
                    mockups and give feedback.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    3. Build
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Website: </span> We create a
                    responsive, interactive site.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Content: </span> We integrate
                    your content, optimized for SEO.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    4. Test & Launch
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">QA:</span> We test everything to
                    ensure it works perfectly.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Review: </span> You review the
                    site before it goes live.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Launch: </span> We deploy your
                    site.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    5. Support
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Training:</span> Learn how to
                    manage your new site.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Maintenance: </span> We offer
                    ongoing support and updates.
                  </div>
                </div>
                <div className="w-[20px] h-[40px] text-2xl absolute right-0 top-0">
                  2
                </div>
              </div>
            </div>
            <div className="md:w-[100%] w-[100%] h-full md:h-full  lg:h-[750px]  relative border-[1px] border-black ">
              <div className="text-[13px] md:text-[22px] w-full h-full font-secondary flex justify-start text-center items-start font-semibold p-3 flex-col gap-1 flex-wrap ">
                <div className="text-base lg:text-xl font-secondary mt-4 w-full text-start relative">
                  Bot and Scripts Services
                  <div className="w-full h-[1px] bg-black absolute bottom-0"></div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full text-start font-medium">
                  Need data extracted from websites? Want to automate social
                  media posting or other online tasks? I will make you the web
                  scraping scripts and bot scripts and got you covered.
                </div>
                <div className="text-base lg:text-xl font-secondary w-full text-start">
                  What We Offer:
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="text-sm lg:text-base w-full text-start">
                    Web Scraping Scripts
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    1. Custom scripts to extract data from any website, API or
                    database
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    2. Data delivered in your preferred format (CSV, JSON, etc.)
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    3. Scheduled or on-demand scraping
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    Bot Scripts
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    1. Social media bots for posting, scheduling, interaction
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    2. Chatbots and virtual assistants (Using llm and gpt API)
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    3. Customized to your unique needs and Works with all major
                    platforms
                  </div>
                </div>

                <div className="w-[20px] h-[40px] text-2xl absolute right-0 top-0">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full pt-0 pb-0 border-t-2  border-black">
          <div className="w-full h-[80px] flex flex-row flex-wrap justify-center items-center border-b-2  border-black">
            <div className="w-[35%] h-full flex text-center justify-center items-center text-[24px] md:text-[42px] font-secondary  font-bold">
              Services
            </div>
            <div className="w-[65%] h-full border-l-2 border-black ">
              <img src="/Rectangle10.png" className="w-full h-full"></img>
            </div>
          </div>
          <div className="w-full h-full pt-4 pr-4 pl-4 pb-4 flex md:flex-col flex-col lg:flex-row justify-around items-center gap-6 md:gap-6 lg:gap-1 ">
            <div className="md:w-[100%] w-[100%] h-full md:h-full  lg:h-[750px]  relative  border-[1px] border-black ">
              <div className="text-[13px] md:text-[22px] w-full h-full font-secondary flex justify-start text-center items-start font-semibold p-3 flex-col gap-1 flex-wrap ">
                <div className="text-base lg:text-xl  font-secondary mt-4 w-full text-start relative">
                  Custom Website Service
                  <div className="w-full h-[1px] bg-black absolute bottom-0"></div>
                </div>
                <div className="text-sm lg:text-base  font-secondary w-full text-start font-medium">
                  I will create you a custom website for your business or for
                  your personal use case
                </div>
                <div className="text-base lg:text-xl font-secondary w-full text-start">
                  How It Works:
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="text-sm lg:text-base w-full text-start">
                    1. Chat & Plan
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Consultation:</span> We’ll talk
                    about your goals and vision.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Plan: </span> We’ll outline the
                    project, including timeline and deliverables.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    2. Design & Prototype
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Wireframes:</span> See the
                    layout of your site.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Design: </span> Check out design
                    mockups and give feedback.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    3. Build
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Frontend: </span> We create a
                    responsive, interactive site.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Backend: </span> We build a
                    strong backend for smooth performance.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Content: </span> We integrate
                    your content, optimized for SEO.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    4. Test & Launch
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">QA:</span> We test everything to
                    ensure it works perfectly.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Review: </span> You review the
                    site before it goes live.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Launch: </span> We deploy your
                    site.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    5. Support
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Training:</span> Learn how to
                    manage your new site.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Maintenance: </span> We offer
                    ongoing support and updates.
                  </div>
                </div>
                <div className="w-[20px] h-[40px] text-2xl absolute right-0 top-0">
                  1
                </div>
              </div>
            </div>
            <div className="md:w-[100%] w-[100%] h-full md:h-full  lg:h-[750px]  relative  border-[1px] border-black ">
              <div className="text-[13px] md:text-[22px] w-full h-full font-secondary flex justify-start text-center items-start font-semibold p-3 flex-col gap-1 flex-wrap ">
                <div className="text-base lg:text-xl font-secondary mt-4 w-full text-start relative">
                  CMS Website Service
                  <div className="w-full h-[1px] bg-black absolute bottom-0"></div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full text-start font-medium">
                  I will create you a custom website for your business or for
                  your personal use case using Wordpress, Shopify or Wix
                </div>
                <div className="text-base lg:text-xl font-secondary w-full text-start">
                  How It Works:
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="text-sm lg:text-base w-full text-start">
                    1. Chat & Plan
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Consultation:</span> We’ll talk
                    about your goals and vision.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Plan: </span> We’ll outline the
                    project, including timeline and deliverables.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    2. Design & Prototype
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Wireframes:</span> See the
                    layout of your site.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Design: </span> Check out design
                    mockups and give feedback.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    3. Build
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Website: </span> We create a
                    responsive, interactive site.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Content: </span> We integrate
                    your content, optimized for SEO.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    4. Test & Launch
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">QA:</span> We test everything to
                    ensure it works perfectly.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Review: </span> You review the
                    site before it goes live.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Launch: </span> We deploy your
                    site.
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    5. Support
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    <span className="font-bold">Training:</span> Learn how to
                    manage your new site.
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    <span className="font-bold">Maintenance: </span> We offer
                    ongoing support and updates.
                  </div>
                </div>
                <div className="w-[20px] h-[40px] text-2xl absolute right-0 top-0">
                  2
                </div>
              </div>
            </div>
            <div className="md:w-[100%] w-[100%] h-full md:h-full  lg:h-[750px]  relative border-[1px] border-black ">
              <div className="text-[13px] md:text-[22px] w-full h-full font-secondary flex justify-start text-center items-start font-semibold p-3 flex-col gap-1 flex-wrap ">
                <div className="text-base lg:text-xl font-secondary mt-4 w-full text-start relative">
                  Bot and Scripts Services
                  <div className="w-full h-[1px] bg-black absolute bottom-0"></div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full text-start font-medium">
                  Need data extracted from websites? Want to automate social
                  media posting or other online tasks? I will make you the web
                  scraping scripts and bot scripts and got you covered.
                </div>
                <div className="text-base lg:text-xl font-secondary w-full text-start">
                  What We Offer:
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="text-sm lg:text-base w-full text-start">
                    Web Scraping Scripts
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    1. Custom scripts to extract data from any website, API or
                    database
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    2. Data delivered in your preferred format (CSV, JSON, etc.)
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    3. Scheduled or on-demand scraping
                  </div>
                </div>
                <div className="text-sm lg:text-base font-secondary w-full ml-2">
                  <div className="w-full text-start text-sm lg:text-base">
                    Bot Scripts
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5">
                    1. Social media bots for posting, scheduling, interaction
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    2. Chatbots and virtual assistants (Using llm and gpt API)
                  </div>
                  <div className="w-full text-sm lg:text-base font-medium text-start pl-5 ">
                    3. Customized to your unique needs and Works with all major
                    platforms
                  </div>
                </div>

                <div className="w-[20px] h-[40px] text-2xl absolute right-0 top-0">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
