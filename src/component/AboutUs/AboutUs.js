import React from "react";
import imgLeft from "../assert/about-us-demo.jpg";

export default function AboutUs() {
  return (
    <div id="about-section " className="about containerbox">
      <h1>About Us</h1>
      <p>Best Developer i am</p>
      <div className="grid center ">
        <img src={imgLeft} alt="" className="img-width" />
        <p className="para">
          I'm currently a front-end development student at ss jain Jaipur,
          honing my skills in crafting user-centric web experiences. My passion
          for web development stems from the ability to bring ideas to life
          through code and create interactive interfaces. Throughout my academic
          journey, I've gained a strong foundation in HTML, CSS, and JavaScript,
          along with frameworks like React . Being an eager learner, I actively
          seek out opportunities to expand my knowledge base. I participate in
          online courses and hackathons to stay updated on the latest trends and
          technologies in the front-end development landscape. I'm a highly
          motivated and results-oriented individual with a keen eye for detail
          and a dedication to creating user-friendly and visually appealing web
          applications.
        </p>
      </div>
    </div>
  );
}
