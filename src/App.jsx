import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What We Offer" subtitle="OUR PROGRAM" />
        <Programs />
        <About />
        <Title title="Campus Photos" subtitle="Gallery" />
        <Campus />
        <Title title="What Student Says" subtitle="TESTIMONIALS" />
        <Testimonials />
        <Title title="Get in Touch" subtitle="Contact Us" />
        <Contact />
      </div>
    </div>
  );
};

export default App;
