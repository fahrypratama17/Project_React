import React from "react";
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ShowcaseSection />
      </main>
    </>
  );
};

export default App;
