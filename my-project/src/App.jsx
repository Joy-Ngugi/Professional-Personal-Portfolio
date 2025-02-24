// import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
// import Footer from "./components/Footer";
import "./styles/styles.css"; // Import custom CSS

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default App;


