import React from "react";
import About from "../About/About";
import HomeServices from "../HomeServices/HomeServices";
import Hero from "./../Hero/Hero";

const Home = () => {
  return (
    <main>
      <Hero></Hero>
      <HomeServices></HomeServices>
      <About></About>
    </main>
  );
};

export default Home;
