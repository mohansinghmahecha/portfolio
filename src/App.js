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
        <Header id="home" className="overflow"/>
      </section>

      <section id="about-section">
        <AboutUs className="overflow"/>
      </section>

      <section id="portfolio-section">
        <Portfolio className="overflow"/>
      </section>

      <section id="contect" >
        <ContactUs className="overflow"/>
      </section>
    </div>
  );
}

export default App;
