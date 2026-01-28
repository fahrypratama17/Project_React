import React from "react";
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./components/Navbar.jsx";
import LogoSection from "./components/LogoSection.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ShowcaseSection />
        <LogoSection />
      </main>
    </>
  );
};

export default App;
