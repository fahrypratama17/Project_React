import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Courses from "./components/Courses.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Courses />
      </main>
    </>
  );
};

export default App;