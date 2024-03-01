import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Designs from "./components/Designs";
import Skillset from "./components/Skillset";
import Contacts from "./components/Contacts";

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
      setIsLarge(window.innerWidth >= 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="bg-[rgb(241,239,233)]">
        <div className="w-full h-full overflow-x-auto">
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
          <Skillset isLarge={isLarge} />
          <Contacts
            isLarge={isLarge}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </>
  );
}

export default App;
