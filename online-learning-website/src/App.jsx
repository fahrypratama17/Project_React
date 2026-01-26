import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import BrandBanner from "./components/BrandBanner.jsx";
import CourseCategories from "./components/CourseCategories.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandBanner />
        <CourseCategories />
      </main>
      <Footer />
    </>
  );
};

export default App;
