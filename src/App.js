import React from "react";
import Menu from "./component/navbar/Menu";
import Header from "./component/Header.js/Header";
import AboutUs from "./component/AboutUs/AboutUs";
import ContactUs from "./component/ContectUs";
import Portfolio from "./component/portfolio/Portfolio";

function App() {
  return (
    <div>
      <Menu />
      <section>
        <Header id="home" />
      </section>

      <section id="about-section">
        <AboutUs />
      </section>

      <section id="portfolio-section">
        <Portfolio />
      </section>

      <section id="contect">
        <ContactUs />
      </section>
    </div>
  );
}

export default App;
