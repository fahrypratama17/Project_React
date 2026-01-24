import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
      </main>
    </>
  );
};

export default App;