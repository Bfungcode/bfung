import React, { useState } from "react";
import { ArrowBackBlack, ArrowBackWhite } from "../media/svg";

const Projects = ({ isLarge, handleMouseEnter, handleMouseLeave }) => {
  const [openCartal, setOpenCartal] = useState(false);
  const [openCryptoHex, setOpenCrytoHex] = useState(false);
  const [openCashier, setOpenCashier] = useState(false);
  const [openEasy, setOpenEasy] = useState(false);
  const [numCartal1, setNumCartal1] = useState(1);
  const [numCartal2, setNumCartal2] = useState(1);
  const [numCartal3, setNumCartal3] = useState(1);
  const [numCartal4, setNumCartal4] = useState(1);
  const [hover1, setHover1] = useState(false);
  const [turn1, setTurn1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [turn2, setTurn2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [turn3, setTurn3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [turn4, setTurn4] = useState(false);
  const [previous1, setPrevious1] = useState(false);
  const [previous2, setPrevious2] = useState(false);
  const [previous3, setPrevious3] = useState(false);
  const [previous4, setPrevious4] = useState(false);
  const turnPt = (setTurn, turn) => {
    setTurn(!turn);
  };
  const projectsData = [
    {
      name: "Cartal",
      year: "2022",
      role: "Project Leader, Front End Developer",
      link: "https://cartal.netlify.app/",
      repo: "https://github.com/Bfungcode/BinarCarRents_Main",
      stacks: "JavaScript, React JS, React Redux, CSS",
      state: openCartal,
      setState: setOpenCartal,
      white: true,
      words1:
        "During boot camp, I took on the pivotal role of Project Leader for our team tasked with developing a web application facilitating transactions between customers and suppliers in the car rental industry. The team was split into two groups, with each responsible for either the customer-facing or admin side of the website. As the Project Leader, my primary responsibilities involved ensuring efficient task allocation and fostering collaboration within the team. To achieve this, I implemented Agile and Scrum methodologies, providing a comprehensive flow chart for task allocation among team members. The team was strategically divided into two groups, each handling specific aspects of the project. One group focused on the customer side, while the other managed the admin side, responsible for updating data through CRUD operations. Personally, I took charge of implementing Redux middleware to manage API data, ensuring website responsiveness, and slicing the homepage according to the UI/UX team's design.",
      words2:
        "Throughout the project, I played an active leadership role, ensuring everyone comprehended their roles and responsibilities. Regular team meetings were scheduled to track progress, discuss challenges, and collectively address any issues that arose. Additionally, I oversaw both the customer and admin groups, approving any changes through GitHub pull requests. Our cohesive efforts and effective project management led to the successful completion of the project within the stipulated timeframe, meeting all requirements. Our outstanding performance was duly recognized, culminating in an impressive score of 97 out of 100.",
      pt: "5",
      ft: 5,
      num: 1,
      imgNum: numCartal1,
      setImgNum: setNumCartal1,
    },
    {
      name: "CryptoHex",
      year: "2023",
      role: "Front End Developer, UI/UX Designer",
      link: [
        "https://cryptohex.netlify.app/#/",
        "https://www.figma.com/file/W2rEOrg7oMiEmjiK9gMrsS/CryptoHex?type=design&node-id=0%3A1&t=nLIRzq0rHhINvH3k-1",
      ],
      repo: "https://github.com/Bfungcode/CryptoHex",
      stacks: "JavaScript, Vue JS, CSS, Figma",
      state: openCryptoHex,
      setState: setOpenCrytoHex,
      white: false,
      words1:
        "I recently applied for a Front-End Developer role that entailed a comprehensive 5-step recruitment process. The first case required creating a web design using Figma based on the client's given description. Here, I faced a challenge as I hadn't previously used Figma or engaged in web design. To address this gap, I negotiated a 3-day period to immerse myself in learning both web design principles and Figma. ",
      words2:
        "  As the first case were given, that time i never use Figma before or do any web design before. So i proceed to negotiate a 3 days deals to learn Web Design and Figma. By my Front End Engineer experience i confidently began the second case, i were given the acceptance criteria which have an option to choose the framework to use between Vue JS Svelte JS, Next JS and React JS. with a condition framework other than React JS will be given adding points, so i decided to go for framework beside React JS although it's where i most experienced, i switch it with Vue JS which by the previous internship i learned by only one month. Gladfully i proceed through the fifth step and for the final step is doing interview with the User and HR as final interview. Unfortunately after the final step i were rejected as it said i'm not fit with their company culture.",
      pt: "2",
      ft: 4,
      num: 2,
      imgNum: numCartal2,
      setImgNum: setNumCartal2,
    },

    {
      name: "Cashier",
      year: "2023",
      role: "Front End Developer",
      link: "https://cashier-webapp.vercel.app/",
      repo: "https://github.com/Bfungcode/Cashier_WebApp",
      stacks: "JavaScript, React JS, Tailwind CSS",
      state: openCashier,
      setState: setOpenCashier,
      white: true,
      words1:
        "I've created a handy project called Cashier to assist front desk workers in efficiently managing orders and processing payments. With Cashier, you can effortlessly handle customer orders and keep track of payments. with Features:",
      words2:
        "Interactive Menu: Our menu system is user-friendly, allowing you to add items to orders with a simple click. You can stack items for multiple quantities and remove them just as easily. Order Summary: Cashier keeps a running tally of the selected items, quantities, and their individual prices. This makes it a breeze to review and make any necessary adjustments to the order. Payment Proccessing:When it's time to settle the bill, our system calculates the total cost based on the items in the order. There's a convenient input field where you can enter the customer's payment amount.Payment Notifications: If the customer provides more money than the total, our system displays a toast notification showing the change to be returned. However, if the payment is insufficient, you'll receive a notification indicating that the payment has failed.",
      pt: "3",
      ft: 3,
      num: 3,
      imgNum: numCartal3,
      setImgNum: setNumCartal3,
    },
    {
      name: "Easy Features",
      year: "2023",
      role: "Front End Developer",
      link: "https://easyfeatures.netlify.app/",
      repo: "https://github.com/Bfungcode/EasyFeatures",
      stacks: "JavaScript, React JS, CSS",
      state: openEasy,
      setState: setOpenEasy,
      white: false,
      words1:
        "A personal website portfolio that i made for contributing to React JS Front End Developer community. Creating features using a React JS and vanilla JavaScript or pure without any framework can quite be a problem and waste a lot of times. Let say the feature is a simple slide, in the vanila javascript we easily put the DOM method immediately in the script but as React JS developer we have to implement that using the react way by using the React Hooks, etc. Because in React JS rendering a component and DOM behaves differently, for example React DOM escapes any values embedded in JSX before rendering them. So it's can be a problem for a simple features although it's the same logic function that works on purely javascript website.",
      words2:
        "I developed and designed React JS templates of feature that widely used by people or basic features a website needed, which we can just straight up copy and paste the JSX and style it how we want without worrying the underhood.",
      pt: "1",
      ft: 3,
      num: 4,
      imgNum: numCartal4,
      setImgNum: setNumCartal4,
    },
  ];
  const setPrevious = [setPrevious1, setPrevious2, setPrevious3, setPrevious4];
  const handleNext = (num, numCartal, setNumCartal, ft) => () => {
    if (numCartal < ft) {
      setNumCartal(numCartal + 1);
    }
  };

  const handlePrevious = (num, numCartal, setNumCartal) => () => {
    if (numCartal > 1) {
      setNumCartal(numCartal - 1);
    }
  };
  return (
    <div className="w-screen  p-4 pt-0 pb-0">
      {isLarge ? (
        <div className="w-full h-full flex flex-col flex-wrap  border-2 border-black border-b-0 ">
          <div className="w-full h-[109px] bg-white text-black font-secondary text-[62px]  flex flex-row border-b-2 border-black flex-wrap">
            <div className="w-[70%] h-[110px] ">
              <img
                src="/Rectangle10.png"
                className="w-full h-[109px] object-cover"
              ></img>
            </div>
            <div className="w-[30%] h-full border-l-2 border-black flex justify-center items-center text-[62px]">
              Projects
            </div>
          </div>
          <div className="w-full h-full flex flex-col flex-wrap flex-1 relative">
            {turn1 ? (
              <div className="w-full h-full flex flex-row justify-between flex-wrap  transition-all duration-1000 linear border-black  border-b-2 bg-white">
                <div className="w-[20%] h-full flex flex-col flex-wrap p-6">
                  <div className="w-full h-[60%] flex flex-col flex-wrap break-words">
                    <div className="h-[15%] w-full text-4xl font-primary font-bold text-black pb-8">
                      Binar Car Rental
                    </div>
                    <div className="h-[55%] w-full flex flex-col flex-wrap gap-14">
                      <div className="w-full text-xl font-primary font-bold text-black">
                        Year Accomplished
                        <div className="text-base text-gray-500">2022</div>
                      </div>
                      <div className="w-full text-xl font-primary font-bold text-black">
                        Role/Position
                        <div className="text-base text-gray-500">
                          Project Leader
                        </div>
                        <div className="text-base text-gray-500">
                          Front End Engineer
                        </div>
                      </div>
                      <div className="w-full text-xl font-primary font-bold text-black">
                        Publication Link
                        <a
                          href="https://cartal.netlify.app"
                          target="_blank"
                          className="cursor-pointer"
                        >
                          <div className="text-base text-gray-500">
                            cartal.netlify.app
                          </div>
                        </a>
                      </div>
                      <div className="w-full text-xl font-primary font-bold text-black">
                        Repository
                        <a
                          href="https://github.com/Bfungcode/BinarCarRents_Main"
                          target="_blank"
                          className="cursor-pointer"
                        >
                          <div className="text-base text-gray-500">
                            github.com/Bfungcode/BinarCarRents_Main
                          </div>
                        </a>
                      </div>
                      <div className="w-full text-xl font-primary font-bold text-black">
                        Stacks
                        <div className="text-base text-gray-500">
                          JavaScript
                        </div>
                        <div className="text-base text-gray-500">React JS</div>
                        <div className="text-base text-gray-500">
                          React Redux
                        </div>
                        <div className="text-base text-gray-500">CSS</div>
                      </div>
                      <div
                        className="flex flex-row flex-wrap justify-start gap-2 items-center cursor-pointer mt-4"
                        onClick={() => turnPt(setTurn1, turn1)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="52"
                          height="52"
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
                    </div>
                  </div>
                </div>
                <div className="w-[80%] h-full flex-col flex-wrap p-6">
                  <div className="w-full h-[5%] text-xl font-primary font-bold text-black pt-2">
                    Project Description
                  </div>
                  <div className="w-full h-[95%] flex flex-col flex-wrap gap-6">
                    <div className="w-full h-[30%] flex flex-row flex-wrap font-bold gap-2">
                      <div className="text-[14px] text-gray-600 w-[65%]">
                        {projectsData[0].words1}
                      </div>
                      <div className="text-[14px] text-gray-600 w-[34%] font-bold">
                        {projectsData[0].words2}
                      </div>
                    </div>
                    <div className="w-full h-[65%] flex flex-row flex-wrap bg-gray-200 p-8 justify-center transition-all duration-1000 ease-in-out">
                      <div className="h-full w-[30%] text-center">
                        <div className="text-lg text-black font-bold h-[5%]">
                          Homepage
                        </div>
                        <div className="w-full p-2 h-[97%] flex flex-col gap-2 flex-wrap ">
                          <img
                            src="/ct1.png"
                            className="w-full h-full object-fill"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="h-full w-[35%]  p-2 flex flex-col flex-wrap gap-1">
                        <div className="w-full h-full flex flex-col flex-wrap mr-8">
                          <div className="w-full h-[45%] flex flex-col flex-wrap justify-center text-center">
                            <div className="text-lg text-black font-bold h-[12%] w-full">
                              Car Page
                            </div>
                            <img
                              src="/ct2.png"
                              className="w-full h-full object-fill"
                              loading="lazy"
                            />
                          </div>

                          <div className="w-full h-[45%] flex flex-col flex-wrap justify-center items-center">
                            <div className="text-lg text-black font-bold h-[15%] flex flex-col flex-wrap">
                              Cars Update
                            </div>
                            <img
                              src="/ct5.png"
                              className="w-full h-full object-fill"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="h-full w-[35%] p-2 flex flex-col flex-wrap gap-2">
                        <div className="w-full h-full flex flex-col flex-wrap">
                          <div className="w-full h-[45%] flex flex-col flex-wrap justify-center items-center">
                            <div className="text-lg text-black font-bold h-[12%]">
                              Admin Dashboard
                            </div>
                            <img
                              src="/ct3.png"
                              className="w-full h-full object-fill"
                              loading="lazy"
                            />
                          </div>

                          <div className="w-full h-[45%] flex flex-col flex-wrap justify-center items-center">
                            <div className="text-lg text-black font-bold h-[15%] flex flex-col flex-wrap">
                              Payment Page
                            </div>
                            <img
                              src="/ct4.png"
                              className="w-full h-full object-fill"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-[300px] flex flex-row justify-between flex-wrap  ">
                {hover1 ? (
                  <>
                    <div
                      className="w-full h-full border-black border-b-2 flex flex-row flex-wrap bg-white p-6 cursor-pointer transition-all duration-1000 ease-in-out "
                      onMouseMove={handleMouseEnter(setHover1)}
                      onMouseLeave={handleMouseLeave(setHover1)}
                      onClick={() => turnPt(setTurn1, turn1)}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute border-t-2 border-l-2 border-black border-solid w-[30%] h-[50%] left-0 top-0"></div>
                        <div className="absolute border-r-2 border-b-2 border-black border-solid w-[30%] h-[50%] right-0 bottom-0"></div>
                        <div className="inset-0 flex flex-col items-center justify-start h-full w-full text-4xl">
                          <div className="w-full font-secondary text-black text-6xl p-10  bg-white text-center ">
                            Cartal
                            <div className="text-2xl font-secondary">
                              a Car Rental Web Application for the customer side
                              to do transaction, built by using React JS.
                              (Bootcamp Final Project)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-[30%] h-full border-black border-b-2 bg-white">
                      <div className="w-full h-full  flex flex-col flex-wrap">
                        <img
                          src="/pt5/ft1.png"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        ></img>
                      </div>
                    </div>
                    <div
                      className="w-[70%] h-full border-black border-b-2 border-l-2 flex flex-row flex-wrap bg-white p-6 cursor-pointer transition-all duration-1000 ease-in-out "
                      onMouseMove={handleMouseEnter(setHover1)}
                      onMouseLeave={handleMouseLeave(setHover1)}
                      onClick={() => turnPt(setTurn1, turn1)}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 flex-col items-center justify-start h-full w-full text-4xl p-2">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-[30%] h-[50%] left-0 top-0"></div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-[30%] h-[50%] right-0 bottom-0"></div>
                          <div className="w-full font-secondary text-black text-6xl   bg-white text-center p-10">
                            Cartal
                            <div className="text-2xl font-secondary">
                              a Car Rental Web Application for the customer side
                              to do transaction, built by using React JS.
                              (Bootcamp Final Project)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
            {turn2 ? (
              <div className="w-full h-full flex flex-row justify-between flex-wrap  transition-all duration-1000 ease-in-out border-black border-l-2 border-r-2 border-b-2 bg-black text-white z-0">
                <div className="w-[20%] h-full flex flex-col flex-wrap p-6 break-words">
                  <div className="w-full h-[60%] flex flex-col flex-wrap">
                    <div className="h-[15%] w-full text-4xl font-primary font-bold pb-8">
                      CryptoHex
                    </div>
                    <div className="h-[55%] w-full flex flex-col flex-wrap gap-14">
                      <div className="w-full text-xl font-primary font-bold">
                        Year Accomplished
                        <div className="text-base text-gray-300">2023</div>
                      </div>
                      <div className="w-full text-xl font-primary font-bold ">
                        Role/Position
                        <div className="text-base text-gray-300">
                          Front End Developer
                        </div>
                        <div className="text-base text-gray-300">
                          UI/UX Designer
                        </div>
                      </div>
                      <div className="w-full text-xl font-primary font-bold ">
                        Publication Link
                        <a href="https://cryptohex.netlify.app" target="_blank">
                          <div className="text-base text-gray-300 mb-1">
                            cryptohex.netlify.app
                          </div>
                        </a>
                        <a
                          href="https://figma.com/file/W2rEOrg7oMiEmjiK9gMrsS/CryptoHex?type=design&node-id=0%3A1&t=nLIRzq0rHhINvH3k-1"
                          target="_blank"
                        >
                          <div className="text-xs text-gray-300">
                            figma.com/file/W2rEOrg7oMiEmjiK9gMrsS/CryptoHex?type=design&node-id=0%3A1&t=nLIRzq0rHhINvH3k-1
                          </div>
                        </a>
                      </div>
                      <div className="w-full text-xl font-primary font-bold ">
                        Repository
                        <a
                          href="https://github.com/Bfungcode/CryptoHex"
                          target="_blank"
                        >
                          <div className="text-base text-gray-300">
                            github.com/Bfungcode/CryptoHex
                          </div>
                        </a>
                      </div>
                      <div className="w-full text-xl font-primary font-bold ">
                        Stacks
                        <div className="text-base text-gray-300">
                          JavaScript
                        </div>
                        <div className="text-base text-gray-300">Vue JS</div>
                        <div className="text-base text-gray-300">CSS</div>
                      </div>
                      <div
                        className="flex flex-row flex-wrap justify-start gap-2 items-center cursor-pointer mt-4"
                        onClick={() => turnPt(setTurn2, turn2)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="52"
                          height="52"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ffffff"
                          stroke-width="1"
                          stroke-linecap="square"
                          stroke-linejoin="bevel"
                        >
                          <path d="M19 12H6M12 5l-7 7 7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[80%] h-full flex-col flex-wrap p-6">
                  <div className="w-full h-[5%] text-base font-primary font-bold pt-2">
                    Project Description
                  </div>
                  <div className="w-full h-[95%] ">
                    <div className="w-full h-[30%] flex flex-row flex-wrap">
                      <div className="text-base text-gray-200 w-[35%]">
                        I recently applied for a Front-End Developer role that
                        entailed a comprehensive 5-step recruitment process. The
                        first case required creating a web design using Figma
                        based on the client's given description. Here, I faced a
                        challenge as I hadn't previously used Figma or engaged
                        in web design. To address this gap, I negotiated a 3-day
                        period to immerse myself in learning both web design
                        principles and Figma.
                      </div>
                      <div className="text-base text-gray-200 w-[65%]">
                        Drawing on my Front-End Engineer experience, I
                        confidently progressed to the second case, where I
                        received acceptance criteria that included the option to
                        choose a framework from Vue JS, Svelte JS, Next JS, and
                        React JS. Interestingly, additional points were awarded
                        for opting for a framework other than React JS. Despite
                        my extensive experience with React JS, I opted for Vue
                        JS, a framework I had learned during a previous
                        internship within a month. Navigating through the five
                        steps, I reached the final stage, which involved an
                        interview with both the User and HR. Regrettably, I
                        received feedback that I was not a fit for their company
                        culture and was subsequently rejected. learned by only
                        one month.
                        <div className="text-base text-gray-100 font-bold">
                          While the outcome wasn't what I had hoped for, this
                          experience presented valuable learning opportunities.
                          From acquiring Figma and web design skills within a
                          tight timeframe to making strategic decisions
                          regarding the choice of framework, each step of the
                          process contributed to my professional growth. I
                          remain optimistic about future opportunities and am
                          committed to continuously improving and adapting to
                          diverse challenges in the dynamic field of front-end
                          development.
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[70%] flex flex-row flex-wrap p-2 transition-all duration-1000 ease-in-out justify-center items-center">
                      <div className="h-full w-[25%] p-2 text-center">
                        <div className="text-lg text-white font-bold h-[5%]">
                          Homepage
                        </div>
                        <img
                          src="/ch1.png"
                          className="w-full object-contain h-[95%]"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-[25%] h-full p-2 text-center">
                        <div className="text-lg text-white font-bold h-[5%]">
                          Homepage 2
                        </div>
                        <img
                          src="/ch2.png"
                          className="w-full object-contain h-[95%]"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-[35%] h-[80%] p-2 flex flex-col flex-wrap">
                        <div className="w-full h-[45%] flex flex-col flex-wrap justify-center items-center">
                          <div className="text-lg text-white font-bold h-[10%]">
                            Login Page
                          </div>
                          <img
                            src="/ch3.png"
                            className="w-full h-[95%] object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div className="w-full h-[45%] flex flex-col flex-wrap justify-center items-center">
                          <div className="text-lg text-white font-bold h-[10%]">
                            Register Page
                          </div>
                          <img
                            src="/ch4.png"
                            className="w-full h-[95%] object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-[300px] flex flex-row justify-between flex-wrap z-0">
                {hover2 ? (
                  <>
                    <div
                      className="w-full h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-black p-6 cursor-pointer transition-all duration-1000 ease-in-out"
                      onMouseMove={handleMouseEnter(setHover2)}
                      onMouseLeave={handleMouseLeave(setHover2)}
                      onClick={() => turnPt(setTurn2, turn2)}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute border-t-2 border-l-2 border-white border-solid w-[30%] h-[50%] left-0 top-0"></div>
                        <div className="absolute border-r-2 border-b-2 border-white border-solid w-[30%] h-[50%] right-0 bottom-0"></div>
                        <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                          <div className="w-full font-secondary text-white text-6xl p-6  bg-black text-center">
                            CryptoHex
                            <div className="text-2xl font-secondary">
                              a Cryptocurrency wallet service web application
                              built with Vue JS
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-[30%] h-full border-black border-b-2  border-l-2 bg-white border-r-2">
                      <div className="w-full h-full  flex flex-col flex-wrap">
                        <img
                          src="/pt2/ft1.png"
                          className="w-full h-full object-cover"
                        ></img>
                      </div>
                    </div>
                    <div
                      className="w-[70%] h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap cursor-pointer bg-black p-6 transition-all duration-1000 ease-in-out z-0"
                      onMouseMove={handleMouseEnter(setHover2)}
                      onMouseLeave={handleMouseLeave(setHover2)}
                      onClick={() => {
                        turnPt(setTurn2, turn2);
                      }}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute border-t-2 border-l-2 border-white border-solid w-[30%] h-[50%] left-0 top-0"></div>
                        <div className="absolute border-r-2 border-b-2 border-white border-solid w-[30%] h-[50%] right-0 bottom-0"></div>
                        <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                          <div className="w-full font-secondary text-white text-6xl p-6  bg-black text-center">
                            CryptoHex
                            <div className="text-2xl font-secondary">
                              a Cryptocurrency wallet service web application
                              built with Vue JS
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
            {turn3 ? (
              <div className="w-full h-full flex flex-row justify-between flex-wrap  transition-all duration-1000 ease-in-out border-black border-b-2 z-10 bg-white">
                <div className="w-[20%] h-full flex flex-col flex-wrap p-6">
                  <div className="w-full h-[60%] flex flex-col flex-wrap break-words">
                    <div className="h-[15%] w-full text-4xl font-primary font-bold text-black pb-8">
                      Cashier
                    </div>
                    <div className="h-[55%] w-full flex flex-col flex-wrap gap-14">
                      <div className="w-full text-xl font-primary font-bold text-black">
                        Year Accomplished
                        <div className="text-base text-gray-500">2023</div>
                      </div>
                      <div className="w-full text-xl font-primary font-bold text-black">
                        Role/Position
                        <div className="text-base text-gray-500">
                          Front End Developer
                        </div>
                      </div>
                      <div className="w-full text-xl font-primary font-bold text-black">
                        Publication Link
                        <a
                          href="https://cashier-webapp.vercel.app"
                          target="_blank"
                        >
                          <div className="text-base text-gray-500">
                            cashier-webapp.vercel.app
                          </div>
                        </a>
                      </div>
                      <div className="w-full text-xl font-primary font-bold text-black">
                        Repository
                        <a
                          href="https://github.com/Bfungcode/Cashier_WebApp"
                          target="_blank"
                        >
                          <div className="text-base text-gray-500">
                            github.com/Bfungcode/Cashier_WebApp
                          </div>
                        </a>
                      </div>
                      <div className="w-full text-xl font-primary font-bold text-black">
                        Stacks
                        <div className="text-base text-gray-500">
                          JavaScript
                        </div>
                        <div className="text-base text-gray-500">React JS</div>
                        <div className="text-base text-gray-500">
                          Tailwind CSS
                        </div>
                      </div>
                      <div
                        className="flex flex-row flex-wrap justify-start gap-2 items-center cursor-pointer mt-4"
                        onClick={() => turnPt(setTurn3, turn3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="52"
                          height="52"
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
                    </div>
                  </div>
                </div>
                <div className="w-[80%] h-full flex flex-col flex-wrap p-6 ">
                  <div className="w-full h-[5%] text-xl font-primary font-bold text-black pt-2 ">
                    Project Description
                  </div>
                  <div className="w-full h-[95%] flex flex-col flex-wrap gap-10">
                    <div className="w-full h-[35%]">
                      <div className="text-base text-gray-500 font-semibold">
                        I developed a practical project named "Cashier" designed
                        to streamline the order management and payment
                        processing tasks for front desk workers. "Cashier"
                        facilitated the efficient handling of customer orders
                        and the seamless processing of payments, boasting
                        several key features:
                        <div className="w-full flex flex-row flex-wrap">
                          <div className="w-full flex flex-row flex-wrap gap-2">
                            <div className="w-full h-[10%]">
                              <div className="text-base text-gray-500 font-medium">
                                <div className="text-black inline-block font-semibold pr-2">
                                  - Interactive Menu:
                                </div>
                                The menu system was user-friendly, enabling the
                                addition of items to orders with a simple click.
                                Items could be stacked for multiple quantities
                                and removed just as easily.
                              </div>
                            </div>
                            <div className="w-full h-[10%]">
                              <div className="text-base text-gray-500 font-medium">
                                <div className="text-black inline-block font-semibold pr-2">
                                  - Order Summary:
                                </div>
                                "Cashier" maintained a running tally of the
                                selected items, their quantities, and individual
                                prices. This feature made it easy to review and
                                make any necessary adjustments to the order.
                              </div>
                            </div>
                            <div className="w-full h-[10%]">
                              <div className="text-base text-gray-500 font-medium">
                                <div className="text-black inline-block font-semibold pr-2">
                                  - Payment Proccessing:
                                </div>
                                When it came time to settle the bill, the system
                                calculated the total cost based on the items in
                                the order. There was a convenient input field
                                where the customer's payment amount could be
                                entered.
                              </div>
                            </div>
                            <div className="w-full h-[10%]">
                              <div className="text-base text-gray-500 font-medium">
                                <div className="text-black inline-block font-semibold pt-2 pr-2">
                                  - Payment Notifications:
                                </div>
                                If the customer provided more money than the
                                total, the system displayed a toast notification
                                showing the change to be returned. Conversely,
                                if the payment was insufficient, a notification
                                indicated that the payment had failed.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[65%] flex flex-row flex-wrap p-2 bg-gray-200 transition-all duration-1000 ease-in-out ">
                      <div className="w-full h-full flex flex-row flex-wrap p-4 justify-center gap-5">
                        <div className="w-[40%] h-full flex flex-col flex-wrap">
                          <img
                            src="/cs1.png"
                            className="w-full h-[80%] object-fill "
                            loading="lazy"
                          />
                        </div>
                        <div className="w-[15%] h-full">
                          <img
                            src="/cs2.png"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="w-[15%] h-full">
                          <img
                            src="/cs3.png"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="w-[15%] h-full">
                          <img
                            src="/cs4.png"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-[300px] flex flex-row justify-between flex-wrap ">
                {hover3 ? (
                  <>
                    <div
                      className="w-full h-full border-black border-b-2 flex flex-row flex-wrap cursor-pointer bg-white p-6 transition-all duration-1000 ease-in-out"
                      onMouseMove={handleMouseEnter(setHover3)}
                      onMouseLeave={handleMouseLeave(setHover3)}
                      onClick={() => turnPt(setTurn3, turn3)}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute border-t-2 border-l-2 border-black border-solid w-[30%] h-[50%] left-0 top-0"></div>
                        <div className="absolute border-r-2 border-b-2 border-black border-solid w-[30%] h-[50%] right-0 bottom-0"></div>
                        <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                          <div className="w-full font-secondary text-black text-6xl p-6  bg-white text-center">
                            Cashier
                            <div className="text-2xl font-secondary">
                              a User-friendly portfolio project with an
                              interactive food menu webpage that allows you to
                              assemble your order on the right side while
                              keeping track of your total payment.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-[30%] h-full border-black border-b-2  bg-white">
                      <div className="w-full h-full  flex flex-col flex-wrap">
                        <img
                          src="/pt3/ft1.png"
                          className="w-full h-full object-fill"
                          loading="lazy"
                        ></img>
                      </div>
                    </div>
                    <div
                      className="w-[70%] h-full border-black border-b-2  border-l-2 flex flex-row flex-wrap bg-white p-6 cursor-pointer"
                      onMouseMove={handleMouseEnter(setHover3)}
                      onMouseLeave={handleMouseLeave(setHover3)}
                      onClick={() => turnPt(setTurn3, turn3)}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute border-t-2 border-l-2 border-black border-solid w-[30%] h-[50%] left-0 top-0"></div>
                        <div className="absolute border-r-2 border-b-2 border-black border-solid w-[30%] h-[50%] right-0 bottom-0"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-start h-full w-full text-4xl p-6">
                          <div className="w-full font-secondary text-black text-6xl p-6  bg-white text-center">
                            Cashier
                            <div className="text-2xl font-secondary">
                              a User-friendly portfolio project with an
                              interactive food menu webpage that allows you to
                              assemble your order on the right side while
                              keeping track of your total payment.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
            {turn4 ? (
              <div className="w-full h-full flex flex-row justify-between flex-wrap  transition-all duration-1000 ease-in-out border-black border-l-2 border-r-2 border-b-2 bg-black text-white">
                <div className="w-[20%] h-full flex  flex-wrap p-6 break-words">
                  <div className="w-full h-[60%] flex  flex-wrap">
                    <div className="h-[15%] w-full text-4xl font-primary font-bold pb-8">
                      Easy Features
                    </div>
                    <div className="h-[55%] w-full flex flex-col flex-wrap gap-14">
                      <div className="w-full h-[10%] text-xl font-primary font-bold ">
                        Year Accomplished
                        <div className="text-base text-gray-300">2022</div>
                      </div>
                      <div className="w-full text-xl font-primary font-bold h-[10%]">
                        Role/Position
                        <div className="text-base text-gray-300">
                          Front End Developer
                        </div>
                      </div>
                      <div className="w-full text-xl font-primary font-bold h-[10%]">
                        Publication Link
                        <a
                          href="https://easyfeatures.netlify.app"
                          target="_blank"
                        >
                          <div className="text-base text-gray-300">
                            easyfeatures.netlify.app
                          </div>
                        </a>
                      </div>
                      <div className="w-full text-xl font-primary font-bold h-[10%]">
                        Repository
                        <a
                          href="https://github.com/Bfungcode/EasyFeatures"
                          target="_blank"
                        >
                          <div className="text-base text-gray-300">
                            github.com/Bfungcode/EasyFeatures
                          </div>
                        </a>
                      </div>
                      <div className="w-full text-xl font-primary font-bold h-[10%] ">
                        Stacks
                        <div className="text-base text-gray-300">
                          JavaScript
                        </div>
                        <div className="text-base text-gray-300">React JS</div>
                        <div className="text-base text-gray-300">CSS</div>
                      </div>
                      <div
                        className="flex flex-row flex-wrap justify-start gap-2 items-center cursor-pointer mt-4 h-[10%]"
                        onClick={() => turnPt(setTurn4, turn4)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="52"
                          height="52"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ffffff"
                          stroke-width="1"
                          stroke-linecap="square"
                          stroke-linejoin="bevel"
                        >
                          <path d="M19 12H6M12 5l-7 7 7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[80%] h-full flex-col flex-wrap p-6 ">
                  <div className="w-full h-5 text-xl font-primary font-bold pt-2">
                    Project Description
                  </div>
                  <div className="w-full h-[95%] flex flex-col gap-6 flex-wrap pt-5">
                    <div className="w-full h-[30%]">
                      <div className="text-base text-gray-200">
                        I developed a personal website portfolio aimed at
                        contributing to the React JS Front End Developer
                        community. While creating features using React JS and
                        vanilla JavaScript or pure methods without any
                        framework, I encountered challenges and time-consuming
                        tasks. For instance, implementing a simple slider
                        feature in vanilla JavaScript involves straightforward
                        DOM manipulation. However, as a React JS developer, I
                        had to follow the React way, utilizing React Hooks,
                        among other methods. The difference in rendering
                        components and DOM behavior in React JS posed
                        challenges. For example, React DOM escapes any values
                        embedded in JSX before rendering them. This discrepancy
                        sometimes made implementing simple features more
                        complex, despite their identical logic functioning in
                        purely JavaScript websites.
                      </div>
                      <div className="text-lg text-gray-200 font-semibold">
                        To streamline the development process and address these
                        challenges, I designed and developed React JS templates
                        for widely used features or basic functionalities
                        essential for websites. These templates allow developers
                        to directly copy and paste the JSX code and style it
                        according to their preferences without worrying about
                        the underlying complexities.
                      </div>
                    </div>
                    <div className="w-full h-[70%] flex flex-row flex-wrap transition-all duration-1000 ease-in-out">
                      <div className="h-full w-[40%]  p-2 flex flex-col flex-wrap gap-2">
                        <div className="w-full h-[40%]">
                          <img
                            src="/ef1.png"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="w-full h-[60%] ">
                          <img
                            src="/ef2.png"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="h-full w-[40%]  p-2 flex flex-col flex-wrap gap-2">
                        <div className="w-full h-[60%]">
                          <img
                            src="/ef3.png"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="w-full h-[40%] bg-gray-400">
                          <img
                            src="/ef4.png"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="h-full w-[20%] p-1 mt-1 flex flex-colflex-wrap gap-2">
                        <img
                          src="/ef5.png"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-[300px] flex flex-row justify-between flex-wrap  transition-all duration-1000 ease-in-out">
                {hover4 ? (
                  <>
                    <div
                      className="w-full h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-black p-6 transition-all duration-1000 ease-in-out cursor-pointer"
                      onMouseMove={handleMouseEnter(setHover4)}
                      onMouseLeave={handleMouseLeave(setHover4)}
                      onClick={() => turnPt(setTurn4, turn4)}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute border-t-2 border-l-2 border-white border-solid w-[30%] h-[50%] left-0 top-0"></div>
                        <div className="absolute border-r-2 border-b-2 border-white border-solid w-[30%] h-[50%] right-0 bottom-0"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-start h-full w-full text-4xl p-6">
                          <div className="w-full font-secondary text-white text-6xl p-6   text-center">
                            Easy Features
                            <div className="text-2xl font-secondary">
                              a Dedicated website built with React JS and
                              designed to assist developers working with
                              React.js. With its extensive collection of JSX
                              templates and CSS code snippets,
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-[30%] h-full border-black border-b-2   bg-white">
                      <div className="w-full h-full  flex flex-col flex-wrap">
                        <img
                          src="/ef1.png"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        ></img>
                      </div>
                    </div>
                    <div
                      className="w-[70%] h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-black p-6 cursor-pointer "
                      onMouseMove={handleMouseEnter(setHover4)}
                      onMouseLeave={handleMouseLeave(setHover4)}
                      onClick={() => turnPt(setTurn4, turn4)}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute border-t-2 border-l-2 border-white border-solid w-[30%] h-[50%] left-0 top-0"></div>
                        <div className="absolute border-r-2 border-b-2 border-white border-solid w-[30%] h-[50%] right-0 bottom-0"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-start h-full w-full text-4xl p-6">
                          <div className="w-full font-secondary text-white text-6xl p-6   text-center">
                            Easy Features
                            <div className="text-2xl font-secondary">
                              a Dedicated website built with React JS and
                              designed to assist developers working with
                              React.js. With its extensive collection of JSX
                              templates and CSS code snippets,
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col flex-wrap  border-2 border-black border-b-0 ">
          <div className="w-full h-[119px] bg-white text-black font-secondary text-[52px] md:text-[72px] text-center flex justify-center items-center border-b-2 border-black">
            <div> Projects</div>
          </div>
          {projectsData.map((project) => (
            <>
              {project.white ? (
                <>
                  {project.state ? (
                    <>
                      <div className="h-[600px] md:h-[800px] w-full border-b-2 border-black flex flex-col flex-wrap relative transition-all duration-1000 ease-out">
                        <div
                          className="absolute top-2 right-2"
                          onClick={() => {
                            project.setState(false);
                          }}
                        >
                          <ArrowBackBlack />
                        </div>
                        <div className="w-full h-full p-4 flex flex-col flex-wrap">
                          <div className="w-full h-[65%] md:h-[55%]">
                            <div className="w-full h-[60px] font-secondary text-[28px] md:text-[42px] flex justify-center items-center font-bold">
                              {project.name}
                            </div>
                            <div className="w-full h-[60px]">
                              <div className="font-primary font-semibold md:text-[22px]">
                                Year Accomplished
                              </div>
                              <div className="font-primary text-gray-600 md:text-[20px]">
                                {project.year}
                              </div>
                            </div>
                            <div className="w-full h-[60px]">
                              <div className="font-primary font-semibold md:text-[22px]">
                                Role/Position
                              </div>
                              <div className="font-primary text-gray-600 md:text-[20px]">
                                {project.role}
                              </div>
                              <div className="font-primary text-gray-600"></div>
                            </div>
                            <div className="w-full h-[60px]">
                              <div className="font-primary font-semibold md:text-[22px]">
                                Publication Link
                              </div>
                              <div className="font-primary text-gray-600 md:text-[20px]">
                                <a href={project.link}>Cartal</a>
                              </div>
                            </div>
                            <div className="w-full h-[60px]">
                              <div className="font-primary font-semibold md:text-[22px]">
                                Repository
                              </div>
                              <div className="font-primary text-gray-600 md:text-[20px]">
                                <a href={project.repo}>Cartal</a>
                              </div>
                            </div>
                            <div className="w-full h-[60px]">
                              <div className="font-primary font-semibold md:text-[22px]">
                                Stacks
                              </div>
                              <div className="font-primary text-gray-600 md:text-[20px]">
                                {project.stacks}
                              </div>
                            </div>
                          </div>
                          <div className="w-full h-[35%] md:h-[45%]">
                            <div className="w-full h-[85%] flex justify-center items-center">
                              <img
                                src={`/pt${project.pt}/ft${project.imgNum}.png`}
                                className="min-w-[200px] max-w-[900px] h-full"
                              />
                            </div>
                            <div className="w-full h-[15%] flex flex-row justify-around text-[16px] md:text-[20px] items-center">
                              <div
                                onClick={handlePrevious(
                                  project.num,
                                  project.imgNum,
                                  project.setImgNum,
                                  setPrevious
                                )}
                                disabled={project.imgNum <= 1}
                              >
                                {project.imgNum <= 1 ? (
                                  <span className="opacity-50">Previous</span>
                                ) : (
                                  <div>Previous</div>
                                )}
                              </div>
                              <div
                                onClick={handleNext(
                                  project.num,
                                  project.imgNum,
                                  project.setImgNum,
                                  project.ft
                                )}
                                disabled={project.imgNum >= project.ft}
                              >
                                {project.imgNum >= project.ft ? (
                                  <span className="opacity-50">Next</span>
                                ) : (
                                  <div>Next</div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="h-[100px] md:h-[150px] w-full border-b-2 border-black flex flex-row flex-wrap transition-all duration-1000 ease-out"
                        onClick={() => project.setState(true)}
                      >
                        <div className="w-[40%] h-full">
                          <img
                            src={`/pt${project.pt}/ft${project.imgNum}.png`}
                            className="w-full h-full object-fill"
                          ></img>
                        </div>
                        <div className="w-[60%] h-full font-secondary text-[22px] md:text-[44px] flex justify-center items-center bg-white relative">
                          <div className="w-[60%] h-[30%] border-t-2 border-l-2 border-black absolute left-5 top-5"></div>
                          {project.name}
                          <div className="w-[60%] h-[30%] border-b-2 border-r-2 border-black absolute right-5 bottom-5"></div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  {project.state ? (
                    <>
                      <div className="h-[600px] md:h-[800px] w-full border-b-2 border-black flex flex-col flex-wrap bg-black relative transition-all duration-1000 ease-out">
                        <div
                          className="absolute right-2 top-2"
                          onClick={() => {
                            project.setState(false);
                          }}
                        >
                          <ArrowBackWhite />
                        </div>
                        <div className="w-full h-full p-4 flex flex-col flex-wrap text-white">
                          <div className="w-full h-[65%] md:h-[55%]">
                            <div className="w-full h-[60px] font-secondary text-[28px] md:text-[42px] flex justify-center items-center font-bold">
                              {project.name}
                            </div>
                            <div className="w-full h-[60px]">
                              <div className="font-primary font-semibold md:text-[22px]">
                                Year Accomplished
                              </div>
                              <div className="font-primary text-gray-300 md:text-[20px]">
                                {project.year}
                              </div>
                            </div>
                            <div className="w-full h-[60px]">
                              <div className="font-primary font-semibold md:text-[22px]">
                                Role/Position
                              </div>
                              <div className="font-primary text-gray-300 md:text-[20px]">
                                {project.role}
                              </div>
                              <div className="font-primary text-gray-300"></div>
                            </div>
                            <div className="w-full h-[60px]">
                              <div className="font-primary font-semibold md:text-[22px]">
                                Publication Link
                              </div>
                              {Array.isArray(project.link) ? (
                                <>
                                  <div className="font-primary text-gray-300 flex gap-1 md:text-[20px]">
                                    <a href={project.link}>Website,</a>
                                    <a href={project.link}>Figma</a>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="font-primary text-gray-300">
                                    <a href={project.link}>Cartal</a>
                                  </div>
                                </>
                              )}
                            </div>
                            <div className="w-full h-[60px]">
                              <div className="font-primary font-semibold md:text-[22px]">
                                Repository
                              </div>
                              <div className="font-primary text-gray-300 md:text-[20px]">
                                <a href={project.repo}>Cartal</a>
                              </div>
                            </div>
                            <div className="w-full h-[60px]">
                              <div className="font-primary font-semibold md:text-[22px]">
                                Stacks
                              </div>
                              <div className="font-primary text-gray-300 md:text-[20px]">
                                {project.stacks}
                              </div>
                            </div>
                          </div>
                          <div className="w-full h-[35%] md:h-[45%]  md:pr-20 md:pl-20">
                            <div className="w-full h-[85%] flex justify-center items-center">
                              <img
                                src={`/pt${project.pt}/ft${project.imgNum}.png`}
                                className="min-w-[200px] max-w-[900px] h-full"
                              />
                            </div>
                            <div className="w-full h-[15%] flex flex-row justify-around items-center text-[16px] ">
                              <div
                                onClick={handlePrevious(
                                  project.num,
                                  project.imgNum,
                                  project.setImgNum
                                )}
                                disabled={project.imgNum <= 1}
                              >
                                {project.imgNum <= 1 ? (
                                  <span className="opacity-50">Previous</span>
                                ) : (
                                  <div>Previous</div>
                                )}
                              </div>

                              <div
                                onClick={handleNext(
                                  project.num,
                                  project.imgNum,
                                  project.setImgNum,
                                  project.ft
                                )}
                                disabled={project.imgNum >= project.ft}
                              >
                                {project.imgNum >= project.ft ? (
                                  <span className="opacity-50">Next</span>
                                ) : (
                                  <div>Next</div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="h-[100px] md:h-[150px] w-full border-b-2 border-black flex flex-row flex-wrap transition-all duration-1000 ease-out"
                        onClick={() => project.setState(true)}
                      >
                        <div className="w-[60%] h-full font-secondary text-[22px] md:text-[44px] flex justify-center items-center bg-black relative text-white">
                          <div className="w-[60%] h-[30%] border-t-2 border-l-2 border-white absolute left-5 top-5"></div>
                          {project.name}
                          <div className="w-[60%] h-[30%] border-b-2 border-r-2 border-white absolute right-5 bottom-5"></div>
                        </div>
                        <div className="w-[40%] h-full">
                          <img
                            src={`/pt${project.pt}/ft${project.imgNum}.png`}
                            className="w-full h-full object-fill"
                          ></img>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
