import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import BrandBanner from "./components/BrandBanner.jsx";
import CourseCategories from "./components/CourseCategories.jsx";
import Courses from "./components/Courses.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandBanner />
        <CourseCategories />
        <Courses />
      </main>
      <Footer />
    </>
  );
};

export default App;
