import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import BrandBanner from "./components/BrandBanner.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandBanner />
      </main>
      <Footer />
    </>
  );
};

export default App;
